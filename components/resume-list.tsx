import type { ResumeEntry } from 'config/portfolio';

export default function ResumeList({ entries }: { entries: ResumeEntry[] }) {
  return (
    <ol className="resume-list">
      {entries.map((entry) => (
        <li className="resume-entry" key={entry.organization}>
          <div className="resume-detail">
            <h3>
              {entry.organization}
              {entry.title && ` · ${entry.title}`}
            </h3>
            {entry.location && (
              <span className="resume-location">{entry.location}</span>
            )}
            {entry.description && (
              <p className="resume-description">{entry.description}</p>
            )}
          </div>
          <span className="resume-dates">
            {entry.start} — {entry.end}
          </span>
        </li>
      ))}
    </ol>
  );
}
