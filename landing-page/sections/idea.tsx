import { Section } from "../components/ui";
import { copy } from "../data/copy";
export default function Idea() {
  return (
<Section id="idea" className="intro">
<div className="intro-line reveal">
<span className="eyebrow">{copy.ideaLabel}</span>
<p>{copy.ideaLines[0]}<br />
<em>{copy.ideaLines[1]}</em>
</p>

</div>
</Section>
  );
}
