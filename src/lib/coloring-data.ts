// Bengali number helper + data for coloring pages
export const toBn = (n: number | string) => {
  const map: Record<string, string> = { "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯" };
  return String(n).replace(/[0-9]/g, (d) => map[d] ?? d);
};

export type Category = "পশুপাখি" | "ফুল-প্রকৃতি" | "বাড়ি-গ্রাম" | "যানবাহন" | "খেলনা" | "উৎসব";

export const categories: { label: string; emoji: string; value: Category | "সব" }[] = [
  { label: "সব", emoji: "✨", value: "সব" },
  { label: "পশুপাখি", emoji: "🐾", value: "পশুপাখি" },
  { label: "ফুল-প্রকৃতি", emoji: "🌸", value: "ফুল-প্রকৃতি" },
  { label: "বাড়ি-গ্রাম", emoji: "🏡", value: "বাড়ি-গ্রাম" },
  { label: "যানবাহন", emoji: "🚗", value: "যানবাহন" },
  { label: "খেলনা", emoji: "🎮", value: "খেলনা" },
  { label: "উৎসব", emoji: "🎉", value: "উৎসব" },
];

export type ColoringPage = {
  id: string;
  title: string;
  category: Category;
  categoryColor: string;
  author: string;
  timeAgo: string;
  image: string;
};

export const coloringPages: ColoringPage[] = [
  { id: "1", title: "হাসি-খুশি হাতি", category: "পশুপাখি", categoryColor: "#F59E0B", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511147/1_nvvhga.png" },
  { id: "2", title: "প্রজাপতি রানী", category: "পশুপাখি", categoryColor: "#F59E0B", author: "মিম", timeAgo: "২ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511147/2_bibkx3.png" },
  { id: "3", title: "মিষ্টি বিড়াল", category: "পশুপাখি", categoryColor: "#F59E0B", author: "তানিয়া", timeAgo: "১ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511147/3_mmanlf.png" },
  { id: "4", title: "সুন্দর ময়ূর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "সাদিয়া", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/4_engvbx.png" },
  { id: "5", title: "ফুলের বাগান", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "তানিয়া", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/5_jstpwi.png" },
  { id: "6", title: "রঙিন গাড়ি", category: "যানবাহন", categoryColor: "#3B82F6", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/6_nqsiun.png" },
  { id: "7", title: "জাহাজ ভ্রমণ", category: "যানবাহন", categoryColor: "#3B82F6", author: "আরিফ", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/7_jee6ap.png" },
  { id: "8", title: "আমার বাড়ি", category: "বাড়ি-গ্রাম", categoryColor: "#8B5CF6", author: "মীম", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511150/8_ygmy8p.png" },
  { id: "9", title: "জলের মাছ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "আরিফ", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511149/9_ce1y62.png" },
  { id: "10", title: "মজার রকেট", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511147/10_fs1ffo.png" },
  { id: "11", title: "প্রিয় টেডি", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511147/11_tsg25d.png" },
  { id: "12", title: "রঙিন প্রজাপতি", category: "পশুপাখি", categoryColor: "#F59E0B", author: "নীল", timeAgo: "৬ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/12_e54qrb.png" },
  { id: "13", title: "ডাইনোসর বন্ধু", category: "পশুপাখি", categoryColor: "#F59E0B", author: "জিম", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511148/13_hfbtkb.png" },
  { id: "14", title: "গ্রামের নৌকা", category: "যানবাহন", categoryColor: "#3B82F6", author: "নীল", timeAgo: "৩ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511149/14_zn7lb0.png" },
  { id: "15", title: "সুন্দর পাখি", category: "পশুপাখি", categoryColor: "#F59E0B", author: "সাদিয়া", timeAgo: "২ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511149/15_aq0yu5.png" },
  { id: "16", title: "রংধনু মেঘ", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "নীল", timeAgo: "৬ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511149/16_fk3lfb.png" },
  { id: "17", title: "খুশির ঘোড়া", category: "পশুপাখি", categoryColor: "#F59E0B", author: "রাফি", timeAgo: "২ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511150/17_i7fggd.png" },
  { id: "18", title: "বনের সিংহ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "আরিফ", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511150/18_wehxa5.png" },
  { id: "19", title: "ঈদের তারা", category: "উৎসব", categoryColor: "#EF4444", author: "সাদিয়া", timeAgo: "২ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511150/19_elpy9h.png" },
  { id: "20", title: "জন্মদিনের কেক", category: "উৎসব", categoryColor: "#EF4444", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511150/20_gtqgqj.png" },
  { id: "21", title: "মিষ্টি কুকুর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "মিম", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511151/21_kcrsos.png" },
  { id: "22", title: "ছোট্ট হরিণ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "তানিয়া", timeAgo: "৭ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511151/22_pchvuh.png" },
  { id: "23", title: "সমুদ্রের কচ্ছপ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "নীল", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511151/23_smji4i.png" },
  { id: "24", title: "বাগানের ফুল", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "সাদিয়া", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511151/24_vqcezk.png" },
  { id: "25", title: "আকাশের তারা", category: "উৎসব", categoryColor: "#EF4444", author: "রিয়া", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781511151/25_uabyk3.png" },
];

export const palette: string[] = [
  "#FF6B1A", "#F39C12", "#FFD93D", "#2ECC71", "#27AE60",
  "#3498DB", "#1ABC9C", "#9B59B6", "#E74C3C", "#E91E63",
  "#FF8FA3", "#A0522D", "#8B4513", "#000000", "#7F8C8D",
  "#BDC3C7", "#34495E", "#16A085", "#D35400", "#C0392B",
];
