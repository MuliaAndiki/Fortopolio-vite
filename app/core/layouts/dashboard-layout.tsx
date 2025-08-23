"use client";
import FooterApp from "@/app/components/footer-app";
import HeaderApp from "@/app/components/header-app";
import Container from "@/app/components/ui/container";
import { SidebarPage } from "../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <HeaderApp />
      <SidebarPage />
      <main className="flex-1">{children}</main>
      <Container className="fixed bottom-0 left-0 w-full z-20 ">
        <FooterApp />
      </Container>
    </div>
  );
}
