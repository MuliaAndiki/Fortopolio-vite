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
        <View className="flex justify-center items-center min-h-screen">
          <Text className="text-lg font-extrabold">Init Setup</Text>
        </View>
      </Container>
    </DashboardLayout>
  );
};

export default DashboardContainer;
