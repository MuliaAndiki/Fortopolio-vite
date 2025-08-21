"use client";
import { ThemeProvider } from "@/app/hooks/theme/use-theme";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
