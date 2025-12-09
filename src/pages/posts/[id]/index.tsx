import styles from "./index.module.scss";

import Image from "next/image";

export default function PostPage() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>Title</h1>
          <p className={styles.date}>date</p>
          <p className={styles.summary}>summary</p>
        </div>
        <Image
          alt=""
          src=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {/* <Markdown>{content}</Markdown> */}
    </>
  );
}
