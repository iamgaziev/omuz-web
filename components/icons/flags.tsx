

export const USFlag = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    className={className}
    role="img"
    aria-label="United States Flag"
  >
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path
      stroke="#fff"
      strokeWidth="37"
      d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 423.9h640"
    />
    <path fill="#192f5d" d="M0 0h284.8v258.1H0" />
    <marker
      id="us-a"
      markerHeight="30"
      markerWidth="30"
      orient="auto"
      refX="15"
      refY="15"
    >
      <path fill="#fff" d="M30 15L0 30V0z" />
    </marker>
    <path
      fill="#fff"
      d="M37.7 26l6.6-20.3L51 26l-17.3-12.6h21.3z"
    />
  </svg>
);

export const RUFlag = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    className={className}
    role="img"
    aria-label="Russia Flag"
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#0039a6" d="M0 160h640v320H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />
    </g>
  </svg>
);

export const TJFlag = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    className={className}
    role="img"
    aria-label="Tajikistan Flag"
  >
    <path fill="#d52b1e" d="M0 0h640v137.1H0z" />
    <path fill="#fff" d="M0 137.1h640v205.8H0z" />
    <path fill="#006600" d="M0 342.9h640v137.1H0z" />
    <g fill="#f8c300">
      <path d="M373.9 240l-22.9-7.3-12-21-12 21-22.9 7.3 22.9 7.3 12 21 12-21 22.9-7.3z" />
      <path d="M371.7 185.3l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7zm-65.4 0l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7zm116.8 21.6l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7zm-168.2 0l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7z M392.5 282.8l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7zm-107 0l-14.8-4.7-7.7-13.6-7.7 13.6-14.8 4.7 14.8 4.7 7.7 13.6 7.7-13.6 14.8-4.7z" />
      <path d="M320 186a54 54 0 0 0-46.8 27c2.2-1.3 4.8 0 4.8 0s-3.7-11.8 11.8-19.8 30.2-2.1 30.2-2.1S300.9 179 320 179s39.1 12.1 39.1 12.1.9-8-14.7-5.9 11.8 19.8 11.8 19.8 0-1.3 4.8 0A54 54 0 0 0 320 186z" />
    </g>
  </svg>
);
