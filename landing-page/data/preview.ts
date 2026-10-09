export const worlds = [
 { id: "jahili", name: "الجاهلي", number: "٠١", material: "الرمل · النسيج · الطريق", description: "مسالك الجزيرة، وأفقٌ مفتوح للرحلة.", tone: "#a58455" },
 { id: "early", name: "صدر الإسلام", number: "٠٢", material: "الطين · الحبر · العمران", description: "حبرٌ وعمران، وملامح أدبية تتغيّر.", tone: "#b5a384" },
 { id: "umayyad", name: "الأموي", number: "٠٣", material: "الحجر · الفناء · النسيج", description: "حجرٌ وساحات شامية، ومدينة تتّسع.", tone: "#94a7aa" },
 { id: "abbasid", name: "العباسي", number: "٠٤", material: "الورق · المدينة · المعرفة", description: "بغداد، وورقٌ ومخطوطات، وتبادلٌ للمعرفة.", tone: "#b59768" },
 { id: "andalusian", name: "الأندلسي", number: "٠٥", material: "الماء · الحديقة · القوس", description: "أفنيةٌ وحدائق، وماءٌ بين الأقواس.", tone: "#8ba99b" },
 { id: "modern", name: "الحديث", number: "٠٦", material: "الكتاب · المطبعة · المدينة", description: "مجالس أدبية، وصحافة وطباعة، ومدينة تتغيّر.", tone: "#c6a59a" },
] as const;
export const demoPoetry = {
 completion: {
  prompt: "قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ ومَنْزِلِ",
  answer: "بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ",
 },
 attribution: {
  hemistichs: ["السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ", "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"],
  poet: "أبو تمام",
 },
} as const;
export const poetOptions = ["المتنبي", "أبو تمام", "البحتري", "أبو نواس"];
export const correctPoet = demoPoetry.attribution.poet;
export const competitors = [
 { name: "سلمى", character: 1, place: "١", world: "الأندلسي" },
 { name: "راشد", character: 2, place: "٢", world: "العباسي" },
 { name: "ليان", character: 3, place: "٣", world: "العباسي" },
];
export const visitor = { name: "نديم", character: 0, place: "٦", world: "الجاهلي" };
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
