import { Action, Seal, Section } from "../components/ui";
import { copy } from "../data/copy";
export default function Hero() {
  return (
<section className="hero" id="top">
<div className="shell hero-layout">
<div className="hero-copy">
<span className="eyebrow">{copy.heroEyebrow}</span>
<div className="hero-brand">{copy.brand}</div>
<h1>{copy.headline}</h1>
<p>{copy.description}</p>
<div className="actions">
<Action href="#interest">{copy.primaryAction}</Action>
<Action secondary href="#idea">{copy.secondaryAction}</Action>
</div>
<div className="hero-foot">
<span>{copy.heroFoot[0]}</span>
<span>{copy.heroFoot[1]}</span>
<span>{copy.heroFoot[2]}</span>
</div>
</div>
<div className="hero-art" aria-hidden="true">
<Seal />
<div className="art-frame">
<span className="art-kicker">{copy.artKicker}</span>
<span className="art-word">{copy.artVerse[0]}<br />
<em>{copy.artVerse[1]}</em>
</span>
<span className="art-bottom">{copy.artBottom}</span>
</div>
<span className="art-index">{copy.artIndex}</span>
</div>
</div>
<a className="scroll-cue" href="#idea">{copy.secondaryAction} <span aria-hidden="true">↓</span>
</a>
</section>
  );
}
