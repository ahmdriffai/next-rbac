import { NextRequest, NextResponse } from "next/server";

const routePermissions: Record<string, string[]> = {
  "/dashboard": ["dashboard:read"],
  "/users": ["users:manage"],
  "/reports": ["report:generate"],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Decode token (HARUS divalidasi di backend, ini hanya contoh sederhana)
  const user = JSON.parse(atob(token.split(".")[1]));
  const userPermissions: string[] = user.permissions || [];

  const path = req.nextUrl.pathname;
  const requiredPermissions = routePermissions[path];

  // Cek apakah user memiliki izin untuk halaman ini
  if (
    requiredPermissions &&
    !requiredPermissions.some((perm) => userPermissions.includes(perm))
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/users", "/reports"], // Proteksi hanya halaman tertentu
};
