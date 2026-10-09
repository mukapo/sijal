export function normalizeDemoAnswer(value: string): string {
 return value.normalize("NFC").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[.,!?،؛؟:؛"'«»()[\]{}—–-]/g, " ").replace(/\s+/g, " ").trim();
}
export function matchesDemoAnswer(value: string, expected: string): boolean {
 const normalized = normalizeDemoAnswer(value);
 return normalized.length > 0 && normalized === normalizeDemoAnswer(expected);
}
