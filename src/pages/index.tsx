import styles from "@/pages/index.module.scss";
import PostCard from "@/components/PostCard";
import { getPostsData } from "@/lib/getPosts";

type TPostsData = {
  id: string;
  content: string;
  data: Record<string, string>;
};

type TPost = {
  serializedPosts: TPostsData[];
};

export default function Home({ serializedPosts }: TPost) {
  // console.log(serializedPosts);

  return (
    <>
      <div>
        <div className={styles.banner}>
          <h1>Hi there! Welcome to my Blog!</h1>
          <p>This is a place to share my personal thoughts.</p>
        </div>
        <h2>Newest Posts</h2>
        <div>
          {serializedPosts.map(
            ({ id, data: { title, date, summary, image } }) => (
              <div key={id} className={styles.cardWrapper}>
                <PostCard
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
      </div>
    </>
  );
}

export function getStaticProps() {
  const postsData = getPostsData({ limit: 4 });

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
