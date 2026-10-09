"use client";
import { useEffect } from "react";
import { copy } from "../data/copy";
import Navigation from "./navigation";
import Hero from "../sections/hero";
import Idea from "../sections/idea";
import Battle from "../sections/battle";
import Journey from "../sections/journey";
import Showcase from "../sections/showcase";
import Platforms from "../sections/platforms";
import World from "../sections/world";
import InterestSection from "../sections/interest";

export default function LandingPage() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(".reveal");
        if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window))
            return;
        const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        } }), { threshold: 0.18 });
        elements.forEach(el => { el.classList.add("will-reveal"); observer.observe(el); });
        return () => observer.disconnect();
    }, []);
    return <>
<a className="skip" href="#main">{copy.skip}</a>
<Navigation />
<main id="main">
<Hero />
 <Idea />
 <Battle />
 <Showcase />
 <Journey />
 <World />
<Platforms />
<InterestSection />
</main>
<footer className="footer">
<div className="shell">
<a className="brand" href="#top">{copy.brand}</a>
<p>{copy.footerTagline}</p>
<a href="#idea">{copy.about}</a>
<small>{copy.copyright}</small>
</div>
</footer>
</>;
}
