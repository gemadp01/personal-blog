import { getPostsData } from "@/lib/getPosts";
import styles from "./index.module.scss";
import Card from "@/components/Card";
import type { TPostData } from "@/types/postData";
import { useMemo, useState } from "react";
import Head from "next/head";

type TPosts = {
  serializedPosts: TPostData[];
};

export default function AllPosts({ serializedPosts }: TPosts) {
  // console.log(serializedPosts);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredPostsData = useMemo(() => {
    if (!searchValue) return serializedPosts;
    const filteredPosts = serializedPosts.filter((post) =>
      post.data.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredPosts;
  }, [serializedPosts, searchValue]);

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Blog by gemadp" />
      </Head>
      <div className={styles.banner}>
        <h1>My Blog Posts</h1>
        <p>A list of all my past blog posts</p>
      </div>
      <div>
        <div>
          <input
            onChange={handleChange}
            className={styles.search}
            type="text"
            placeholder="Search blog posts title"
          />
        </div>
        {filteredPostsData.map(
          ({ id, data: { title, date, summary, image } }) => (
            <div key={id} className={styles.cardWrapper}>
              <Card
                url={`/posts/${id}`}
                date={date}
                thumbnail={image}
                title={title}
                summary={summary}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postsData = getPostsData({ limit: 0 });

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
