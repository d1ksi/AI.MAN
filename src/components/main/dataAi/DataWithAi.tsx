import FirstBlock from "./block/FirstBlock";
import styles from "./datawithai.module.scss";
import hand from "/datawithai/robot-hand.png";
import matery from "/datawithai/matery.png";
import { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
const DataWithAi: React.FC = () => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [stored, setStored] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const registerRef = useRef<HTMLDivElement>(null);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleAdditionalInfoChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAdditionalInfo(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.length > 0) {
      localStorage.setItem("storedEmail", `userEmail/` + email);
      setEmail("");
      setAdditionalInfo("");
      setStored(true);
    }
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("storedEmail");
    if (storedEmail) {
      setStored(true);
    }
  }, []);
  useEffect(() => {
    if (active && registerRef.current) {
      const registerWidth = registerRef.current.offsetWidth;
      registerRef.current.style.left = `calc(50% - ${registerWidth / 2}px)`;
    }
  }, [active]);
  const addClass = () => {
    setActive(!active);
  };
  const closeForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(false);
  };
  return (
    <section className={styles.dataWrapper}>
      <h1>
        <span>FASTER DATA WITH </span>
        <span>AI.</span>
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div>
            <FirstBlock />
            <div className={styles.technology}>
              <p>92%</p>
              <p>FASTER TECHNOLOGY</p>
            </div>
          </div>
          <div className={styles.materyWrapper}>
            <img className={styles.matery} src={matery} alt="matery" />
          </div>
          <img className={styles.hand} src={hand} alt="hand" />
        </div>
        <div className={styles.textAndBtn}>
          <div className={styles.text}>
            <p>
              Better data leads to more performance models. Performant models
              lead to faster deployment.
            </p>
          </div>
          <div className={styles.btn}>
            <button onClick={addClass}>REGISTER</button>
            <div className={styles.line}></div>
            <a href="#reviews">reviews</a>
          </div>
        </div>
      </div>
      {stored ? (
        <div
          className={`${styles.registered} ${active ? styles.active : ""}`}
          ref={registerRef}
        >
          <div className={styles.btnClose}>
            <button onClick={closeForm}>
              <MdOutlineClose />
            </button>
          </div>
          <div className={styles.circle}>
            <p>
              <IoMdDoneAll />
            </p>
          </div>
          <p>registration completed</p>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              After processing the request, the manager will contact you
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.register} ${active ? styles.active : ""}`}
          ref={registerRef}
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.btnClose}>
              <button onClick={closeForm}>
                <MdOutlineClose />
              </button>
            </div>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Your email"
            />
            <textarea
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
              placeholder="Additional Information"
            ></textarea>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default DataWithAi;
