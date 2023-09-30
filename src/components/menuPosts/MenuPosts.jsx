import Image from "next/image";
import styles from "./menuPosts.module.css";
import Link from "next/link";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>

          <div className={styles.details}>
            <span className={styles.username}>Felix Olali - </span>
            <span className={styles.date}>30.09.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>

          <div className={styles.details}>
            <span className={styles.username}>Felix Olali - </span>
            <span className={styles.date}>30.09.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>

          <div className={styles.details}>
            <span className={styles.username}>Felix Olali - </span>
            <span className={styles.date}>30.09.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>

          <div className={styles.details}>
            <span className={styles.username}>Felix Olali - </span>
            <span className={styles.date}>30.09.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
