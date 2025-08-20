import React from 'react';

interface InstagramLogoProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const InstagramLogo: React.FC<InstagramLogoProps> = ({ fill = '#ffffff' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="40px"
      height="40px"
      fillRule="nonzero"
    >
      <g
        fill={fill}
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.33333,5.33333)">
          <path
            d="M41.5,21.1v-4.6c0,-5.5 -4.5,-10 -10,-10h-15c-5.5,0 -10,4.5 -10,10v3"
            fill="none"
            stroke="#bc5418"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.5,25.6v5.9c0,5.5 4.5,10 10,10h15c5.5,0 10,-4.5 10,-10v-4.6"
            fill="none"
            stroke="#bc5418"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M24,15.5c-4.7,0 -8.5,3.8 -8.5,8.5c0,4.7 3.8,8.5 8.5,8.5c4.7,0 8.5,-3.8 8.5,-8.5c0,-4.7 -3.8,-8.5 -8.5,-8.5z"
            fill="none"
            stroke="#bc5418"
            strokeWidth="3"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          ></path>
          <path
            d="M34,12c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2z"
            fill="#bc5418"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          ></path>
        </g>
      </g>
    </svg>
  );
};
export default InstagramLogo;
