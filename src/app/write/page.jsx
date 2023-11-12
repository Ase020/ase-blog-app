"use client";

import { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import styles from "./write.module.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.title} />

      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>

            <button className={styles.addButton}>
              <Image src="/external.png" alt="plus" width={16} height={16} />
            </button>

            <button className={styles.addButton}>
              <Image src="/video.png" alt="plus" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className={styles.textArea}
        />
      </div>

      <button type="submit" className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;
