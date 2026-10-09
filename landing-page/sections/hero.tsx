import { Action, Seal, Section } from "../components/ui";
import { copy } from "../data/copy";
export default function Hero() {
  return (
<section className="hero" id="top">
<div className="shell hero-layout">
<div className="hero-copy">
<span className="eyebrow">ديوانٌ بروح المنافسة</span>
<div className="hero-brand">{copy.brand}</div>
<h1>{copy.headline}</h1>
<p>{copy.description}</p>
<div className="actions">
<Action href="#interest">ادخل السِجال</Action>
<Action secondary href="#idea">اكتشف الفكرة</Action>
</div>
<div className="hero-foot">
<span>شعرٌ عربي</span>
<span>منافسةٌ ومكانة</span>
<span>رحلةٌ تبدأ ببيت</span>
</div>
</div>
<div className="hero-art" aria-hidden="true">
<Seal />
<div className="art-frame">
<span className="art-kicker">ميدان الشعر</span>
<span className="art-word">بيتٌ<br />
<em>ببيت</em>
</span>
<span className="art-bottom">والمكانةُ تُكتَسب</span>
</div>
<span className="art-index">الشعر · المنافسة · المكانة</span>
</div>
</div>
<a className="scroll-cue" href="#idea">اكتشف الفكرة <span aria-hidden="true">↓</span>
</a>
</section>
  );
}
