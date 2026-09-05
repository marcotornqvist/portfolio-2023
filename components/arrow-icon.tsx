export default function ArrowIcon({ direction = 'up-right' }: { direction?: 'up-right' | 'up' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'inline-block', verticalAlign: '-0.125em', flexShrink: 0 }}
    >
      <path d={direction === 'up' ? 'M12 19V5m-7 7 7-7 7 7' : 'M5 19 19 5M5 5h14v14'} />
    </svg>
  );
}