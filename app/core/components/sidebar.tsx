import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/app/components/ui/sidebar";
// import { SidebarItems, DropdownItems } from "@/app/config/side.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import Link from "next/link";
import Text from "@/app/components/ui/text";
import { User2, ChevronUp } from "lucide-react";
import View from "@/app/components/ui/view";
// import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';

export function SidebarPage() {
  // const username = useGetProfileById();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <View className="w-full flex justify-between">
            <SidebarGroupLabel>Mulia Andiki</SidebarGroupLabel>
            <SidebarGroupLabel>
              <SidebarTrigger />
            </SidebarGroupLabel>
          </View>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* {SidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <Text>{item.title}</Text>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* <SidebarMenuButton>
            <User2 />
            {username.data?.data.fullname
              ? username.data.data.fullname
              : "Username"}
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton> */}
        </DropdownMenuTrigger>
        {/* <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width]"
        >
          <DropdownMenuItem>
            {DropdownItems.map((items, key) => (
              <Link key={key} href={items.Keluar.href}>
                <Text>{items.Keluar.title}</Text>
              </Link>
            ))}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {DropdownItems.map((items, key) => (
              <Link key={key} href={items.Pengaturan.href}>
                <Text>{items.Pengaturan.title}</Text>
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent> */}
      </DropdownMenu>
    </Sidebar>
  );
}
