"use client";
import { useRef, useState } from "react";
import { Section, Seal } from "../components/ui";
import { Portrait, Ranking, Environment } from "../components/concept";
import { copy } from "../data/copy";
import { demoPoetry, worlds } from "../data/preview";
export default function Showcase() {
 const [screen,setScreen] = useState(0);
 const title = useRef<HTMLSpanElement>(null);
 function navigateScreen(next: number) { setScreen(next); title.current?.focus(); }
 return <Section id="showcase" className="showcase"><div className="showcase-layout">
 <div className="showcase-copy reveal"><h2>{copy.showcaseTitle}</h2><div className="screen-select" role="group" aria-label={copy.screenSelection}>{copy.screenLabels.map((label,i)=><button key={label} aria-pressed={screen === i} onClick={()=>setScreen(i)}><span aria-hidden="true">{["٠١","٠٢","٠٣","٠٤"][i]}</span>{label}<span aria-hidden="true">←</span></button>)}</div><p className="screen-description" aria-live="polite">{copy.screenDescriptions[screen]}</p></div>
 <div className="device-stage reveal"><Seal/><div className="device"><div className="device-camera" aria-hidden="true"/><div className="device-screen">
 <div className="device-header"><span>{copy.brand}</span><span ref={title} tabIndex={-1} className="device-header-title">{copy.screenLabels[screen]}</span></div>
 {screen === 0 && <div className="dashboard"><div className="dashboard-character"><Portrait large/><div className="dashboard-name"><h3>{copy.hello}</h3><p>{copy.journeyCue}</p></div></div><div className="dashboard-world"><span>{copy.currentWorld}</span><strong>{worlds[0].name}</strong><div className="progress-track" aria-hidden="true"><i/></div></div><p className="device-subheading">{copy.chooseMode}</p><div className="dashboard-modes"><button onClick={()=>navigateScreen(1)}>{copy.completion}<span aria-hidden="true">←</span></button><a href="#battle">{copy.attribution}<span aria-hidden="true">←</span></a></div><div className="dashboard-links"><button onClick={()=>navigateScreen(2)}>{copy.mapAccess}</button><button onClick={()=>navigateScreen(3)}>{copy.rankingAccess}</button></div></div>}
 {screen === 1 && <div className="gameplay-screen"><span className="eyebrow">{copy.completion}</span><Seal/><h3>{copy.gameplayConcept}</h3><p className="concept-verse">{demoPoetry.completion.prompt}<br/><span>···</span></p><a className="solid-button" href="#battle">{copy.demoTitle}</a></div>}
 {screen === 2 && <div className="compact-map"><Environment index={0}/><ol>{worlds.map((world,i)=><li key={world.id}><span className={i === 0 ? "current" : ""}>{world.number}</span><strong>{world.name}</strong></li>)}</ol><a href="#journey" className="text-link">{copy.mapAccess}<span aria-hidden="true">←</span></a></div>}
 {screen === 3 && <div className="device-ranking"><Ranking compact/></div>}
 </div></div></div>
 </div></Section>;
}
