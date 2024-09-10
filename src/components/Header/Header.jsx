import EnterButton from "../EnterButton/EnterButton";
import Navigation from "../Navigation/Navigation";
import SearchButton from "../SearchButton/SearchButton";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header-wrapper"]}>
          <div className={styles["header-logo"]}>
            <img src="/public/logo.png" alt="logo" />
          </div>
          <Navigation navItems={["Главная", "Избранное"]} />
          <SearchButton />
          <EnterButton text="Войти" />
        </div>
      </div>
    </header>
  );
}
