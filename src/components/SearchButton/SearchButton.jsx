import styles from "./SearchButton.module.css";
export default function SearchButton() {
  return (
    <button className={styles["search-btn"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  );
}
