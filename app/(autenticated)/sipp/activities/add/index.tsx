import { IconCaretDown } from "@/components/icons";
import Appbar from "@/components/ui/appBar";
import { Button } from "@/components/ui/button";
import { SelectInput } from "@/components/ui/selectInput";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

export default function index() {
  const router = useRouter();
  const { Colors } = useAppTheme();
  return (
    <View backgroundColor="Background 100" style={{ flex: 1 }}>
      <Appbar
        title={"Tambah Data Kegiatan (manual)"}
        variant="light"
        backIconPress={() => router.back()}
      />
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          padding: 15,
          paddingTop: 20,
          paddingBottom: 40,
          gap: 20,
        }}
      >
        <SelectInput
          label="Program"
          data={[]}
          placeholder="Program"
          onSelect={(dataItem: any, index: any) =>
            // field.onChange(dataItem.title)
            console.log("")
          }
          value={"field.value"}
          trailingIcon={<IconCaretDown color="Text 900" />}
          padding={12}
          borderRadius={15}
        />
        <SelectInput
          label="Kegiatan"
          data={[]}
          placeholder="Kegiatan"
          onSelect={(dataItem: any, index: any) =>
            // field.onChange(dataItem.title)
            console.log("")
          }
          value={"field.value"}
          trailingIcon={<IconCaretDown color="Text 900" />}
          padding={12}
          borderRadius={15}
        />
        <SelectInput
          label="Sub Kegiatan"
          data={[]}
          placeholder="Sub Kegiatan"
          onSelect={(dataItem: any, index: any) =>
            // field.onChange(dataItem.title)
            console.log("")
          }
          value={"field.value"}
          trailingIcon={<IconCaretDown color="Text 900" />}
          padding={12}
          borderRadius={15}
        />
        <TextInput
          label="Nama Kegiatan"
          placeholder="Nama Kegiatan"
          keyboardType="default"
          borderRadius={17}
          color="Info 500"
          //   value={field.value}
          //   onBlur={field.onBlur}
          //   onChangeText={field.onChange}
          //   errorMessage={fieldState.error?.message}
        />
        <TextInput
          label="Pagu Anggaran"
          placeholder="Pagu Anggaran"
          keyboardType="default"
          borderRadius={17}
          color="Info 500"
          //   value={field.value}
          //   onBlur={field.onBlur}
          //   onChangeText={field.onChange}
          //   errorMessage={fieldState.error?.message}
        />
        <TextInput
          label="Tahun Kegiatan"
          placeholder="Tahun Kegiatan"
          keyboardType="default"
          borderRadius={17}
          color="Info 500"
          //   value={field.value}
          //   onBlur={field.onBlur}
          //   onChangeText={field.onChange}
          //   errorMessage={fieldState.error?.message}
        />
        <SelectInput
          label="Bidang"
          data={[]}
          placeholder="Bidang"
          onSelect={(dataItem: any, index: any) =>
            // field.onChange(dataItem.title)
            console.log("")
          }
          value={"field.value"}
          trailingIcon={<IconCaretDown color="Text 900" />}
          padding={12}
          borderRadius={15}
        />
        <SelectInput
          label="Sumber Dana"
          data={[]}
          placeholder="Sumber Dana"
          onSelect={(dataItem: any, index: any) =>
            // field.onChange(dataItem.title)
            console.log("")
          }
          value={"field.value"}
          trailingIcon={<IconCaretDown color="Text 900" />}
          padding={12}
          borderRadius={15}
        />
        <TextInput
          label="Jenis Pengadaan"
          placeholder="Jenis Pengadaan"
          keyboardType="default"
          borderRadius={17}
          color="Info 500"
          //   value={field.value}
          //   onBlur={field.onBlur}
          //   onChangeText={field.onChange}
          //   errorMessage={fieldState.error?.message}
        />
        <TextInput
          label="Metode Pemilihan"
          placeholder="Metode Pemilihan"
          keyboardType="default"
          borderRadius={17}
          color="Info 500"
          //   value={field.value}
          //   onBlur={field.onBlur}
          //   onChangeText={field.onChange}
          //   errorMessage={fieldState.error?.message}
        />
        <Button>Simpan</Button>
      </ScrollView>
    </View>
  );
}
