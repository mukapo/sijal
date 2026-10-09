import { Action, Seal, Section } from "../components/ui";
import { copy } from "../data/copy";
export default function Journey() {
  return (
<Section id="journey" className="journey">
<div className="journey-layout">
<div className="reveal">
<span className="eyebrow">ما بعد المواجهة</span>
<h2>{copy.journeyTitle}</h2>
<p>{copy.journey}</p>
<a className="text-link" href="#world">اكتشف عالم سِجال <span aria-hidden="true">←</span>
</a>
</div>
<div className="journey-map reveal" aria-label="مسار رمزي للتقدم، وليس شاشة من اللعبة">
<svg viewBox="0 0 500 500" fill="none" aria-hidden="true">
<path d="M400 430C100 430 420 280 230 260S110 150 100 70" stroke="currentColor" strokeWidth="1"/>
<path d="M400 430C100 430 420 280 230 260S110 150 100 70" stroke="currentColor" strokeWidth="10" opacity=".05"/>
</svg>
<div className="map-node node-one">
<b>١</b>
<span>البداية</span>
</div>
<div className="map-node node-two">
<b>٢</b>
<span>التقدّم</span>
</div>
<div className="map-node node-three">
<b>٣</b>
<span>المكانة</span>
</div>
<span className="map-label">مسارٌ رمزي للتقدّم</span>
</div>
</div>
</Section>
  );
}
