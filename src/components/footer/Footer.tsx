import Logo from "../header/logo/Logo";
import { menu } from "../header/navbar/Navbar";
import styles from "./footer.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoAndText}>
        <Logo />
        <p className={styles.text}>
          Better data leads to more performance models. Performant models lead
          to faster deployment.
        </p>
      </div>
      <div className={styles.block}>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.link}</a>
            </li>
          ))}
        </ul>
        <div className={styles.line}></div>
        <div className={styles.permissions}>
          <p>© 2022 AI-MAN. All RIGHT RESERVED</p>
          <div>
            <p>TERMS AND CONDITIONS</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
