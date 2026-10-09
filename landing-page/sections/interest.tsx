import { Seal } from "../components/ui";
import { copy } from "../data/copy";

export default function InterestSection() {
  return (
    <section className="interest section" id="interest" aria-labelledby="invitation-title">
      <div className="shell">
        <div className="invitation reveal">
          <div className="invitation-seal" aria-hidden="true"><Seal /><span>{copy.brand}</span></div>
          <h2 id="invitation-title">{copy.finalTitle}</h2>
          <div className="invitation-launch">
            <p>{copy.development}</p>
            <span className="launch-soon">{copy.soon}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
