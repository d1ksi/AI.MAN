import { useState } from "react";
import styles from "./navbar.module.scss";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

interface Menu {
  link: string;
  href: string;
}

export const menu: Menu[] = [
  { link: "PRODUCTS", href: "#" },
  { link: "SOLUTIONS", href: "#" },
  { link: "CUSTOMER", href: "#" },
  { link: "PRICING", href: "#" },
  { link: "RESOURCES", href: "#" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);

  const menuClick = () => {
    setActive(!active);
  };

  return (
    <section className={styles.menu}>
      <button onClick={menuClick}>
        {active ? (
          <AiOutlineMenuUnfold className={styles.btn} />
        ) : (
          <AiOutlineMenuFold className={styles.btn} />
        )}
      </button>
      <div className={`${styles.linkWrapper} ${active ? styles.active : ""}`}>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
