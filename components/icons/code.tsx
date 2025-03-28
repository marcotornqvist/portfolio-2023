import { FC } from 'react';

const CodeIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.9647 12.6364L25.3283 17L20.9647 21.3636M12.2374 21.3636L7.8738 17L12.2374 12.6364M4.96471 33H28.2374C29.3947 33 30.5047 32.5403 31.323 31.7219C32.1413 30.9036 32.6011 29.7937 32.6011 28.6364V5.36364C32.6011 4.20633 32.1413 3.09642 31.323 2.27808C30.5047 1.45974 29.3947 1 28.2374 1H4.96471C3.8074 1 2.69749 1.45974 1.87915 2.27808C1.06081 3.09642 0.601074 4.20633 0.601074 5.36364V28.6364C0.601074 29.7937 1.06081 30.9036 1.87915 31.7219C2.69749 32.5403 3.8074 33 4.96471 33Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CodeIcon;
