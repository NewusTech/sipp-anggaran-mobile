import { useAppTheme } from "@/context";
import { useEffect, useState } from "react";
import View from "../view";
import { Pressable, StyleSheet } from "react-native";
import { AppColor } from "@/constants";
import { IconCaretLeft, IconCaretRight } from "@/components/icons";
import { Typography } from "../typography";

type PaginatedView = {
  getTable: any;
  setActivePage: (page: number) => void;
};
export default function PaginatedView({
  getTable,
  setActivePage,
}: PaginatedView) {
  const { Colors } = useAppTheme();
  const [currentPage, setCurrentPage] = useState<number>(
    getTable.data?.data.current_page || 1
  );
  const totalPages = getTable.data?.data.last_page || 1;
  const pageRange = 3; // Tentukan jumlah halaman di sekitar halaman saat ini yang akan ditampilkan

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setPage(currentPage + 1);
    }
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
    // Tambahkan logika fetch data jika diperlukan, misalnya:
    // fetchTableData(page);
  };

  const getPaginationButtons = () => {
    const pages = [];

    // Selalu tampilkan halaman pertama
    if (currentPage > 1 + pageRange) {
      pages.push(1);
      if (currentPage > 2 + pageRange) {
        pages.push("...");
      }
    }

    // Tambahkan halaman di sekitar halaman saat ini
    for (
      let i = Math.max(1, currentPage - pageRange);
      i <= Math.min(totalPages, currentPage + pageRange);
      i++
    ) {
      pages.push(i);
    }

    // Selalu tampilkan halaman terakhir
    if (currentPage < totalPages - pageRange) {
      if (currentPage < totalPages - pageRange - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
      }}
    >
      <Pressable
        style={[style.roundedView, currentPage === 1 && { opacity: 0.5 }]}
        onPress={handlePrev}
        disabled={currentPage === 1}
      >
        <IconCaretLeft />
      </Pressable>

      <View style={{ flexDirection: "row", gap: 5 }}>
        {getPaginationButtons().map((page, index) => {
          const isActive = currentPage === page;
          return page === "..." ? (
            <Typography
              key={index}
              color="Text 900"
              style={{ paddingHorizontal: 8 }}
            >
              ...
            </Typography>
          ) : (
            <Pressable
              style={[
                style.roundedView,
                isActive && {
                  backgroundColor: Colors["Info 500"],
                  borderColor: Colors["Info 500"],
                },
              ]}
              key={index}
              onPress={() => setPage(page)}
            >
              <Typography
                fontFamily="Poppins-Medium"
                color={isActive ? "Background 100" : "Text 900"}
              >
                {page}
              </Typography>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        style={[
          style.roundedView,
          currentPage === totalPages && { opacity: 0.5 },
        ]}
        onPress={handleNext}
        disabled={currentPage === totalPages}
      >
        <IconCaretRight />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  roundedView: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColor.light["Line 300"],
    alignItems: "center",
    justifyContent: "center",
  },
});
