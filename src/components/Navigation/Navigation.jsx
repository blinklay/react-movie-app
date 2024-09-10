import styles from "./Navigation.module.css";
export default function Navigation({ navItems }) {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-list"]}>
        {navItems.map((item) => (
          <li key={item} className={styles["nav-item"]}>
            <a href="#!">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
