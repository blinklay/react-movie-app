import styles from "./HeaderButton.module.css";
export default function HeaderButton({ text }) {
  return (
    <button className={styles["header-button"]}>
      <span>{text}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 4 18 12 6 20"></polyline>
      </svg>
    </button>
  );
}
