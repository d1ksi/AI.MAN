import styles from "./supported.module.scss";

interface Company {
  img: string;
}

const companies: Company[] = [
  { img: "./supported/1.png" },
  { img: "./supported/2.png" },
  { img: "./supported/3.png" },
  { img: "./supported/4.png" },
  { img: "./supported/5.png" },
  { img: "./supported/6.png" },
  { img: "./supported/7.png" },
  { img: "./supported/8.png" },
  { img: "./supported/9.png" },
  { img: "./supported/10.png" },
  { img: "./supported/1.png" },
  { img: "./supported/2.png" },
  { img: "./supported/3.png" },
  { img: "./supported/4.png" },
  { img: "./supported/5.png" },
  { img: "./supported/6.png" },
  { img: "./supported/7.png" },
  { img: "./supported/8.png" },
  { img: "./supported/9.png" },
  { img: "./supported/10.png" },
];

const Supported: React.FC = () => {
  return (
    <section className={styles.supportedWrapper}>
      <h2>SUPPORTED BY</h2>
      <div className={styles.ticker}>
        <div className={styles.tickerWrapper}>
          {companies.map((item, index) => (
            <div className={styles.tickerItem} key={index}>
              <img src={item.img} alt="Company logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supported;
