import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, ase here!</b> Discover my stories and creative ideas.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" />
        </div>
        <div className={styles.textContainer}></div>
      </div>
    </div>
  );
};

export default Featured;
