import { Section } from "../components/ui";
import { Portrait, Ranking } from "../components/concept";
import { copy } from "../data/copy";
export default function World() {
 return <Section id="competition" className="competition"><div className="competition-layout"><div className="competition-copy reveal"><span className="eyebrow">{copy.identity}</span><h2>{copy.competitionTitle}</h2><div className="identity-art"><Portrait large/><span className="identity-rule" aria-hidden="true"/></div></div><div className="competition-ranking reveal"><div className="ranking-heading"><h3>{copy.rankingTitle}</h3></div><Ranking/></div></div></Section>;
}
