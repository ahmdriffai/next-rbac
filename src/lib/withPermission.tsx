/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withPermission = (
  WrappedComponent: any,
  requiredPermissions: string[]
) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const [userPermissions, setUserPermissions] = useState<string[]>([]);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        console.log(user);
        setUserPermissions(user.permissions || []);
      }
    }, []);

    useEffect(() => {
      if (
        userPermissions.length > 0 &&
        !requiredPermissions.some((perm) => userPermissions.includes(perm))
      ) {
        router.replace("/unauthorized");
      }
    }, [userPermissions, router]);

    return <WrappedComponent {...props} />;
  };
};

export default withPermission;
