# RBAC (Role-Based Access Control) dengan Next.js

## 📌 Fitur Utama
- **Autentikasi JWT**
- **Middleware Proteksi Halaman**
- **RBAC Dinamis**
- **Menu Dinamis**

---

## 📁 Struktur Proyek
```
├── components
├── layout
├── lib
├── pages
├── middleware.ts
└── README.md
```

---

## 🔧 Instalasi
### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/rbac-nextjs.git
cd rbac-nextjs
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Menjalankan Aplikasi
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

---

## 🔐 Konfigurasi RBAC
### **Middleware Proteksi Halaman** (`middleware.ts`)
```ts
export function middleware(req) {
  // Middleware logic here
}
```

### **Menu Dinamis** (`menu.ts`)
```ts
export const menuItems = [
  { name: 'Dashboard', path: '/dashboard', permissions: ['dashboard:read'] },
];
```

### **Proteksi di Client** (`withPermission.tsx`)
```tsx
const withPermission = (WrappedComponent, requiredPermissions) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};
export default withPermission;
```

### **Sidebar Dinamis** (`Sidebar.tsx`)
```tsx
const Sidebar = () => {
  return <nav>Sidebar</nav>;
};
export default Sidebar;
```

---

## ✅ Kesimpulan
- **Middleware** untuk proteksi halaman.
- **HOC (`withPermission.tsx`)** untuk validasi client-side.
- **Sidebar dinamis** berdasarkan permission user.

🎯 RBAC dengan Next.js siap digunakan!

