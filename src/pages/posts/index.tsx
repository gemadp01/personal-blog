import styles from "./index.module.scss";
import PostCard from "@/components/PostCard";

export default function AllPosts() {
  return (
    <>
      <div className={styles.banner}>
        <h1>My Blog Posts</h1>
        <p>A list of all my past blog posts</p>
      </div>
      <div>
        <div>
          <input
            className={styles.search}
            type="text"
            placeholder="Search blog posts title"
          />
        </div>
        {new Array(12).fill(null).map((_, index) => (
          <div key={index} className={styles.cardWrapper}>
            <PostCard
              url="/posts/123"
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
