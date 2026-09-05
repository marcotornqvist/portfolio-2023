import Link from 'next/link';
import ArrowIcon from 'components/arrow-icon';

export default function NotFound() {
  return (
    <section className="page-width page-intro not-found">
      <p className="eyebrow">404 / A little off track</p>
      <h1>
        Nothing here.
        <br />
        <span>Let’s head back.</span>
      </h1>
      <p className="intro">The page you’re looking for couldn’t be found.</p>
      <Link href="/" className="button-link">
        Back to home <span aria-hidden="true"><ArrowIcon /></span>
      </Link>
    </section>
  );
}