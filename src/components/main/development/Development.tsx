import styles from "./development.module.scss";
import Icon from "./Icon";

interface Pair {
  title: string;
  text: string;
  img: string;
}

interface Ai {
  title: string;
  text: string;
  img: string;
  arrow: string;
  pair: Pair[];
}

const ai: Ai[] = [
  {
    title: "Annotate",
    text: "Annotate large volumes of 3D sensor, image, and video data.",
    img: "./ai/1.1.png",
    arrow: "right",
    pair: [
      {
        title: "Manage",
        text: "Retrieve human insights for search relevance, ecommerce",
        img: "./ai/1.2.png",
      },
    ],
  },
  {
    title: "Evaluate",
    text: "Quickly choose what data to label with active learning.",
    img: "./ai/2.1.png",
    arrow: "left",
    pair: [
      {
        title: "Automate",
        text: "Achieve robust document understanding and extraction .",
        img: "./ai/2.2.png",
      },
    ],
  },
  {
    title: "Collect",
    text: "Collect and generate, image representative device, video.",
    img: "./ai/3.1.png",
    arrow: "right",
    pair: [
      {
        title: "Generate",
        text: "Augment ground-truth training data with infinite varieties",
        img: "./ai/3.2.png",
      },
    ],
  },
];

const Development: React.FC = () => {
  return (
    <section className={styles.devWrapper}>
      <h2>THE DEVELOPMENT OF AI</h2>
      <div className={styles.aiWrapper}>
        {ai.map((ai, index) => (
          <div key={index} className={styles.pair}>
            <div className={`${styles.block} ${styles.first}`}>
              <img src={ai.img} alt="Icon" />
              <div className={styles.content}>
                <h3>{ai.title}</h3>
                <p>{ai.text}</p>
              </div>
            </div>
            <div className={styles.icon}>
              <Icon icon={ai.arrow} />
            </div>
            {ai.pair.map((item, index) => (
              <div key={index} className={`${styles.block} ${styles.second}`}>
                <img src={item.img} alt="Icon" />
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Development;
