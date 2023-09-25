import { Pagination } from "..";
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
