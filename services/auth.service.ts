import { removeItem } from "@/lib/async-storage";
import { getAuthActions } from "@/store/sipp";
import Toast from "react-native-toast-message";

export const handleLogoutSession = async () => {
    const { clearAuthSession } = getAuthActions();
    clearAuthSession();
    await removeItem("accesstoken");
    await removeItem("app_name");
  
    Toast.show({ text1: "Loging Out", text2: "Berhasil Logout" });
  };
  