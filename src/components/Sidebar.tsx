import { menuItems } from "@/lib/menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userPermissions, setUserPermissions] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setUserPermissions(user.permissions || []);
    }
  }, []);
  // Filter menu berdasarkan permission
  const visibleMenus = menuItems.filter((menu) =>
    menu.permissions.some((perm) => userPermissions.includes(perm))
  );

  return (
    <nav className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        {visibleMenus.map((menu) => (
          <li key={menu.path} className="mb-2">
            <Link
              href={menu.path}
              className="block p-2 hover:bg-gray-700 rounded"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
