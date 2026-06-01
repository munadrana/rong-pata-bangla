// Bengali number helper + mock data for coloring pages
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
  author: string;
  timeAgo: string;
  svgKey: SvgKey;
};

export const coloringPages: ColoringPage[] = [
  { id: "1", title: "হাসি-খুশি হাতি", category: "পশুপাখি", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", svgKey: "elephant" },
  { id: "2", title: "ফুলের বাগান", category: "ফুল-প্রকৃতি", author: "তানিয়া", timeAgo: "৫ ঘণ্টা আগে", svgKey: "flowers" },
  { id: "3", title: "রঙিন গাড়ি", category: "যানবাহন", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", svgKey: "car" },
  { id: "4", title: "আমার বাড়ি", category: "বাড়ি-গ্রাম", author: "মীম", timeAgo: "১ দিন আগে", svgKey: "house" },
  { id: "5", title: "ঈদের তারা", category: "উৎসব", author: "সাদিয়া", timeAgo: "২ দিন আগে", svgKey: "eid" },
  { id: "6", title: "প্রজাপতি", category: "পশুপাখি", author: "নুসরাত", timeAgo: "৬ ঘণ্টা আগে", svgKey: "butterfly" },
  { id: "7", title: "জলের মাছ", category: "পশুপাখি", author: "আরিয়ান", timeAgo: "১ দিন আগে", svgKey: "fish" },
  { id: "8", title: "বেলুনের খেলা", category: "খেলনা", author: "মীম", timeAgo: "৪ ঘণ্টা আগে", svgKey: "balloons" },
];

export type SvgKey = "elephant" | "flowers" | "car" | "house" | "eid" | "butterfly" | "fish" | "balloons";

// Black-outline SVGs (white fills so flood-fill works). 600x600 viewBox.
const stroke = `fill="#ffffff" stroke="#111111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;

export const svgArt: Record<SvgKey, string> = {
  elephant: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <ellipse cx="300" cy="370" rx="180" ry="130" ${stroke}/>
    <circle cx="180" cy="280" r="90" ${stroke}/>
    <path d="M150 320 Q90 380 130 460 Q150 490 180 470 Q170 430 195 400" ${stroke}/>
    <circle cx="160" cy="265" r="10" fill="#111"/>
    <ellipse cx="120" cy="220" rx="40" ry="55" ${stroke}/>
    <rect x="220" y="470" width="40" height="60" rx="10" ${stroke}/>
    <rect x="340" y="470" width="40" height="60" rx="10" ${stroke}/>
    <path d="M460 330 Q500 320 490 360 Q480 380 460 370" ${stroke}/>
    <path d="M260 230 Q300 180 360 200 Q380 150 410 200 Q450 180 440 230" ${stroke}/>
    <circle cx="350" cy="210" r="14" ${stroke}/>
  </svg>`,
  flowers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <rect x="0" y="480" width="600" height="120" ${stroke}/>
    ${[150, 300, 450].map((cx, i) => {
      const cy = 250 + (i % 2) * 40;
      return `
      <line x1="${cx}" y1="${cy + 60}" x2="${cx}" y2="480" stroke="#111" stroke-width="4"/>
      <path d="M${cx} ${cy+30} Q${cx-30} ${cy+50} ${cx-10} ${cy+90}" ${stroke}/>
      <circle cx="${cx}" cy="${cy}" r="32" ${stroke}/>
      ${[0,60,120,180,240,300].map(a => {
        const rad = a*Math.PI/180; const x = cx + Math.cos(rad)*55; const y = cy + Math.sin(rad)*55;
        return `<ellipse cx="${x}" cy="${y}" rx="28" ry="18" transform="rotate(${a} ${x} ${y})" ${stroke}/>`;
      }).join("")}
      <circle cx="${cx}" cy="${cy}" r="32" ${stroke}/>
      `;
    }).join("")}
    <circle cx="500" cy="100" r="50" ${stroke}/>
    <path d="M0 480 Q150 440 300 480 T600 480" ${stroke}/>
  </svg>`,
  car: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <path d="M60 400 L120 280 Q140 250 180 250 L420 250 Q460 250 480 280 L540 400 Z" ${stroke}/>
    <path d="M180 270 L200 350 L300 350 L300 270 Z" ${stroke}/>
    <path d="M310 270 L310 350 L420 350 L400 270 Z" ${stroke}/>
    <rect x="40" y="400" width="520" height="80" rx="20" ${stroke}/>
    <circle cx="170" cy="490" r="55" ${stroke}/>
    <circle cx="170" cy="490" r="22" ${stroke}/>
    <circle cx="430" cy="490" r="55" ${stroke}/>
    <circle cx="430" cy="490" r="22" ${stroke}/>
    <circle cx="100" cy="420" r="14" ${stroke}/>
    <circle cx="500" cy="420" r="14" ${stroke}/>
  </svg>`,
  house: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <rect x="0" y="460" width="600" height="140" ${stroke}/>
    <path d="M120 280 L300 130 L480 280 Z" ${stroke}/>
    <rect x="150" y="280" width="300" height="200" ${stroke}/>
    <rect x="260" y="360" width="80" height="120" rx="8" ${stroke}/>
    <rect x="175" y="310" width="60" height="60" ${stroke}/>
    <rect x="365" y="310" width="60" height="60" ${stroke}/>
    <line x1="205" y1="310" x2="205" y2="370" stroke="#111" stroke-width="3"/>
    <line x1="175" y1="340" x2="235" y2="340" stroke="#111" stroke-width="3"/>
    <rect x="330" y="170" width="40" height="80" ${stroke}/>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${i*75}" y="500" width="40" height="60" ${stroke}/>`).join("")}
    <circle cx="500" cy="120" r="40" ${stroke}/>
  </svg>`,
  eid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <path d="M380 300 A140 140 0 1 1 380 60 A100 100 0 1 0 380 300 Z" ${stroke}/>
    ${[[120,120],[200,220],[100,320],[480,420],[150,460],[520,180],[420,500],[250,520]].map(([x,y])=>`
      <path d="M${x} ${y-20} L${x+6} ${y-6} L${x+22} ${y-2} L${x+10} ${y+8} L${x+14} ${y+24} L${x} ${y+14} L${x-14} ${y+24} L${x-10} ${y+8} L${x-22} ${y-2} L${x-6} ${y-6} Z" ${stroke}/>
    `).join("")}
    <path d="M50 560 Q300 510 550 560 L550 600 L50 600 Z" ${stroke}/>
  </svg>`,
  butterfly: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <ellipse cx="300" cy="300" rx="20" ry="90" ${stroke}/>
    <circle cx="300" cy="200" r="22" ${stroke}/>
    <path d="M295 185 Q280 140 260 130 M305 185 Q320 140 340 130" ${stroke}/>
    <path d="M280 240 Q150 160 130 280 Q140 360 280 320 Z" ${stroke}/>
    <path d="M320 240 Q450 160 470 280 Q460 360 320 320 Z" ${stroke}/>
    <path d="M280 330 Q170 360 180 460 Q260 470 290 380 Z" ${stroke}/>
    <path d="M320 330 Q430 360 420 460 Q340 470 310 380 Z" ${stroke}/>
    <circle cx="200" cy="270" r="14" ${stroke}/>
    <circle cx="400" cy="270" r="14" ${stroke}/>
    <circle cx="220" cy="410" r="10" ${stroke}/>
    <circle cx="380" cy="410" r="10" ${stroke}/>
  </svg>`,
  fish: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    <path d="M80 300 Q200 150 380 200 Q480 230 520 300 Q480 370 380 400 Q200 450 80 300 Z" ${stroke}/>
    <path d="M520 300 L590 220 L580 380 Z" ${stroke}/>
    <circle cx="160" cy="280" r="18" ${stroke}/>
    <circle cx="160" cy="280" r="6" fill="#111"/>
    <path d="M260 240 Q280 290 260 360" ${stroke}/>
    <path d="M340 220 Q360 290 340 380" ${stroke}/>
    <path d="M50 480 Q150 460 250 480 T550 480" ${stroke}/>
    <circle cx="100" cy="120" r="14" ${stroke}/>
    <circle cx="200" cy="80" r="10" ${stroke}/>
    <circle cx="450" cy="100" r="12" ${stroke}/>
  </svg>`,
  balloons: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#ffffff"/>
    ${[[170,180],[320,140],[460,200]].map(([cx,cy])=>`
      <ellipse cx="${cx}" cy="${cy}" rx="80" ry="100" ${stroke}/>
      <path d="M${cx-8} ${cy+100} L${cx} ${cy+115} L${cx+8} ${cy+100} Z" ${stroke}/>
      <path d="M${cx} ${cy+115} Q${cx+20} ${cy+220} ${cx-10} ${cy+330}" ${stroke} fill="none"/>
    `).join("")}
    <rect x="200" y="470" width="200" height="80" rx="12" ${stroke}/>
    <circle cx="240" cy="560" r="22" ${stroke}/>
    <circle cx="360" cy="560" r="22" ${stroke}/>
  </svg>`,
};

export const palette: string[] = [
  "#FF6B1A", "#2ECC71", "#3498DB", "#E74C3C", "#F1C40F",
  "#9B59B6", "#FF69B4", "#1ABC9C", "#A4DE02", "#F39C12",
  "#FF00FF", "#8E44AD", "#5D3FD3", "#16A085", "#8B4513",
  "#64748B", "#FFFFFF", "#34495E", "#DC143C", "#FFD700",
];
