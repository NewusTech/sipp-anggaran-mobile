import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textInput";
import View from "@/components/ui/view";
import React from "react";

export default function TabPassword() {
  return (
    <View style={{ padding: 15, gap: 10 }}>
      <TextInput
        label="Old Password"
        placeholder="Old Password"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <TextInput
        label="New Password"
        placeholder="New Password"
        keyboardType="default"
        borderRadius={17}
        color="Info 500"
        //   value={field.value}
        //   onBlur={field.onBlur}
        //   onChangeText={field.onChange}
        //   errorMessage={fieldState.error?.message}
      />
      <TextInput
        label="Re Password"
        placeholder="Re Password"
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
