import * as FileSystem from "expo-file-system";

export default async function downloadFile(
  urlDownload: string,
  fileName: string,
  accessToken?: string,
  mimeType?: "application/pdf" | "application/vnd-xls"
) {
  try {
    // Request directory permissions from the user
    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (permissions.granted) {
      const pdfUrl = urlDownload;

      // Download the PDF to a temporary location
      const downloadResult = await FileSystem.downloadAsync(
        pdfUrl,
        FileSystem.cacheDirectory + "temp",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Read the file content
      const fileContent = await FileSystem.readAsStringAsync(
        downloadResult.uri,
        {
          encoding: FileSystem.EncodingType.Base64, // Read as Base64 to handle binary content
        }
      );

      // Create a file in the user-selected directory
      const newFileUri =
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          `${fileName}.${mimeType === "application/vnd-xls" ? "xlsx" : "pdf"}`,
          mimeType || "application/pdf"
        );

      // Write the file content to the new location
      await FileSystem.writeAsStringAsync(newFileUri, fileContent, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return Promise.resolve(`Berhasil Mendowload File`);
    } else {
      return Promise.reject(`Gagal Mendownload File, permission error`);
    }
  } catch (error) {
    return Promise.reject(`Error downloading the file: ${error}`);
  }
}
