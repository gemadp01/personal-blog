import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

export type TGithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
};

export type TGithubProjectProps = {
  repos: TGithubRepo[];
};

const Card = dynamic(() => import("@/components/Card"), { ssr: false });

export default function GithubProjectsPage(props: TGithubProjectProps) {
  // console.log(props);
  const { repos } = props;
  return (
    <>
      <Head>
        <title>Github Projects</title>
        <meta name="description" content="Blog by gemadp" />
      </Head>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>Github Projects</h1>
          <p className={styles.summary}>
            Check out my Github projects that I have been working on!
          </p>
          <Link href="https://github.com/gemadp01">
            <button>Check out my profile</button>
          </Link>
        </div>
        <Image
          alt="Github Banner"
          src="/gh-banner.png"
          quality={25}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        {repos.map(({ id, name, description, html_url, created_at }) => (
          <div key={id} className={styles.cardWrapper}>
            <Card
              date={created_at}
              url={html_url}
              title={name}
              summary={description ?? "No description"}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // console.log(process.env.BASE_GH_ENDPOINT);
  const res = await fetch(
    `${process.env.BASE_GH_ENDPOINT}/${process.env.GH_USERNAME}/repos`
  );

  const data = await res.json();

  return {
    props: {
      repos: data,
    },
  };
}
