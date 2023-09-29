"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { left: 1, backgroundColor: "#fff" }
          : { right: 1, backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" height={15} width={15} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "#fff" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" height={15} width={15} />
    </div>
  );
};

export default ThemeToggle;
