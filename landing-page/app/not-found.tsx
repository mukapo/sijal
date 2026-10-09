export default function NotFound() {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return <main className="section shell"><span className="eyebrow">سِجَال</span><h1>لم نجد هذه الصفحة</h1><p>يمكنك العودة إلى بداية الحكاية.</p><a className="action" href={`${base}/`}>العودة إلى الرئيسية</a></main>;
}
