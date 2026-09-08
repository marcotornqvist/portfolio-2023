import Portrait from 'components/portrait';

export default function PortraitPreview() {
  return (
    <section className="page-width page-intro portrait-preview">
      <p className="eyebrow">Portrait / Motion study</p>
      <h1>Drawn in ink.</h1>
      <p className="intro">
        A four-second line reveal. Press play to preview it, even with reduced
        motion enabled.
      </p>
      <div className="portrait-preview-player">
        <Portrait preview />
      </div>
    </section>
  );
}
