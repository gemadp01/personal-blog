import Head from "next/head";
import styles from "./index.module.scss";

import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/PostCard";

export default function PostPage() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>Github Projects</h1>
          <p className={styles.summary}>
            Check out my Github projects that I have been working on!
          </p>
          <Link href="https://github.com/gemadp01">
            <button>Check out my profile</button>
          </Link>
        </div>
        <Image
          alt=""
          src="/gh-banner.png"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        {new Array(12).fill(null).map((_, index) => (
          <div key={index} className={styles.cardWrapper}>
            <PostCard
              url="https://github.com/gemadp01"
              thumbnail="/blog-images/default.jpeg"
              title={`Post ${index + 1}`}
              summary={`Summary ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
