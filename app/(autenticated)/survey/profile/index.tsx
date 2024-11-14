import { IconCamera } from "@/components/icons";
import TabInformasi from "@/components/screen/profile/tabInformasi";
import TabPassword from "@/components/screen/profile/tabPassword";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/imageModal";
import Loader from "@/components/ui/loader";
import ModalAction from "@/components/ui/modalAction";
import Separator from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import UploadFoto from "@/components/ui/uploadFileFoto";
import View from "@/components/ui/view";
import { BASE_URL_SIPP } from "@/constants";
import { useAppTheme } from "@/context";
import { useGetProfile, usePostUploadFotoProfile } from "@/services";
import { handleLogoutSession } from "@/services/auth.service";
import { useAuthActions } from "@/store/sipp";
import React, { useEffect, useState } from "react";
import { Dimensions, Modal, Pressable, ScrollView } from "react-native";
import Toast from "react-native-toast-message";

export default function index() {
    const { Colors } = useAppTheme();

    const [activeTab, setActiveTab] = useState<"informasi" | "password">(
        "informasi"
    );

    const [modalLogout, setModalLogout] = useState<boolean>(false);
    const [newFotoProfile, setNewFotoProfile] = useState("");
    const [modalProfile, setModalProfile] = useState(false);

    const uploadFotoProfileMutation = usePostUploadFotoProfile();

    const getUser = useGetProfile();
    const user = getUser.data?.data;

    const { setProfile } = useAuthActions();

    const handleLogout = () => {
        handleLogoutSession();
    };

    useEffect(() => {
        setActiveTab("informasi");
    }, []);

    useEffect(() => {
        if (user) {
            setProfile(user);
        }
    }, [user]);

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ backgroundColor: "white" }}
            scrollEnabled={true}
        >
            <View
                style={{
                    backgroundColor: Colors["Info 500"],
                    height: 259,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20,
                }}
            >
                <View style={{ position: "relative" }}>
                    <ImageModal
                        source={
                            getUser.data?.data
                                ? { uri: `${BASE_URL_SIPP}/uploads/${getUser.data.data.image}` }
                                : require("@/assets/images/dummy1.jpg")
                        }
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor: "white",
                        }}
                    />
                    <Pressable
                        style={{
                            backgroundColor: "white",
                            width: 40,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 100,
                            position: "absolute",
                            bottom: 0,
                            right: -10,
                        }}
                        onPress={() => setModalProfile(true)}
                    >
                        <IconCamera width={20} height={20} color="Info 500" />
                    </Pressable>
                </View>
                <Typography
                    fontSize={18}
                    style={{ textAlign: "center", marginTop: 20 }}
                    color="Background 100"
                >
                    {getUser.data?.data.name || "-"}
                </Typography>
                <Typography
                    fontSize={14}
                    fontFamily="Poppins-Light"
                    style={{ textAlign: "center" }}
                    color="Background 100"
                >
                    {getUser.data?.data.email || "-"}
                </Typography>
            </View>
            {/*  */}
            <View style={{ padding: 20, marginTop: 20 }}>
                {/* LOGOUT */}
                <View
                    style={{
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: Colors["Line 300"],
                        borderRadius: 15,
                        padding: 10,
                    }}
                >
                    <Button color="Error 600" onPress={() => setModalLogout(true)}>
                        Logout
                    </Button>
                </View>
            </View>
            <ModalAction
                title="Yakin Ingin Keluar dari akun ini?"
                isLoading={false}
                onAction={handleLogout}
                setVisible={setModalLogout}
                visible={modalLogout}
            />
        </ScrollView>
    );
}
