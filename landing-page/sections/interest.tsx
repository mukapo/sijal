import { Seal } from "../components/ui";
import { copy } from "../data/copy";

export default function InterestSection() {
  return (
    <section className="interest section" id="interest" aria-labelledby="invitation-title">
      <div className="shell">
        <div className="invitation reveal">
          <div className="invitation-seal" aria-hidden="true"><Seal /><span>سِجَال</span></div>
          <h2 id="invitation-title">{copy.finalTitle}</h2>
          <p className="invitation-description">{copy.finalDescription}</p>
          <div className="invitation-launch">
            <p>سِجال قيد التطوير</p>
            <span className="launch-soon">قريبًا</span>
          </div>
        </div>
      </div>
    </section>
  );
}
