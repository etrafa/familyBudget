import { useState } from "react";
import BarIcon from "./BarIcon";
import Dashboard from "./Dashboard";
import DoughnutIcon from "./DoughnutIcon";
import { useAuth } from "../../firebase/firebaseConfig";

const Dashboards = () => {
  const [activeChart, setActiveChart] = useState("pie");

  const currentUser = useAuth();

  return (
    <main className="w-full">
      <div className="flex justify-end gap-x-4 mt-4 mx-12">
        <DoughnutIcon
          activeChart={activeChart}
          setActiveChart={setActiveChart}
        />
        <BarIcon activeChart={activeChart} setActiveChart={setActiveChart} />
      </div>
      <div className="w-full grid grid-cols-2">
        <Dashboard activeChart={activeChart} dashboardName="This Week" />
        <Dashboard activeChart={activeChart} dashboardName="This Month" />
        <Dashboard activeChart={activeChart} dashboardName="Last Week" />
        <Dashboard activeChart={activeChart} dashboardName="Last Month" />
      </div>
    </main>
  );
};
export default Dashboards;
