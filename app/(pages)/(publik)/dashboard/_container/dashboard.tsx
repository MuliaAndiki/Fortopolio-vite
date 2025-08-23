"use client";
import dynamic from "next/dynamic";
import DashboardLayout from "@/app/core/layouts/dashboard-layout";
import { themeConfig } from "@/app/config/theme.config";
import { useTheme } from "@/app/hooks/theme/use-theme";
import Container from "@/app/components/ui/container";
import View from "@/app/components/ui/view";
import Text from "@/app/components/ui/text";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/mobile/useMobile";
import { Label } from "@radix-ui/react-label";

const ParticlesDynamic = dynamic(
  () => import("@/app/components/magicui/particles"),
  {
    ssr: false,
  }
);

const DashboardContainer = () => {
  const { theme } = useTheme();
  const { isMobile } = useIsMobile();
  const config = themeConfig[theme];
  const DataRoute = [
    { id: "01", label: "Home", path: "#" },
    { id: "02", label: "About", path: "#" },
    { id: "03", label: "Skills", path: "#" },
    { id: "04", label: "Experiences", path: "#" },
    { id: "05", label: "Projects", path: "#" },
    { id: "06", label: "Blogs", path: "#" },
    { id: "07", label: "Contacts", path: "#" },
    { id: "08", label: "Download Resume", path: "#" },
  ];

  return (
    <Container as="main" className="h-screen w-full ">
      <DashboardLayout>
        <ParticlesDynamic
          className="absolute inset-0"
          quantity={120}
          size={0.9}
          color={config.primary.background}
        />
        <View
          as="section"
          className="flex justify-center items-center flex-col h-full"
        >
          <View className="flex flex-1 items-center justify-center w-full  ">
            <View className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl p-4 flex flex-col">
              <View className="flex justify-start items-start gap-2 w-full my-2">
                <Text className=" text-2xl lg:text-3xl font-bold">Hello</Text>
                <Text className=" text-2xl lg:text-3xl font-bold">
                  Everyorne
                </Text>
              </View>
              <View className="relative flex justify-center items-center">
                {!isMobile && (
                  <Text className="absolute left-0 top-0 -translate-x-23 text-lg font-semibold">
                    Greetings.
                  </Text>
                )}
                <Text className="font-semibold sm:text-lg md:text-xl lg:text-2xl text-justify">
                  Greetings, fellow wanderers! I'm Mulia Andiki, your trusty
                  coding bard from the sun-kissed lands of Sidoarjo, East Java,
                  Indonesia. With Next.js and ReactJS as my instruments, I craft
                  code and design magic through Figma, weaving interactive
                  spells of user experience and animation. Your wish is my code!
                </Text>
              </View>
              <View className="relative grid grid-cols-2  sm:grid-cols-2   md:grid-cols-2  lg:grid-cols-3  gap-2 w-full my-2 ">
                {!isMobile && (
                  <Text className="absolute left-0 -translate-x-15 font-semibold text-lg ">
                    Pages.
                  </Text>
                )}
                {DataRoute.map((items, key) => (
                  <Link
                    key={key}
                    href={items.path}
                    className="flex justify-start items-center gap-2 hover:underline duration-300  "
                  >
                    <Label className="text-sm lg:text-lg font-semibold">
                      {[items.id, items.label].join(". ")}
                    </Label>
                  </Link>
                ))}
              </View>
            </View>
          </View>
        </View>
      </DashboardLayout>
    </Container>
  );
};

export default DashboardContainer;
