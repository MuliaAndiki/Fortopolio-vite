"use client";
import dynamic from "next/dynamic";
import DashboardLayout from "@/app/core/layouts/dashboard-layout";
import { themeConfig } from "@/app/config/theme.config";
import { useTheme } from "@/app/hooks/theme/use-theme";
import Container from "@/app/components/ui/container";
import View from "@/app/components/ui/view";
import Text from "@/app/components/ui/text";

const ParticlesDynamic = dynamic(
  () => import("@/app/components/magicui/particles"),
  {
    ssr: false,
  }
);

const DashboardContainer = () => {
  const { theme } = useTheme();
  const config = themeConfig[theme];
  return (
    <DashboardLayout>
      <ParticlesDynamic
        className="absolute inset-0"
        quantity={120}
        size={0.9}
        color={config.primary.background}
      />
      <Container as="main" className="min-h-screen w-full">
        <View className="flex justify-center items-center   min-h-screen flex-col">
          <View className="flex justify-center items-center w-full max-w-2/4 flex-col">
            <View className="flex justify-start items-start gap-2  w-full">
              <Text className="text-3xl font-bold">Hello</Text>
              <Text className="text-3xl font-bold">Everyorne</Text>
            </View>
            <View className="relative flex justify-center items-center">
              <Text className="absolute left-0 top-0 -translate-x-23 text-lg font-semibold">
                Greetings.
              </Text>
              <Text className="font-semibold text-2xl text-justify">
                Greetings, fellow wanderers! I'm Mulia Andiki, your trusty
                coding bard from the sun-kissed lands of Sidoarjo, East Java,
                Indonesia. With Next.js and ReactJS as my instruments, I craft
                code and design magic through Figma, weaving interactive spells
                of user experience and animation. Your wish is my code!
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </DashboardLayout>
  );
};

export default DashboardContainer;
