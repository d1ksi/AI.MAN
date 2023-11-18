import styles from "./logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <p className={styles.logoText1}>AI.</p>
      <p className={styles.logoText2}>MAN</p>
    </div>
  );
};

export default Logo;
