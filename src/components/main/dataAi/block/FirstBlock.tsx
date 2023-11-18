import styles from "./block.module.scss";

const FirstBlock: React.FC = () => {
  return (
    <div className={styles.partners}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="202"
        height="160"
        viewBox="0 0 202 160"
        fill="none"
      >
        <rect
          opacity="0.2"
          x="-0.541872"
          y="-0.541872"
          width="158.916"
          height="200.916"
          rx="31.4581"
          transform="matrix(0 -1 -1 0 200.916 158.916)"
          fill="url(#paint0_linear_1115_2418)"
          fillOpacity="0.2"
          stroke="url(#paint1_linear_1115_2418)"
          strokeWidth="1.08374"
        />
        <text className={styles.text1} x="10%" y="45%">
          240+
        </text>
        <text className={styles.text2} x="10%" y="70%">
          PARTNERS
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_1115_2418"
            x1="80"
            y1="0"
            x2="80"
            y2="202"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1115_2418"
            x1="80"
            y1="0"
            x2="80"
            y2="202"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FirstBlock;
