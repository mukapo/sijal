"use client";

import { useState } from "react";
import { Seal, Section } from "../components/ui";
import { copy } from "../data/copy";

export default function Battle() {
  const [round, setRound] = useState(0);

  return (
    <Section id="battle" className="battle">
      <div className="section-top reveal">
        <span className="eyebrow">المبادرة. الرد. السِجال.</span>
        <h2>{copy.battle}</h2>
      </div>
      <div className="duel reveal">
        <div className="duel-stage" key={round} aria-label="تصوّر لإيقاع المبارزة بين المبادر والمنافس">
          <article className="duel-side challenger">
            <div className="duel-side-heading"><span className="duel-player">المبادر</span><span className="duel-order">١</span></div>
            <p className="duel-verse">بيتٌ يُلقى</p>
            <div className="verse-lines" aria-hidden="true"><span /><span /></div>
            <span className="duel-edge" aria-hidden="true" />
          </article>
          <div className="duel-axis" aria-hidden="true"><span /><Seal /><span /></div>
          <article className="duel-side opponent">
            <div className="duel-side-heading"><span className="duel-player">المنافس</span><span className="duel-order">٢</span></div>
            <p className="duel-verse">وببيتٍ يُجاب</p>
            <div className="verse-lines" aria-hidden="true"><span /><span /></div>
            <span className="duel-edge" aria-hidden="true" />
          </article>
          <div className="duel-resolution"><span aria-hidden="true" />حتى يُحسم السِجال<span aria-hidden="true" /></div>
        </div>
        <button className="duel-replay" type="button" onClick={() => setRound(value => value + 1)}>
          <span aria-hidden="true">↻</span> أعد إيقاع المواجهة
        </button>
      </div>
      <p className="caption">تصوّر للمبارزة ضمن الرؤية المستقبلية؛ تبدأ النسخة الأولى بتحديات فردية.</p>
    </Section>
  );
}
