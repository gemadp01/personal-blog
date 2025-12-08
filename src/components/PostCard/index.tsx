import Image from "next/image";
import styles from "./index.module.scss";

interface TPostCardProps {
  title: string;
  summary: string;
  thumbnail?: string;
}

const PostCard = ({ title, summary, thumbnail }: TPostCardProps) => {
  return (
    <section className={styles.container} data-no-image={!thumbnail}>
      {thumbnail && (
        <div className={styles.imageWrapper}>
          <Image
            src={thumbnail}
            fill
            quality={`100`}
            alt={title}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{summary}</p>
    </section>
  );
};

export default PostCard;
