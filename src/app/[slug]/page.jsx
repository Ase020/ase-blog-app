import Image from "next/image";
import styles from "./singleblog.module.css";

import { Menu, Comments } from "@/components";

const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>

          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="user" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="user" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              excepturi illo eligendi enim laboriosam, voluptates nostrum
              sapiente nobis repellendus voluptas? Sapiente dolorum illo magnam,
              tempora eveniet commodi tempore officiis omnis.
            </p>

            <h2>Lorem ipsum dolor sit amet consectetur</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              excepturi illo eligendi enim laboriosam, voluptates nostrum
              sapiente nobis repellendus voluptas? Sapiente dolorum illo magnam,
              tempora eveniet commodi tempore officiis omnis.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              excepturi illo eligendi enim laboriosam, voluptates nostrum
              sapiente nobis repellendus voluptas? Sapiente dolorum illo magnam,
              tempora eveniet commodi tempore officiis omnis.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              excepturi illo eligendi enim laboriosam, voluptates nostrum
              sapiente nobis repellendus voluptas? Sapiente dolorum illo magnam,
              tempora eveniet commodi tempore officiis omnis.
            </p>
          </div>

          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
