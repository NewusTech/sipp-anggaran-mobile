import { useAccessToken, usePermission } from "@/store/sipp";
import { jwtDecode } from "jwt-decode";
import React from "react";

export * from "./downloadFile";

export function getLastYears(lastYears: number) {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i < lastYears; i++) {
    years.push((currentYear - i).toString());
  }

  return years;
}

export function IsPermission({
  children,
  permission,
}: {
  permission: string;
  children: React.ReactNode;
}) {
  const userPermissions = usePermission();

  const token = useAccessToken();
  const decoded = jwtDecode(token || "") as any;

  if (
    userPermissions.includes(permission) ||
    decoded.role[0] === "Super Admin"
  ) {
    return children;
  }
  return null;
}

export function isPermission(permission: string) {
  const userPermissions = usePermission();

  const token = useAccessToken();
  const decoded = jwtDecode(token || "") as any;

  if (
    userPermissions.includes(permission) ||
    decoded.role[0] === "Super Admin"
  ) {
    return true;
  }
  return false;
}
