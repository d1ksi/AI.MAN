type IconProps = {
  icon: string;
};

const Icon: React.FC<IconProps> = (props) => {
  const isMobile = window.matchMedia("(max-width: 570px)").matches;
  return props.icon === "right" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "60" : "82"}
      height={isMobile ? "60" : "82"}
      viewBox="0 0 82 82"
      fill="none"
    >
      <path
        d="M17.083 41H64.9163"
        stroke="url(#paint0_linear_1115_2591)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 17.083L64.9167 40.9997L41 64.9163"
        stroke="url(#paint1_linear_1115_2591)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1115_2591"
          x1="66.6247"
          y1="41.9071"
          x2="66.5649"
          y2="39.6947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7F306" />
          <stop offset="1" stopColor="#F3CD06" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1115_2591"
          x1="65.7708"
          y1="60.4747"
          x2="30.1471"
          y2="46.7002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7F306" />
          <stop offset="1" stopColor="#F3CD06" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "60" : "82"}
      height={isMobile ? "60" : "82"}
      viewBox="0 0 82 82"
      fill="none"
    >
      <path
        d="M64.917 41H17.0837"
        stroke="url(#paint0_linear_1115_2594)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 17.083L17.0833 40.9997L41 64.9163"
        stroke="url(#paint1_linear_1115_2594)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1115_2594"
          x1="15.3753"
          y1="41.9071"
          x2="15.4351"
          y2="39.6947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7F306" />
          <stop offset="1" stopColor="#F3CD06" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1115_2594"
          x1="16.2292"
          y1="60.4747"
          x2="51.8529"
          y2="46.7002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7F306" />
          <stop offset="1" stopColor="#F3CD06" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
