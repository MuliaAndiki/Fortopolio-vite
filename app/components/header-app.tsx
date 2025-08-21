import ToggleTheme from "../core/components/toggole.theme";
import UseTooltip from "../core/components/tooltip";
import View from "./ui/view";
import { NavbarApp } from "../config/app.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Text from "./ui/text";

export default function HeaderApp() {
  const pathname = usePathname();
  return (
    <header>
      <View className="flex justify-between items-center p-1">
        <View className="">
          <Text>Icon</Text>
        </View>
        <View className="flex gap-4 border border-[var(--shapeV1-parent)]/80 py-2 px-4 rounded-2xl">
          {NavbarApp.map((items, key) => {
            // Setup IsActive
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

        <UseTooltip content="Theme">
          <ToggleTheme />
        </UseTooltip>
      </View>
    </header>
  );
}
