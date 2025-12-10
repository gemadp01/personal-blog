import styles from "./index.module.scss";

export const FallbackPostCard = () => {
  return (
    <section className={styles.container}>
      <p>Oops an error occured!</p>
    </section>
  );
};
