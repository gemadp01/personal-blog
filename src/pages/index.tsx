import styles from "@/pages/index.module.scss";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <h1>Hi there! Welcome to my Blog!</h1>
          <p>This is a place to share my personal thoughts.</p>
        </div>
        <h2>Newest Posts</h2>
        <div>
          {new Array(4).fill(null).map((_, index) => (
            <div key={index} className={styles.cardWrapper}>
              <PostCard
                url="/test"
                thumbnail="/blog-images/default.jpeg"
                title={`Post ${index + 1}`}
                summary={`Summary ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
