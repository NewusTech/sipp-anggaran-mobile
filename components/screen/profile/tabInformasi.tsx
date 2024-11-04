import { IconCalender, IconCaretDown } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DateInput } from "@/components/ui/inputDate";
import { SelectInput } from "@/components/ui/selectInput";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import React from "react";
import { Dimensions } from "react-native";

export default function TabInformasi() {
  return (
    <View style={{ padding: 15, gap: 10 }}>
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <SelectInput
        label="Jenis Kelamin"
        data={[{ title: "Laki-laki" }, { title: "Perempuan" }]}
        placeholder="Jenis Kelamin"
        onSelect={(dataItem: any, index: any) =>
          // field.onChange(dataItem.title)
          console.log("")
        }
        value={"field.value"}
        trailingIcon={<IconCaretDown color="Text 900" />}
        padding={12}
        borderRadius={15}
      />
      <DateInput
        withBorder
        style={{ width: Dimensions.get("window").width - 70 }}
        label={"Tanggal Lahir"}
        trailingIcon={
          <View style={{ marginLeft: "auto" }}>
            <IconCalender width={21} height={21} />
          </View>
        }
        onChange={(date) => console.log("")}
        value={new Date()}
        // errorMessage={fieldState.error?.message}
        // disabled={isNonExpire}
      />
      <TextInput
        label="Tempat Lahir"
        placeholder="Tempat Lahir"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <TextInput
        label="Email"
        placeholder="Email"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <TextInput
        label="Alamat"
        placeholder="Alamat"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <Button style={{ marginTop: 10 }}>SImpan</Button>
    </View>
  );
}
