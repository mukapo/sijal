"use client";
import { useRef, useState } from "react";
import { Action } from "./ui";
import { copy } from "../data/copy";
export default function Navigation() {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    return <header className="header"><div className="shell header-inner"><a className="brand" href="#top" aria-label={copy.homeLabel}>{copy.brand}<span aria-hidden="true">◆</span></a><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? copy.closeMenu : copy.openMenu}<span aria-hidden="true">{open ? "×" : "☰"}</span></button><nav id="navigation" aria-label={copy.navigationLabel} className={open ? "navigation open" : "navigation"} onKeyDown={e => { if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
    } }}>
 {copy.navigation.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Action href="#interest">{copy.primaryAction}</Action></nav></div></header>;
}
