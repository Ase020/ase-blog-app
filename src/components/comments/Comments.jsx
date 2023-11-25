"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";

import styles from "./comments.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);

  const comments = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return comments;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <form className={styles.write} onSubmit={handleSubmit}>
          <textarea
            className={styles.input}
            placeholder="Write a comment..."
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment?.user?.image}
                      alt={comment?.user?.name}
                      width={40}
                      height={40}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>
                      {comment?.user?.name}
                    </span>
                    <span className={styles.date}>
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>

                <p className={styles.description}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
