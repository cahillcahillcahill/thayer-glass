import styles from "./Header.module.css";

export default function Header({ title }) {
  return <div className={styles.title}>{title}</div>;
}
