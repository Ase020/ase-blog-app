"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.socialBtn} onClick={() => signIn("google")}>
          Sign in with Google
        </button>
        <button className={styles.socialBtn}>Sign in with Github</button>
        <button className={styles.socialBtn}>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
