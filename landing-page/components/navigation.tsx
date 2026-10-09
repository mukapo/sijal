"use client";
import { useRef, useState } from "react";
import { Action } from "./ui";
const links = [["#top", "الرئيسية"], ["#idea", "عن سِجال"], ["#battle", "كيف تبدأ المواجهة"], ["#journey", "الرحلة"]];
export default function Navigation() {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    return <header className="header"><div className="shell header-inner"><a className="brand" href="#top" aria-label="سِجَال، الرئيسية">سِجَال<span aria-hidden="true">◆</span></a><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? "إغلاق القائمة" : "فتح القائمة"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button><nav id="navigation" aria-label="التنقل الرئيسي" className={open ? "navigation open" : "navigation"} onKeyDown={e => { if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
    } }}>
 {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Action href="#interest">ادخل السِجال</Action></nav></div></header>;
}
