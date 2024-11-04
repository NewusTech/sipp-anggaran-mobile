import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { useAccessToken, useAuthActions } from "@/store/sipp";
import { useGetProfile } from "@/services";

export default function SippLayout() {
  const router = useRouter();

  const accessToken = useAccessToken();

  const profileQuery = useGetProfile();

  const { setAccessToken, setProfile } = useAuthActions();

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
