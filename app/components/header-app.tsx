import ToggleTheme from "../core/components/toggole.theme";
import UseTooltip from "../core/components/tooltip";
import View from "./ui/view";
import { NavbarApp } from "../config/app.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../hooks/mobile/useMobile";
import { SidebarTrigger } from "./ui/sidebar";

export default function HeaderApp() {
  const pathname = usePathname();
  const { isMobile } = useIsMobile();
  return (
    <header>
      <View className="flex justify-between items-center p-2">
        <UseTooltip content="Theme">
          <ToggleTheme />
        </UseTooltip>
        {!isMobile && (
          <View className="flex gap-4 border border-[var(--shapeV1-parent)]/80 py-2 px-4 rounded-2xl">
            {NavbarApp.map((items, key) => {
              const isActive = pathname === items.href;
              return (
                <Link href={items.href} key={key}>
                  <View className="text-[var(--shapeV1-parent)]">
                    <UseTooltip content={items.title}>
                      <items.icon />
                    </UseTooltip>
                  </View>
                </Link>
              );
            })}
          </View>
        )}

        <UseTooltip content="Sidebar">
          <SidebarTrigger />
        </UseTooltip>
      </View>
    </header>
  );
}
