import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment..." />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </div>
      ) : (
        <Link href="login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/coding.png"
              alt="user"
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Felix Nyalenda</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            pariatur ipsam rem placeat a sint aliquid excepturi vero, voluptates
            adipisci ipsa quisquam reprehenderit magnam molestiae? Aliquam illum
            nemo officiis obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
