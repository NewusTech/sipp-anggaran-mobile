import { IconCaretDown, IconPencil } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ModalSwipe from "@/components/ui/modalSwipe";
import { SelectInput } from "@/components/ui/selectInput";
import { Typography } from "@/components/ui/typography";
import View from "@/components/ui/view";
import { useAppTheme } from "@/context";
import React, { useState } from "react";

export default function TabPersonInCharge() {
  const { Colors } = useAppTheme();

  const [modalPJ, setModalPJ] = useState<boolean>(false);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <Button onPress={() => setModalPJ(true)}>
        <IconPencil color="Background 100" />
        <Typography color="Background 100">Edit Penanggung Jawab</Typography>
      </Button>
      <View style={{ marginTop: 0, gap: 15 }}>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 15,
            }}
          >
            <Typography color="Background 100">Pengawas</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Nama
            </Typography>
            <Typography fontFamily="Poppins-Light">
              Irsyad Abi Izzulhaq
            </Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              NIP
            </Typography>
            <Typography fontFamily="Poppins-Light">-</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Email
            </Typography>
            <Typography fontFamily="Poppins-Light">
              irsyadabiizzulhaq@gmail.com
            </Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Telepon
            </Typography>
            <Typography fontFamily="Poppins-Light">0895640417123</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Bidang
            </Typography>
            <Typography fontFamily="Poppins-Light">-</Typography>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 15,
            }}
          >
            <Typography color="Background 100">Admin</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Nama
            </Typography>
            <Typography fontFamily="Poppins-Light">
              Irsyad Abi Izzulhaq
            </Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              NIP
            </Typography>
            <Typography fontFamily="Poppins-Light">-</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Email
            </Typography>
            <Typography fontFamily="Poppins-Light">
              irsyadabiizzulhaq@gmail.com
            </Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Telepon
            </Typography>
            <Typography fontFamily="Poppins-Light">0895640417123</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Bidang
            </Typography>
            <Typography fontFamily="Poppins-Light">-</Typography>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors["Line 400"],
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors["Line 400"],
              padding: 15,
            }}
          >
            <Typography color="Background 100">Penyedia Jasa</Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
                borderColor: Colors["Line 400"],
                borderBottomWidth: 1,
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Nama
            </Typography>
            <Typography fontFamily="Poppins-Light">
              CV. GLOBAL KONSTRUKSI
            </Typography>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
              },
            ]}
          >
            <Typography
              style={{ width: "33%", textAlign: "left" }}
              fontFamily="Poppins-Light"
            >
              Telepon
            </Typography>
            <Typography fontFamily="Poppins-Light">08956404171124</Typography>
          </View>
        </View>
      </View>
      <ModalSwipe modalVisible={modalPJ} setModalVisible={setModalPJ}>
        <View>
          <Typography
            style={{ marginVertical: 10 }}
            fontFamily="Poppins-Medium"
            fontSize={18}
            color="Info 500"
          >
            Edit Pengawas / Admin
          </Typography>

          <SelectInput
            label="Pilih Pengawas"
            data={[]}
            placeholder="Pelih Pengawas"
            onSelect={(dataItem: any, index: any) =>
              // field.onChange(dataItem.title)
              console.log("")
            }
            value={"field.value"}
            trailingIcon={<IconCaretDown color="Text 900" />}
            padding={12}
            borderRadius={15}
          />
        </View>
      </ModalSwipe>
    </View>
  );
}
