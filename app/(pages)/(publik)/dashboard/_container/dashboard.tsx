import dynamic from "next/dynamic";
import DashboardLayout from "@/app/core/layouts/dashboard-layout";

const DashboardContainer = () => {
  return (
    <DashboardLayout>
      <div className="h-full w-full">
        <div className="flex justify-center items-center">
          <h1>Init Setup</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardContainer;
