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
                    base64image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAMABQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//EABwQAAICAwEBAAAAAAAAAAAAAAEDAgQAERIGFP/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAGREAAwADAAAAAAAAAAAAAAAAAAEDAhEh/9oADAMBAAIRAxEAPwCbe1tsea8LC67fma2uqTK65SC4xXzHojZA2dbOMYwKXcEUN3qjSP/Z"
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
