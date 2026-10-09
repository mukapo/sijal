"use client";
import { useState, type CSSProperties } from "react";
import { Section } from "../components/ui";
import { Environment } from "../components/concept";
import { worlds } from "../data/preview";
import { copy } from "../data/copy";
export default function Journey() {
 const [selected,setSelected] = useState(0);
 const world = worlds[selected];
 return <Section id="journey" className="era-journey"><div className="map-heading reveal"><span className="eyebrow">{copy.mapAccess}</span><h2>{copy.journeyHeading}</h2><p>{copy.journeyIntro}</p></div>
 <div className="era-atlas reveal" style={{"--era-tone":world.tone} as CSSProperties}>
 <div className="atlas-landscape" key={world.id}><Environment index={selected}/><div className="atlas-title"><span>{world.number} / ٠٦</span><h3>{world.name}</h3><p>{world.material}</p></div></div>
 <div className="world-route"><svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M40 50C200 10 270 90 380 50S570 15 690 50S840 85 960 50"/></svg><ol aria-label={copy.mapInstruction}>{worlds.map((item,i)=><li key={item.id}><button aria-pressed={selected === i} onClick={()=>setSelected(i)}><span className="route-node">{item.number}</span><strong>{item.name}</strong></button></li>)}</ol></div>
 <div className="atlas-detail" aria-live="polite"><span className="eyebrow">{copy.eraLabel}</span><p>{world.description}</p></div>
 </div></Section>;
}
