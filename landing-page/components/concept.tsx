import { copy } from "../data/copy";
import { assetPath, competitors, visitor, worlds } from "../data/preview";
export function Portrait({ character = 0, large = false }: { character?: number; large?: boolean }) {
 return <span className={`portrait portrait-${character} ${large ? "portrait-large" : ""}`}><img src={assetPath(`/images/sijal-concept-character-${character}.webp`)} alt="" width="480" height="720" loading="lazy" decoding="async" /></span>;
}
export function Ranking({ compact = false }: { compact?: boolean }) {
 return <div className={`ranking ${compact ? "ranking-compact" : ""}`}><ol>{competitors.map(person => <li key={person.name}><span className="rank-number">{person.place}</span><Portrait character={person.character}/><span className="rank-identity"><strong>{person.name}</strong><small>{person.world}</small></span></li>)}</ol><div className="ranking-continuation" aria-hidden="true"><span/><span/></div><div className="visitor-rank"><span className="rank-number">{visitor.place}</span><Portrait character={visitor.character}/><span className="rank-identity"><strong>{visitor.name}</strong><small>{copy.yourPlace}</small></span></div></div>;
}
export function Environment({ index }: { index: number }) {
 const arches = [180,300,420,540,660,780];
 return <span className="environment-scene"><img className="environment-painting" src={assetPath(`/images/sijal-world-${worlds[index].id}.webp`)} width="768" height="341" alt="" loading="lazy" decoding="async"/><svg className={`environment environment-${worlds[index].id}`} viewBox="0 0 1000 480" fill="none" aria-hidden="true">
 <circle cx="760" cy="135" r="85" className="environment-sun"/>
 <path d="M0 365Q180 295 360 355T720 340T1000 330V480H0Z" className="terrain-back"/>
 {index === 0 && <g><path d="M0 402Q230 230 510 384T1000 355V480H0Z" className="terrain-front"/><path d="M200 346 315 240 430 346ZM252 346V302M385 346V302" className="architecture"/><path d="M370 455Q500 373 710 389T900 360" className="era-route"/></g>}
 {index === 1 && <g className="architecture"><path d="M190 358V225H345V358M375 358V183H595V358M620 358V248H802V358"/><path d="M230 358V290Q270 250 310 290V358M440 358V263H530V358M655 275H760M655 295H735M655 315H748"/><path d="M375 210H595M375 233H595"/></g>}
 {index === 2 && <g className="architecture"><path d="M150 362V195H850V362M150 225H850M150 245H850"/>{arches.map(x=><path key={x} d={`M${x} 362V294Q${x+36} 233 ${x+72} 294V362`}/>)}<path d="M120 377H880M170 207H820"/></g>}
 {index === 3 && <g className="architecture"><path d="M130 370V260H310V370M330 370V155H620V370M650 370V217H850V370M330 175H620M355 195H595"/>{[365,450,535].map(x=><path key={x} d={`M${x} 370V255Q${x+26} 211 ${x+52} 255V370`}/>)}<path d="M690 250H810M690 278H790M690 306H815M170 283V346M215 283V346M260 283V346"/></g>}
 {index === 4 && <g><g className="architecture"><path d="M130 362V160H870V362M130 187H870"/>{arches.map(x=><path key={x} d={`M${x} 362V275C${x-10} 249 ${x+7} 211 ${x+35} 201C${x+64} 212 ${x+80} 250 ${x+72} 275V362`}/>)}<path d="M160 377H840M195 397H805"/></g><path d="M400 403H600L645 465H355ZM100 385V295M100 330Q40 283 95 251Q153 287 100 330M900 385V295M900 330Q840 283 895 251Q953 287 900 330" className="garden"/></g>}
 {index === 5 && <g className="architecture"><path d="M130 370V225H300V370M315 370V128H550V370M575 370V183H805V370M830 370V259H930V370M315 150H550M575 204H805"/>{[350,415,480].map(x=><path key={x} d={`M${x} 187H${x+35}V229H${x}ZM${x} 262H${x+35}V304H${x}Z`}/>)}<path d="M615 238H766M615 257H740M615 276H760M615 295H730M175 266H250V345H175Z"/></g>}
 <path d="M0 430Q270 390 480 424T1000 421" className="foreground-line"/>
 </svg></span>;
}
