import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface TPostCardProps {
  title: string;
  summary: string;
  thumbnail?: string;
  url: string;
}

const PostCard = ({ title, summary, thumbnail, url }: TPostCardProps) => {
  return (
    <section className={styles.container} data-no-image={!thumbnail}>
      <Link href={url}>
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
      </Link>
    </section>
  );
};

export default PostCard;
