import type { ReactNode } from "react";
export function Action({ children, href, secondary = false }: {
    children: ReactNode;
    href: string;
    secondary?: boolean;
}) {
    return <a className={`action ${secondary ? "secondary" : ""}`} href={href}>{children}<span aria-hidden="true">↙</span></a>;
}
export function Section({ id, children, className = "" }: {
    id: string;
    children: ReactNode;
    className?: string;
}) {
    return <section id={id} className={`section ${className}`}><div className="shell">{children}</div></section>;
}
export function Seal({ className = "" }: {
    className?: string;
}) {
    return <svg className={`seal ${className}`} viewBox="0 0 600 600" fill="none" aria-hidden="true"><g stroke="currentColor"><circle cx="300" cy="300" r="260"/><circle cx="300" cy="300" r="230" strokeDasharray="2 14"/><path d="M300 20 580 300 300 580 20 300Z"/><path d="M100 100H500V500H100Z"/><path d="M300 85 515 300 300 515 85 300Z"/><circle cx="300" cy="300" r="160"/></g></svg>;
}
