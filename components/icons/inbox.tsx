import { FC } from 'react';

const InboxIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 0.257324H2C0.897 0.257324 0 1.15432 0 2.25732V14.2573C0 15.3603 0.897 16.2573 2 16.2573H18C19.103 16.2573 20 15.3603 20 14.2573V2.25732C20 1.15432 19.103 0.257324 18 0.257324ZM18 2.25732V2.76832L10 8.99132L2 2.76932V2.25732H18ZM2 14.2573V5.30132L9.386 11.0463C9.56111 11.1839 9.77733 11.2586 10 11.2586C10.2227 11.2586 10.4389 11.1839 10.614 11.0463L18 5.30132L18.002 14.2573H2Z"
      fill="white"
    />
  </svg>
);

export default InboxIcon;
