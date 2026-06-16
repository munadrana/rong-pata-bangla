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
  bgColor: string;
  author: string;
  timeAgo: string;
  image: string;
};

export const coloringPages: ColoringPage[] = [
  { id: "1", title: "হাসি-খুশি হাতি", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFF8F0", author: "রিমা", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523006/hati_awmrpn.png" },
  { id: "2", title: "প্রজাপতি রানী", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFF0F8", author: "মিম", timeAgo: "২ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523005/projapoti_p1exgw.png" },
  { id: "3", title: "মিষ্টি বিড়াল", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FFF8", author: "তানিয়া", timeAgo: "১ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523005/biral_cjetrh.png" },
  { id: "4", title: "সিংহ রাজা", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFFBF0", author: "তুষার", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523004/singho_l1jjtl.png" },
  { id: "5", title: "ফুলের বাগান", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", bgColor: "#F0FFF4", author: "তানিয়া", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523003/ful_edymqj.png" },
  { id: "6", title: "রঙিন গাড়ি", category: "যানবাহন", categoryColor: "#3B82F6", bgColor: "#F0F8FF", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523003/gari_thhiy1.png" },
  { id: "7", title: "আমার বাড়ি", category: "বাড়ি-গ্রাম", categoryColor: "#8B5CF6", bgColor: "#F5F0FF", author: "মীম", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523002/bari_f6rcuo.png" },
  { id: "8", title: "জাহাজ ভ্রমণ", category: "যানবাহন", categoryColor: "#3B82F6", bgColor: "#F0F8FF", author: "আরিফ", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523002/jahaj_cbyhy1.png" },
  { id: "9", title: "জলের মাছ", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FBFF", author: "আরিফ", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523001/mach_a0te2f.png" },
  { id: "10", title: "মজার রকেট", category: "খেলনা", categoryColor: "#F97316", bgColor: "#FFF5F0", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523001/rocket_heqdgu.png" },
  { id: "11", title: "প্রিয় টেডি", category: "খেলনা", categoryColor: "#F97316", bgColor: "#FFF8F0", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781523000/tedy_kdruf1.png" },
  { id: "12", title: "সুন্দর ময়ূর", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FFF8", author: "সাদিয়া", timeAgo: "৬ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522999/moyur_j91hh1.png" },
  { id: "13", title: "ডাইনো বন্ধু", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FFF0", author: "জিম", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522999/dino_wkqz8n.png" },
  { id: "14", title: "জন্মদিনের কেক", category: "উৎসব", categoryColor: "#EF4444", bgColor: "#FFF0F0", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522998/cake_gqtwjt.png" },
  { id: "15", title: "রংধনু আকাশ", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", bgColor: "#F0F8FF", author: "নীল", timeAgo: "৬ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522997/rainbow_rtjmgp.png" },
  { id: "16", title: "ঈদের চাঁদ", category: "উৎসব", categoryColor: "#EF4444", bgColor: "#FFFBF0", author: "সাদিয়া", timeAgo: "২ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522997/eid_jwb47a.png" },
  { id: "17", title: "গ্রামের নৌকা", category: "যানবাহন", categoryColor: "#3B82F6", bgColor: "#F0F8FF", author: "নীল", timeAgo: "৩ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522997/nouka_zzbk2t.png" },
  { id: "18", title: "হলুদ হাঁসছানা", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFFFF0", author: "মিম", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522997/duck_kgxabf.png" },
  { id: "19", title: "সমুদ্রের কচ্ছপ", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FFFF", author: "নীল", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522996/turtle_jkfw4d.png" },
  { id: "20", title: "খুশির ঘোড়া", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFF8F0", author: "রাফি", timeAgo: "২ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522997/ghora_vh0loe.png" },
  { id: "21", title: "বাগানের গোলাপ", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", bgColor: "#FFF0F5", author: "সাদিয়া", timeAgo: "৩ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522996/rose_afajtu.png" },
  { id: "22", title: "ছোট্ট হরিণ", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F5FFF0", author: "তানিয়া", timeAgo: "৭ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522996/horin_brf29p.png" },
  { id: "23", title: "মিষ্টি কুকুর", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#FFF5F0", author: "মিম", timeAgo: "৫ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522996/kukur_xidvhg.png" },
  { id: "24", title: "আকাশের তারা", category: "উৎসব", categoryColor: "#EF4444", bgColor: "#F5F0FF", author: "রিয়া", timeAgo: "৪ ঘণ্টা আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522995/tara_tfueiv.png" },
  { id: "25", title: "মজার ব্যাঙ", category: "পশুপাখি", categoryColor: "#F59E0B", bgColor: "#F0FFF5", author: "নাফিসা", timeAgo: "১ দিন আগে", image: "https://res.cloudinary.com/dmgxpyjul/image/upload/v1781522995/frog_by5hol.png" },
];

export const palette: string[] = [
  "#FF6B1A", "#F39C12", "#FFD93D", "#2ECC71", "#27AE60",
  "#3498DB", "#1ABC9C", "#9B59B6", "#E74C3C", "#E91E63",
  "#FF8FA3", "#A0522D", "#8B4513", "#000000", "#7F8C8D",
  "#BDC3C7", "#34495E", "#16A085", "#D35400", "#C0392B",
];
