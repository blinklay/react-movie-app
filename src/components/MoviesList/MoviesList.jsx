import HeaderButton from "../HeaderButton/HeaderButton";
import styles from "./MoviesList.module.css";
export default function MoviesList() {
  return (
    <div className={styles["movies"]}>
      <HeaderButton text="Новинки" />
      <ul className={styles["movies-list"]}>
        <li className={styles["movies-item"]}>
          <div className={styles["movies-item__poster"]}>
            <img src="" alt="poster to movie" />

            <div className={styles["movies-item__rateing"]}>7.7</div>
            <div className={styles["movies-item__quality"]}>HD</div>
          </div>
          <h3 className={styles["movies-item__header"]}>
            Jack Reacher: Never back
          </h3>
        </li>
      </ul>
    </div>
  );
}
