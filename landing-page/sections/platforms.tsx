import { Section } from "../components/ui";
import { copy } from "../data/copy";
export default function Platforms() {
 return <Section id="platforms" className="platforms"><div className="platform-layout reveal"><div><span className="eyebrow">{copy.soon}</span><h2>{copy.platformTitle}</h2></div><div className="platform-state">{copy.platforms.map(label=><span key={label}>{label}<small>{copy.soon}</small></span>)}</div></div></Section>;
}
