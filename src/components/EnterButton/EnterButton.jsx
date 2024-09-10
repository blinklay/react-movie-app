import styles from "./EnterButton.module.css";
export default function EnterButton({ text }) {
  return <button className={styles["enter-button"]}>{text}</button>;
}
