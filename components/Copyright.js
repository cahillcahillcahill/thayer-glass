import styles from "./Copyright.module.css";

export default function Copyright() {
  return (
    <div className={styles.copyright}>
      <span className={styles["copyright-symbol"]}>&copy;</span>
      <span className={styles["copyright-words"]}>2021 Jon Thayer</span>
    </div>
  );
}
