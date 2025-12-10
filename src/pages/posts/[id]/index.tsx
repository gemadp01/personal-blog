import { getPostsData } from "@/lib/getPosts";
import styles from "./index.module.scss";

import Image from "next/image";
import { getPostDetail } from "@/lib/getPostsDetail";
import { GetStaticPropsContext } from "next";
import Markdown from "markdown-to-jsx";

type TPostData = {
  content: string;
  data: Record<string, string>;
};

export default function PostPage(props: TPostData) {
  const { content } = props;
  const { title, date, summary, image } = props.data;
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>{title}</h1>
          <p className={styles.date}>{date}</p>
          <p className={styles.summary}>{summary}</p>
        </div>
        <Image
          alt={title}
          src={image}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.cardWrapper}>
        {/* A simple HOC for easy React use. Feed the markdown content as a direct child and the rest is taken care of automatically. */}
        <Markdown>{content}</Markdown>
      </div>
    </>
  );
}

export function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as { id: string };

  console.log(id);

  if (!id) return { notFound: true };

  const post = getPostDetail(id);

  return {
    props: post,
  };
}

export function getStaticPaths() {
  const postsData = getPostsData({ limit: 0 });

  const paths = postsData.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
