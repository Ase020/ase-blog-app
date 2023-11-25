import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map(({ id, slug, title, img }) => (
          <Link
            href={`/blog?cat=${slug}`}
            className={`${styles.category} ${styles[slug]}`}
            key={id}
          >
            {img && (
              <Image
                src={img}
                alt={title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
