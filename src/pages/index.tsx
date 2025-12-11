import styles from "@/pages/index.module.scss";
import { getPostsData } from "@/lib/getPosts";
import type { TPostData } from "@/types/postData";
import Card from "@/components/Card";
import ErrorBoundary from "@/components/ErrorBoundary";
import { FallbackPostCard } from "@/components/Card/FallbackPostCard";
import Head from "next/head";

type TPosts = {
  serializedPosts: TPostData[];
};

export default function Home({ serializedPosts }: TPosts) {
  // console.log(serializedPosts);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Blog by gemadp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.banner}>
          <h1>
            Hi there! Welcome to my Blog!
            {/* <br />
            {process.env.NEXT_PUBLIC_API_HOST} */}
          </h1>
          <p>This is a place to share my personal thoughts.</p>
        </div>
        <h2>Newest Posts</h2>
        <div>
          {serializedPosts.map(
            ({ id, data: { title, date, summary, image } }) => (
              <div key={id} className={styles.cardWrapper}>
                <ErrorBoundary fallback={<FallbackPostCard />} key={id}>
                  <Card
                    url={`/posts/${id}`}
                    date={date}
                    thumbnail={image}
                    title={title}
                    summary={summary}
                  />
                </ErrorBoundary>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const postsData = getPostsData({ limit: 2 });

  // console.log("STATIC PROPS CALLED");
  // console.log("Posts data results: ", postsData);

  const serializedPosts = postsData.map(({ id, data }) => {
    return {
      id,
      data,
    };
  });
  return {
    props: {
      serializedPosts,
    },
  };
}
