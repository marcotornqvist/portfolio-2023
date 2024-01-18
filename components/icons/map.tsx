import { FC } from 'react';

const MapIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.00006 12.2573C10.2061 12.2573 12.0001 10.4633 12.0001 8.25732C12.0001 6.05132 10.2061 4.25732 8.00006 4.25732C5.79406 4.25732 4.00006 6.05132 4.00006 8.25732C4.00006 10.4633 5.79406 12.2573 8.00006 12.2573ZM8.00006 6.25732C9.10306 6.25732 10.0001 7.15432 10.0001 8.25732C10.0001 9.36032 9.10306 10.2573 8.00006 10.2573C6.89706 10.2573 6.00006 9.36032 6.00006 8.25732C6.00006 7.15432 6.89706 6.25732 8.00006 6.25732Z"
      fill="white"
    />
    <path
      d="M7.42009 20.0713C7.58934 20.1922 7.79211 20.2572 8.00009 20.2572C8.20806 20.2572 8.41084 20.1922 8.58009 20.0713C8.88409 19.8563 16.0291 14.6973 16.0001 8.25732C16.0001 3.84632 12.4111 0.257324 8.00009 0.257324C3.58909 0.257324 8.80377e-05 3.84632 8.80377e-05 8.25232C-0.028912 14.6973 7.11609 19.8563 7.42009 20.0713ZM8.00009 2.25732C11.3091 2.25732 14.0001 4.94832 14.0001 8.26232C14.0211 12.7003 9.61209 16.6853 8.00009 17.9923C6.38909 16.6843 1.97909 12.6983 2.00009 8.25732C2.00009 4.94832 4.69109 2.25732 8.00009 2.25732Z"
      fill="white"
    />
  </svg>
);

export default MapIcon;
