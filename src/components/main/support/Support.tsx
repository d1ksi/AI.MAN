import styles from "./support.module.scss";

interface Content {
  img: string;
  signature: string;
}

const contents: Content[] = [
  { img: "./support/1.png", signature: "RETAIL AND THE E - COMMERCE" },
  { img: "./support/2.png", signature: "AI FOR THE CONVERSATION" },
  { img: "./support/3.png", signature: "PERSONALIZE AND RELEVANCE" },
  { img: "./support/4.png", signature: "AUGMENTED AND VIRTUAL REALITY" },
  { img: "./support/5.png", signature: "AUTOMATIC FOR VEHICLES" },
];

const Support: React.FC = () => {
  return (
    <section className={styles.supportWrapper}>
      <div>
        <h2>THINGS WE SUPPORT</h2>
      </div>
      <div className={styles.contentWrapper}>
        {contents.map((item, index) => (
          <div className={styles.contentCard} key={index}>
            <img src={item.img} alt="Content photo" />
            <p>{item.signature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
