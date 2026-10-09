"use client";
import { useRef, useState } from "react";
import { Section, Seal } from "../components/ui";
import { copy } from "../data/copy";
import { demoPoetry, poetOptions, correctPoet } from "../data/preview";
import { matchesDemoAnswer } from "../lib/demo";
export default function Battle() {
 const [mode, setMode] = useState(0);
 const [answer, setAnswer] = useState("");
 const [feedback, setFeedback] = useState("");
 const [selected, setSelected] = useState<string | null>(null);
 const [revealed, setRevealed] = useState(false);
 const input = useRef<HTMLInputElement>(null);
 function reset() { setAnswer(""); setFeedback(""); setSelected(null); setRevealed(false); }
 return <Section id="battle" className="battle interactive-battle">
  <div className="section-top reveal"><span className="eyebrow">{copy.chooseMode}</span><h2>{copy.demoTitle}</h2><p>{copy.demoIntro}</p></div>
  <div className="demo-layout reveal">
   <div className="mode-choice" role="group" aria-label={copy.chooseMode}>
    {[copy.completion,copy.attribution].map((label,index) => <button key={label} aria-pressed={mode === index} onClick={() => { reset();setMode(index); }}><span className="mode-index" aria-hidden="true">{index === 0 ? "٠١" : "٠٢"}</span><span>{label}</span><span className="mode-arrow" aria-hidden="true">←</span></button>)}
    <Seal />
   </div>
   <div className="demo-surface">
    <h3>{mode === 0 ? copy.completion : copy.attribution}</h3>
    {mode === 0 ? <form onSubmit={e => { e.preventDefault();setRevealed(false);setFeedback(!answer.trim() ? copy.empty : matchesDemoAnswer(answer,demoPoetry.completion.answer) ? copy.correct : copy.incorrect); }}>
      <p className="demo-text">{demoPoetry.completion.prompt}</p>
      <label htmlFor="demo-answer">{copy.answerLabel}</label>
      <div className="answer-row"><input ref={input} id="demo-answer" autoComplete="off" maxLength={160} value={answer} onChange={e => setAnswer(e.target.value)} placeholder={copy.answerPlaceholder} /><button className="solid-button" type="submit">{copy.check}</button></div>
    </form> : <div><p className="demo-text attribution-text">{demoPoetry.attribution.hemistichs.map(line => <span key={line}>{line}</span>)}</p><div className="poet-options" role="group" aria-label={copy.selectPrompt}>{poetOptions.map(poet => <button key={poet} aria-pressed={selected === poet} onClick={() => { setSelected(poet);setFeedback(poet === correctPoet ? copy.correct : copy.incorrect); }}>{poet}</button>)}</div></div>}
    <div className="feedback" role="status" aria-live="polite">{revealed ? `${copy.answerIs} ${mode === 0 ? demoPoetry.completion.answer : correctPoet}` : feedback}</div>
    <div className="demo-tools"><button onClick={() => { reset(); if(mode === 0) input.current?.focus(); }}>{copy.reset}</button>{feedback === copy.incorrect && <button onClick={() => setRevealed(true)}>{copy.reveal}</button>}</div>
   </div>
  </div>
 </Section>;
}
