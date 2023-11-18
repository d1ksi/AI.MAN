import { useState } from "react";
import styles from "./technologies.module.scss";

interface Advantag {
  text: string;
}

interface Tech {
  title: string;
  description: string;
  advantages: Advantag[];
  img: string;
}

const technologies: Tech[] = [
  {
    title: "RILLCUY",
    description:
      "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.",
    advantages: [
      { text: "Manage Your Datasets" },
      { text: "Automate Document Processing" },
      { text: "Scale Advanced Annotations" },
    ],
    img: "./technologies/1.png",
  },
  {
    title: "TRUKAHH",
    description:
      "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.",
    advantages: [
      { text: "Automate Document Processing" },
      { text: "Manage Your Datasets" },
      { text: "Scale Advanced Annotations" },
      { text: "Automate Document Processing" },
    ],
    img: "./technologies/2.png",
  },
  {
    title: "ASELII",
    description:
      "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.",
    advantages: [
      { text: "Scale Advanced Annotations" },
      { text: "Automate Document Processing" },
    ],
    img: "./technologies/3.png",
  },
  {
    title: "KOCKGMG",
    description:
      "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.",
    advantages: [
      { text: "Scale Advanced Annotations" },
      { text: "Automate Document Processing" },
      { text: "Scale Advanced Annotations" },
      { text: "Manage Your Datasets" },
    ],
    img: "./technologies/4.png",
  },
  {
    title: "MDITURU",
    description:
      "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.",
    advantages: [{ text: "Manage Your Datasets" }],
    img: "./technologies/5.png",
  },
];

const Technologies: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const addClass = (index: number) => {
    setActive((prevActive) => {
      if (index === prevActive) {
        return prevActive;
      } else {
        return index;
      }
    });
  };
  let activeContent = technologies[active];
  return (
    <section className={styles.technologies}>
      <h2>OUR TECHNOLOGIES</h2>
      <div className={styles.titleWrapper}>
        {technologies.map((item, index) => (
          <button
            onClick={() => addClass(index)}
            className={`${styles.title} ${
              active === index ? styles.active : ""
            }`}
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>{activeContent.title}</p>
            <p>AI.</p>
          </div>
          <div className={styles.advantagWrapper}>
            <div className={styles.text}>
              <p>{activeContent.description}</p>
            </div>
            <div className={styles.advantagWrapper}>
              {activeContent.advantages.map((item, index) => (
                <div key={index}>
                  <div className={styles.okey}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="url(#paint0_linear_1115_2569)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1115_2569"
                          x1="20.5714"
                          y1="15.9786"
                          x2="8.478"
                          y2="2.3753"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A7F306" />
                          <stop offset="1" stopColor="#F3CD06" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <button>
              <p>LEARN MORE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g opacity="0.9">
                  <path
                    d="M9.3337 22.667L22.4004 9.60031"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33366 9.33366H22.667V22.667"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <img src={activeContent.img} alt="Techno photo" />
      </div>
    </section>
  );
};

export default Technologies;
