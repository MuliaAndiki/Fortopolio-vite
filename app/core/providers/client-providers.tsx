"use client";
import { ThemeProvider } from "@/app/hooks/theme/use-theme";
import { MobileContex, useIsMobile } from "@/app/hooks/mobile/useMobile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SidebarProvider } from "@/app/components/ui/sidebar";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <SidebarProvider>
      <MobileContex value={isMobile}>
        <ThemeProvider>{children}</ThemeProvider>
      </MobileContex>
    </SidebarProvider>
  );
}
