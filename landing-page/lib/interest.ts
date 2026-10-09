export type Interest = {
    name: string;
    email: string;
};
export type InterestResult = {
    kind: "unavailable";
    message: string;
} | {
    kind: "success";
    message: string;
};
// Replace this adapter only after provider, privacy copy, and data ownership approval.
// No network request, storage, or simulated registration occurs in the local edition.
export async function submitInterest(_interest: Interest): Promise<InterestResult> {
    return { kind: "unavailable", message: "لم يُرسَل طلبك أو يُحفَظ. التسجيل غير متاح بعد؛ نجهّز باب الدخول إلى سِجال." };
}
