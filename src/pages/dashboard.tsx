import withPermission from "@/lib/withPermission";

const DashboardPage = () => {
  return <h1>Dashboard</h1>;
};

export default withPermission(DashboardPage, ["dashboard:read"]); // Hanya untuk yang punya izin
