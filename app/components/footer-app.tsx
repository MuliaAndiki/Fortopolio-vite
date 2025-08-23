import View from "./ui/view";
import { useIsMobile } from "../hooks/mobile/useMobile";
import Link from "next/link";
import { NavbarApp } from "../config/app.config";
import UseTooltip from "../core/components/tooltip";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FooterApp() {
  const { isMobile } = useIsMobile();
  const pathname = usePathname();

  return (
    <footer>
      <View className="flex justify-center items-center p-2">
        {isMobile && (
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
      </View>
    </footer>
  );
}
