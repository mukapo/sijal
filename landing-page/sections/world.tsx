import { Action, Seal, Section } from "../components/ui";
import { copy } from "../data/copy";
export default function World() {
  return (
<Section id="world" className="world">
<div className="world-heading reveal">
<span className="eyebrow">أفق سِجال</span>
<h2>{copy.vision}</h2>
<p>من أول تحدٍّ إلى رحلة تصنع فيها مكانتك.</p>
</div>
<div className="world-composition reveal" aria-hidden="true">
<Seal />
<div className="world-ring"/>
<span className="world-label label-one">الشعر</span>
<span className="world-label label-two">المنافسة</span>
<span className="world-label label-three">المكانة</span>
<span className="world-center">سِجَال</span>
</div>
<p className="caption">رؤية للعالم الذي نبنيه، وليست صورة من لعبة مكتملة.</p>
</Section>
  );
}
