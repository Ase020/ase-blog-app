import styles from "./blog.module.css";
import { CardList, Menu } from "@/components";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList cat={cat} page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
