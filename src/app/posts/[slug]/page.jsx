import Image from "next/image";
import styles from "./singleblog.module.css";

import { Menu, Comments } from "@/components";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SingleBlog = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={post?.user?.image || "/p1.jpeg"}
                alt={post?.user?.name}
                fill
                className={styles.avatar}
              />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name}</span>
              <span className={styles.date}>
                {post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src={post?.img || "/p1.jpeg"}
            alt={post.title}
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />

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
