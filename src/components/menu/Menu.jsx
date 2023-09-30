import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import { MenuCategories, MenuPosts } from "..";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* most popular */}
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>{"Most Popular"}</h1>
      <MenuPosts withImage={false} />

      {/* Categories */}
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* Editors */}
      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
