import { useState } from "react";
import styles from "./business.module.scss";
import { content } from "./content";

const Business: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.businessWrapper}>
      <h2>
        Business with
        <span> AI.</span>
      </h2>
      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <div className={styles.contentTitle}>
            <button onClick={goToPrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 142 142"
                fill="none"
              >
                <g>
                  <path
                    d="M100.462 70.9995H42.7153"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M71 41.5363L41.5372 70.9991L71 100.462"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
            </button>
            <h3>{content[currentIndex].title}</h3>
            <button onClick={goToNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 142 142"
                fill="none"
              >
                <g>
                  <path
                    d="M41.5375 70.9995H99.2847"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M71 41.5363L100.463 70.9991L71 100.462"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
            </button>
          </div>
          {content[currentIndex].texts.map((textItem, textIndex) => (
            <p className={styles.text} key={textIndex}>
              {textItem.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
