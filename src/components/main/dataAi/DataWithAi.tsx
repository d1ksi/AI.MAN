import FirstBlock from "./block/FirstBlock";
import styles from "./datawithai.module.scss";
import hand from "/datawithai/robot-hand.png";
import matery from "/datawithai/matery.png";

const DataWithAi: React.FC = () => {
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
            <button>REGISTER</button>
            <div className={styles.line}></div>
            <a href="#reviews">reviews</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataWithAi;
