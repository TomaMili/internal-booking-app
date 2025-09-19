import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-medium text-5xl mb-3 ml-2">Dashboard</h1>
        <DashboardFilter />
      </div>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
