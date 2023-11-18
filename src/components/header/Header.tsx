import styles from "./header.module.scss";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
