import Link from "next/link";
import styles from "./404.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Oops... the page you are looking for {"doesn't"} exist</h2>
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
