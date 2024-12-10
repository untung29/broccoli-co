import styles from "./Header.module.css";
import { THeaderProps } from "./types";

const Header = ({ title }: THeaderProps) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
