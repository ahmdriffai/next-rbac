import withPermission from "@/lib/withPermission";

const UsersPage = () => {
  return <h1>User Management</h1>;
};

export default withPermission(UsersPage, ["users:manage"]); // Hanya untuk yang punya izin
