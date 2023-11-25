import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ post, key }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post?.img || "/p1.jpeg"}
          alt={post.title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>

        <Link href={`/posts/${post.slug}`}>
          <h1 className={styles.title}>{post.title}</h1>
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: post?.desc.substring(0, 300) }}
          className={styles.desc}
        />
        {/* <p className={styles.desc}>{post.desc.substring(0, 300)}...</p> */}

        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
