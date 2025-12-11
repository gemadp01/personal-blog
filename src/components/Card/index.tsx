import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface TCardProps {
  title: string;
  summary: string;
  thumbnail?: string;
  url: string;
  date?: string;
  base64image: string;
}

const Card = ({
  title,
  summary,
  thumbnail,
  url,
  date,
  base64image,
}: TCardProps) => {
  return (
    <section className={styles.container} data-no-image={!thumbnail}>
      <Link href={url}>
        {thumbnail && (
          <>
            <div className={styles.imageWrapper}>
              <Image
                src={thumbnail}
                fill
                quality={`25`}
                alt={title}
                style={{
                  objectFit: "cover",
                }}
                placeholder="blur"
                blurDataURL={base64image}
              />
            </div>
          </>
        )}
        <p className={styles.date}>{date}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
      </Link>
    </section>
  );
};

export default Card;
