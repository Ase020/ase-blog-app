import { Card, Pagination } from "..";
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>

      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination />
    </div>
  );
};

export default CardList;
