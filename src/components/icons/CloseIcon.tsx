import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: string;
}

const CloseIcon = ({
  color = '#E62245',
  strokeWidth = '2',
  ...props
}: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke={color}
        strokeWidth={strokeWidth?.toString()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
