"use client";
import HeaderApp from "@/app/components/header-app";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderApp />
      {children}
    </>
  );
}
