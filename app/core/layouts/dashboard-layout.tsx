"use client";
import FooterApp from "@/app/components/footer-app";
import HeaderApp from "@/app/components/header-app";
import Spreed from "@/app/components/ui/spreed";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderApp />
      {children}
      <FooterApp />
    </>
  );
}
