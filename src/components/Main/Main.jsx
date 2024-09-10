import MoviesList from "../MoviesList/MoviesList";
import styles from "./Main.module.css";
export default function Main() {
  return (
    <main className={styles["main"]}>
      <div className="container">
        <MoviesList />
      </div>
    </main>
  );
}
