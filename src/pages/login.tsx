import { useRouter } from "next/router";
import { FormEvent } from "react";

const LoginPage: React.FC = () => {
  // const email = "fai";
  // const password = "rahasi";
  const router = useRouter();
  const login = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "GET",
    });

    const data = await res.json();
    // console.log(data.token);
    // console.log(data.user);

    if (data.token) {
      document.cookie = `token=${data.token}; path=/`;
      localStorage.setItem("user", JSON.stringify(data.user)); // Simpan permission
      router.push("/users");
    }
  };

  return (
    <main>
      <h3>Login</h3>
      <form action="" onSubmit={(e) => login(e)}>
        <button className="" type="submit">
          Login hire
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
