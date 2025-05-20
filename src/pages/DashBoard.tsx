import { AccountStatisticsCard } from "@/components/cart/AccountStatisticsCard";
import { ChartAreaInteractive } from "@/components/chart/ChartArea";
import { DataTable } from "@/components/table/DataTable";
import data from "../lib/data.json";

const DashboardPage = () => (
  <div className="flex flex-1 flex-col">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <AccountStatisticsCard />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </div>
  </div>
);
export default DashboardPage;
