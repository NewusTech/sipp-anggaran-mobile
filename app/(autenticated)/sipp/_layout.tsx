import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { useAccessToken, useAuthActions } from "@/store/sipp";
import { useGetProfile } from "@/services";
import { getItem } from "@/lib/async-storage";
import { useRouteInfo } from "expo-router/build/hooks";

export default function SippLayout() {
  const router = useRouter();

  const accessToken = useAccessToken();

  const profileQuery = useGetProfile();

  const { setAccessToken, setProfile, setPermission } = useAuthActions();
  const routerInfo = useRouteInfo();

  const getPermission = async () => {
    const _permission = await getItem("permission");
    setPermission(_permission || []);

    console.log(
      _permission,
      "_permission , router.name : ",
      routerInfo.pathname
    );
  };

  useEffect(() => {
    if (!accessToken) {
      router.replace("/(public)/home");
    }
  }, [accessToken, router]);

  useEffect(() => {
    if (profileQuery.data) {
      setProfile(profileQuery.data.data);
    } else if (profileQuery.error) {
      setAccessToken(null);
      router.replace("/(public)/home");
    }
  }, [router, setAccessToken, setProfile, profileQuery.data]);

  useEffect(() => {
    getPermission();
  }, [getPermission, routerInfo.pathname]);

  if (!accessToken) return null;

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios",
        }}
      />
    </>
  );
}
