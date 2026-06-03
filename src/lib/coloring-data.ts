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
  svgContent: string;
};

export const coloringPages: ColoringPage[] = [
  { id: "1", title: "হাসি-খুশি হাতি", category: "পশুপাখি", categoryColor: "#F59E0B", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="150" cy="190" rx="80" ry="70"/>
      <circle cx="150" cy="105" r="55"/>
      <ellipse cx="82" cy="100" rx="32" ry="42"/>
      <ellipse cx="218" cy="100" rx="32" ry="42"/>
      <ellipse cx="82" cy="100" rx="20" ry="28"/>
      <ellipse cx="218" cy="100" rx="20" ry="28"/>
      <path d="M135 140 Q120 165 115 185 Q110 200 125 205 Q140 210 145 195 Q148 185 145 170"/>
      <path d="M125 205 Q108 215 112 228 Q118 238 130 232"/>
      <circle cx="130" cy="95" r="8"/>
      <circle cx="170" cy="95" r="8"/>
      <circle cx="132" cy="93" r="3" fill="black"/>
      <circle cx="172" cy="93" r="3" fill="black"/>
      <path d="M130 120 Q150 135 170 120"/>
      <rect x="95" y="240" width="35" height="45" rx="12"/>
      <rect x="145" y="240" width="35" height="45" rx="12"/>
      <rect x="78" y="220" width="32" height="42" rx="12"/>
      <rect x="162" y="220" width="32" height="42" rx="12"/>
      <path d="M228 195 Q248 185 245 170 Q242 158 252 150"/>
      <circle cx="130" cy="235" r="8"/>
      <circle cx="120" cy="225" r="6"/>
      <circle cx="130" cy="220" r="6"/>
      <circle cx="140" cy="225" r="6"/>
      <circle cx="140" cy="235" r="6"/>
      <circle cx="130" cy="228" r="4" fill="black"/>
      <path d="M100 283 Q107 287 115 283"/>
      <path d="M152 283 Q159 287 167 283"/>
    </svg>` },
  { id: "2", title: "প্রজাপতি রানী", category: "পশুপাখি", categoryColor: "#F59E0B", author: "মিম", timeAgo: "২ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="150" cy="155" rx="10" ry="50"/>
      <path d="M150 130 Q90 70 60 100 Q40 130 80 160 Q110 175 150 155"/>
      <path d="M150 130 Q210 70 240 100 Q260 130 220 160 Q190 175 150 155"/>
      <path d="M150 170 Q85 175 70 210 Q65 235 100 240 Q135 242 150 210"/>
      <path d="M150 170 Q215 175 230 210 Q235 235 200 240 Q165 242 150 210"/>
      <circle cx="95" cy="118" r="18"/>
      <circle cx="75" cy="138" r="10"/>
      <path d="M108 105 Q120 95 130 100"/>
      <circle cx="205" cy="118" r="18"/>
      <circle cx="225" cy="138" r="10"/>
      <path d="M192 105 Q180 95 170 100"/>
      <circle cx="98" cy="210" r="12"/>
      <circle cx="202" cy="210" r="12"/>
      <circle cx="150" cy="100" r="18"/>
      <circle cx="143" cy="97" r="5"/>
      <circle cx="157" cy="97" r="5"/>
      <circle cx="144" cy="96" r="2" fill="black"/>
      <circle cx="158" cy="96" r="2" fill="black"/>
      <path d="M143 106 Q150 112 157 106"/>
      <path d="M145 83 Q135 65 125 55"/>
      <path d="M155 83 Q165 65 175 55"/>
      <circle cx="125" cy="53" r="5"/>
      <circle cx="175" cy="53" r="5"/>
    </svg>` },
  { id: "3", title: "মিষ্টি বিড়াল", category: "পশুপাখি", categoryColor: "#F59E0B", author: "তানিয়া", timeAgo: "১ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="150" cy="210" rx="70" ry="75"/>
      <circle cx="150" cy="115" r="60"/>
      <path d="M100 75 L85 40 L125 68"/>
      <path d="M200 75 L215 40 L175 68"/>
      <path d="M103 72 L92 50 L120 70"/>
      <path d="M197 72 L208 50 L180 70"/>
      <ellipse cx="128" cy="108" rx="14" ry="16"/>
      <ellipse cx="172" cy="108" rx="14" ry="16"/>
      <ellipse cx="128" cy="108" rx="6" ry="12" fill="black"/>
      <ellipse cx="172" cy="108" rx="6" ry="12" fill="black"/>
      <circle cx="131" cy="103" r="3" fill="white"/>
      <circle cx="175" cy="103" r="3" fill="white"/>
      <path d="M145 128 L150 133 L155 128 Q150 123 145 128Z"/>
      <path d="M150 133 Q140 142 132 138"/>
      <path d="M150 133 Q160 142 168 138"/>
      <line x1="80" y1="128" x2="130" y2="132"/>
      <line x1="80" y1="138" x2="130" y2="136"/>
      <line x1="170" y1="132" x2="220" y2="128"/>
      <line x1="170" y1="136" x2="220" y2="138"/>
      <ellipse cx="108" cy="268" rx="28" ry="18"/>
      <ellipse cx="192" cy="268" rx="28" ry="18"/>
      <path d="M95 262 Q103 257 111 262"/>
      <path d="M180 262 Q188 257 196 262"/>
      <path d="M218 230 Q260 220 265 255 Q270 275 245 278"/>
      <path d="M118 175 Q150 170 182 175"/>
      <path d="M122 192 Q150 187 178 192"/>
      <path d="M100 158 Q150 170 200 158"/>
      <circle cx="150" cy="166" r="6"/>
    </svg>` },
  { id: "4", title: "সুন্দর ময়ূর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "সাদিয়া", timeAgo: "৪ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="150" cy="175" rx="115" ry="110"/>
      <circle cx="150" cy="80" r="14"/><circle cx="150" cy="80" r="7"/>
      <circle cx="190" cy="90" r="12"/><circle cx="190" cy="90" r="6"/>
      <circle cx="220" cy="115" r="12"/><circle cx="220" cy="115" r="6"/>
      <circle cx="235" cy="150" r="11"/><circle cx="235" cy="150" r="5"/>
      <circle cx="225" cy="190" r="11"/><circle cx="225" cy="190" r="5"/>
      <circle cx="110" cy="90" r="12"/><circle cx="110" cy="90" r="6"/>
      <circle cx="80" cy="115" r="12"/><circle cx="80" cy="115" r="6"/>
      <circle cx="65" cy="150" r="11"/><circle cx="65" cy="150" r="5"/>
      <circle cx="75" cy="190" r="11"/><circle cx="75" cy="190" r="5"/>
      <line x1="150" y1="200" x2="150" y2="80"/>
      <line x1="150" y1="200" x2="190" y2="90"/>
      <line x1="150" y1="200" x2="220" y2="115"/>
      <line x1="150" y1="200" x2="235" y2="150"/>
      <line x1="150" y1="200" x2="225" y2="190"/>
      <line x1="150" y1="200" x2="110" y2="90"/>
      <line x1="150" y1="200" x2="80" y2="115"/>
      <line x1="150" y1="200" x2="65" y2="150"/>
      <line x1="150" y1="200" x2="75" y2="190"/>
      <ellipse cx="150" cy="218" rx="28" ry="45"/>
      <path d="M138 180 Q132 160 135 145 Q138 130 150 125"/>
      <path d="M162 180 Q168 160 165 145 Q162 130 150 125"/>
      <circle cx="150" cy="115" r="22"/>
      <path d="M141 95 Q138 78 142 70"/><circle cx="142" cy="68" r="4"/>
      <path d="M150 93 Q150 75 150 65"/><circle cx="150" cy="63" r="4"/>
      <path d="M159 95 Q162 78 158 70"/><circle cx="158" cy="68" r="4"/>
      <circle cx="145" cy="113" r="6"/>
      <circle cx="146" cy="112" r="2" fill="black"/>
      <path d="M128 118 L118 122 L128 126 Z"/>
      <line x1="138" y1="260" x2="132" y2="285"/>
      <line x1="162" y1="260" x2="168" y2="285"/>
      <path d="M125 285 L132 285 L136 278"/>
      <path d="M161 285 L168 285 L172 278"/>
    </svg>` },
  { id: "5", title: "ফুলের বাগান", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "তানিয়া", timeAgo: "৫ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 265 Q150 255 280 265"/>
      <path d="M20 275 Q150 265 280 275"/>
      <path d="M30 265 Q33 250 36 265"/><path d="M50 263 Q53 248 56 263"/>
      <path d="M245 265 Q248 250 251 265"/><path d="M265 263 Q268 248 271 263"/>
      <line x1="75" y1="265" x2="75" y2="145"/>
      <path d="M60 200 Q75 195 90 200"/>
      <circle cx="75" cy="130" r="22"/>
      <circle cx="75" cy="130" r="12"/>
      <ellipse cx="75" cy="105" rx="8" ry="14"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(40 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(80 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(120 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(160 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(200 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(240 75 130)"/>
      <ellipse cx="75" cy="105" rx="8" ry="14" transform="rotate(280 75 130)"/>
      <circle cx="70" cy="127" r="3"/><circle cx="80" cy="127" r="3"/>
      <path d="M68 133 Q75 138 82 133"/>
      <line x1="150" y1="265" x2="150" y2="120"/>
      <path d="M130 195 Q150 188 170 195"/>
      <circle cx="150" cy="102" r="26"/>
      <circle cx="150" cy="102" r="14"/>
      <ellipse cx="150" cy="73" rx="9" ry="16"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(45 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(90 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(135 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(180 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(225 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(270 150 102)"/>
      <ellipse cx="150" cy="73" rx="9" ry="16" transform="rotate(315 150 102)"/>
      <circle cx="144" cy="99" r="3"/><circle cx="156" cy="99" r="3"/>
      <path d="M142 107 Q150 113 158 107"/>
      <line x1="225" y1="265" x2="225" y2="145"/>
      <path d="M210 200 Q225 195 240 200"/>
      <circle cx="225" cy="130" r="22"/>
      <circle cx="225" cy="130" r="12"/>
      <ellipse cx="225" cy="105" rx="8" ry="14"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(40 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(80 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(120 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(160 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(200 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(240 225 130)"/>
      <ellipse cx="225" cy="105" rx="8" ry="14" transform="rotate(280 225 130)"/>
      <circle cx="220" cy="127" r="3"/><circle cx="230" cy="127" r="3"/>
      <path d="M218 133 Q225 138 232 133"/>
      <path d="M245 85 Q230 70 220 85 Q228 95 245 85"/>
      <path d="M245 85 Q260 70 270 85 Q262 95 245 85"/>
      <path d="M245 88 Q232 100 225 95 Q232 108 245 97"/>
      <path d="M245 88 Q258 100 265 95 Q258 108 245 97"/>
      <ellipse cx="245" cy="88" rx="3" ry="10"/>
    </svg>` },
  { id: "6", title: "রংধনু মেঘ", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "নীল", timeAgo: "৬ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 200 Q150 60 270 200" stroke-width="10"/>
      <path d="M45 205 Q150 80 255 205" stroke-width="10"/>
      <path d="M60 210 Q150 100 240 210" stroke-width="10"/>
      <path d="M75 215 Q150 120 225 215" stroke-width="10"/>
      <path d="M90 220 Q150 140 210 220" stroke-width="10"/>
      <circle cx="42" cy="195" r="20"/>
      <circle cx="25" cy="205" r="18"/>
      <circle cx="58" cy="208" r="15"/>
      <circle cx="258" cy="195" r="20"/>
      <circle cx="275" cy="205" r="18"/>
      <circle cx="242" cy="208" r="15"/>
      <circle cx="150" cy="240" r="30"/>
      <circle cx="120" cy="248" r="22"/>
      <circle cx="180" cy="248" r="22"/>
      <circle cx="100" cy="258" r="16"/>
      <circle cx="200" cy="258" r="16"/>
      <path d="M80 270 Q78 278 82 280 Q86 278 84 270 Q82 265 80 270"/>
      <path d="M110 275 Q108 283 112 285 Q116 283 114 275 Q112 270 110 275"/>
      <path d="M140 272 Q138 280 142 282 Q146 280 144 272 Q142 267 140 272"/>
      <path d="M170 275 Q168 283 172 285 Q176 283 174 275 Q172 270 170 275"/>
      <path d="M200 270 Q198 278 202 280 Q206 278 204 270 Q202 265 200 270"/>
      <circle cx="250" cy="65" r="28"/>
      <line x1="250" y1="28" x2="250" y2="18"/>
      <line x1="278" y1="45" x2="286" y2="38"/>
      <line x1="287" y1="65" x2="297" y2="65"/>
      <line x1="278" y1="85" x2="286" y2="92"/>
      <circle cx="243" cy="60" r="4"/><circle cx="257" cy="60" r="4"/>
      <path d="M243 70 Q250 76 257 70"/>
    </svg>` },
  { id: "7", title: "রঙিন গাড়ি", category: "যানবাহন", categoryColor: "#3B82F6", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="15" y="230" width="270" height="50" rx="5"/>
      <line x1="15" y1="255" x2="60" y2="255" stroke-dasharray="10,8"/>
      <line x1="80" y1="255" x2="130" y2="255" stroke-dasharray="10,8"/>
      <line x1="150" y1="255" x2="200" y2="255" stroke-dasharray="10,8"/>
      <line x1="220" y1="255" x2="270" y2="255" stroke-dasharray="10,8"/>
      <rect x="40" y="175" width="220" height="70" rx="15"/>
      <path d="M90 175 Q110 130 190 130 Q210 130 230 175"/>
      <rect x="102" y="140" width="55" height="38" rx="8"/>
      <rect x="165" y="140" width="55" height="38" rx="8"/>
      <rect x="48" y="185" width="30" height="18" rx="6"/>
      <rect x="222" y="185" width="30" height="18" rx="6"/>
      <line x1="58" y1="189" x2="68" y2="189"/>
      <line x1="58" y1="194" x2="68" y2="194"/>
      <line x1="232" y1="189" x2="242" y2="189"/>
      <line x1="232" y1="194" x2="242" y2="194"/>
      <circle cx="95" cy="233" r="28"/>
      <circle cx="95" cy="233" r="15"/>
      <circle cx="95" cy="233" r="5"/>
      <circle cx="205" cy="233" r="28"/>
      <circle cx="205" cy="233" r="15"/>
      <circle cx="205" cy="233" r="5"/>
      <line x1="95" y1="218" x2="95" y2="248"/><line x1="80" y1="233" x2="110" y2="233"/>
      <line x1="84" y1="222" x2="106" y2="244"/><line x1="84" y1="244" x2="106" y2="222"/>
      <line x1="205" y1="218" x2="205" y2="248"/><line x1="190" y1="233" x2="220" y2="233"/>
      <line x1="194" y1="222" x2="216" y2="244"/><line x1="194" y1="244" x2="216" y2="222"/>
      <rect x="130" y="178" width="40" height="50" rx="5"/>
      <circle cx="168" cy="203" r="4"/>
      <line x1="185" y1="130" x2="185" y2="105"/>
      <circle cx="185" cy="103" r="4"/>
      <path d="M40 230 Q25 228 20 235 Q18 240 25 242"/>
      <circle cx="240" cy="85" r="20"/>
      <circle cx="260" cy="78" r="16"/>
      <circle cx="220" cy="80" r="15"/>
      <circle cx="55" cy="70" r="25"/>
      <line x1="55" y1="38" x2="55" y2="28"/>
      <line x1="55" y1="102" x2="55" y2="112"/>
      <line x1="23" y1="70" x2="13" y2="70"/>
      <line x1="87" y1="70" x2="97" y2="70"/>
      <line x1="33" y1="48" x2="26" y2="41"/>
      <line x1="77" y1="92" x2="84" y2="99"/>
      <line x1="77" y1="48" x2="84" y2="41"/>
      <line x1="33" y1="92" x2="26" y2="99"/>
    </svg>` },
  { id: "8", title: "জাহাজ ভ্রমণ", category: "যানবাহন", categoryColor: "#3B82F6", author: "আরিফ", timeAgo: "৫ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 250 Q40 238 70 250 Q100 262 130 250 Q160 238 190 250 Q220 262 250 250 Q275 240 290 250"/>
      <path d="M10 265 Q40 253 70 265 Q100 277 130 265 Q160 253 190 265 Q220 277 250 265 Q275 255 290 265"/>
      <path d="M10 280 Q40 268 70 280 Q100 292 130 280 Q160 268 190 280 Q220 292 250 280 Q275 270 290 280"/>
      <path d="M40 220 L60 248 L240 248 L260 220 Z"/>
      <rect x="60" y="175" width="180" height="48"/>
      <circle cx="100" cy="200" r="12"/>
      <circle cx="100" cy="200" r="7"/>
      <circle cx="150" cy="200" r="12"/>
      <circle cx="150" cy="200" r="7"/>
      <circle cx="200" cy="200" r="12"/>
      <circle cx="200" cy="200" r="7"/>
      <rect x="90" y="140" width="120" height="38"/>
      <rect x="118" y="110" width="64" height="33"/>
      <rect x="125" y="116" width="18" height="20" rx="3"/>
      <rect x="157" y="116" width="18" height="20" rx="3"/>
      <rect x="140" y="75" width="20" height="38"/>
      <circle cx="148" cy="68" r="8"/>
      <circle cx="155" cy="58" r="10"/>
      <circle cx="145" cy="50" r="7"/>
      <circle cx="160" cy="45" r="9"/>
      <line x1="150" y1="40" x2="150" y2="110"/>
      <line x1="110" y1="65" x2="190" y2="65"/>
      <path d="M150 40 L175 50 L150 60 Z"/>
      <circle cx="200" cy="235" r="6"/>
      <line x1="200" y1="241" x2="200" y2="255"/>
      <line x1="190" y1="255" x2="210" y2="255"/>
      <path d="M190 255 Q188 248 192 245"/>
      <path d="M210 255 Q212 248 208 245"/>
      <circle cx="255" cy="65" r="20"/>
      <line x1="255" y1="38" x2="255" y2="30"/>
      <line x1="278" y1="55" x2="285" y2="48"/>
      <line x1="285" y1="65" x2="293" y2="65"/>
      <circle cx="55" cy="50" r="15"/>
      <circle cx="70" cy="44" r="12"/>
      <circle cx="40" cy="46" r="11"/>
    </svg>` },
  { id: "9", title: "আমার বাড়ি", category: "বাড়ি-গ্রাম", categoryColor: "#8B5CF6", author: "মীম", timeAgo: "১ দিন আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="15" y="248" width="270" height="40" rx="5"/>
      <line x1="20" y1="225" x2="20" y2="250"/><line x1="35" y1="225" x2="35" y2="250"/>
      <line x1="20" y1="233" x2="35" y2="233"/><line x1="20" y1="243" x2="35" y2="243"/>
      <line x1="50" y1="225" x2="50" y2="250"/><line x1="35" y1="233" x2="50" y2="233"/><line x1="35" y1="243" x2="50" y2="243"/>
      <line x1="245" y1="225" x2="245" y2="250"/><line x1="260" y1="225" x2="260" y2="250"/>
      <line x1="245" y1="233" x2="260" y2="233"/><line x1="245" y1="243" x2="260" y2="243"/>
      <line x1="275" y1="225" x2="275" y2="250"/><line x1="260" y1="233" x2="275" y2="233"/><line x1="260" y1="243" x2="275" y2="243"/>
      <rect x="65" y="168" width="170" height="90"/>
      <path d="M50 170 L150 95 L250 170"/>
      <path d="M60 170 L150 108 L240 170"/>
      <rect x="185" y="105" width="22" height="40"/>
      <path d="M183 105 L185 98 L207 98 L209 105"/>
      <path d="M196 95 Q188 82 196 72 Q204 62 196 52"/>
      <rect x="125" y="210" width="50" height="48" rx="6"/>
      <circle cx="170" cy="235" r="4"/>
      <path d="M125 215 Q150 200 175 215"/>
      <rect x="78" y="182" width="42" height="38" rx="5"/>
      <line x1="99" y1="182" x2="99" y2="220"/>
      <line x1="78" y1="201" x2="120" y2="201"/>
      <rect x="180" y="182" width="42" height="38" rx="5"/>
      <line x1="201" y1="182" x2="201" y2="220"/>
      <line x1="180" y1="201" x2="222" y2="201"/>
      <path d="M72 248 L78 260 L66 260 Z"/>
      <circle cx="72" cy="244" r="6"/>
      <path d="M68 244 Q72 236 76 244"/>
      <path d="M228 248 L234 260 L222 260 Z"/>
      <circle cx="228" cy="244" r="6"/>
      <path d="M224 244 Q228 236 232 244"/>
      <line x1="40" y1="200" x2="40" y2="248"/>
      <circle cx="40" cy="175" r="28"/>
      <circle cx="40" cy="160" r="18"/>
      <line x1="262" y1="200" x2="262" y2="248"/>
      <circle cx="262" cy="175" r="28"/>
      <circle cx="262" cy="160" r="18"/>
      <path d="M135 258 L135 280 L165 280 L165 258"/>
      <line x1="150" y1="258" x2="150" y2="280"/>
    </svg>` },
  { id: "10", title: "ঈদের তারা", category: "উৎসব", categoryColor: "#EF4444", author: "সাদিয়া", timeAgo: "২ দিন আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 30 Q150 20 270 30"/>
      <rect x="30" y="18" width="38" height="28" rx="4"/>
      <rect x="78" y="15" width="38" height="28" rx="4"/>
      <rect x="126" y="13" width="48" height="28" rx="4"/>
      <rect x="184" y="15" width="38" height="28" rx="4"/>
      <rect x="232" y="18" width="38" height="28" rx="4"/>
      <line x1="60" y1="46" x2="60" y2="75"/>
      <path d="M48 75 Q48 110 60 115 Q72 110 72 75 Z"/>
      <line x1="55" y1="85" x2="65" y2="85"/>
      <line x1="52" y1="95" x2="68" y2="95"/>
      <line x1="55" y1="105" x2="65" y2="105"/>
      <line x1="150" y1="43" x2="150" y2="72"/>
      <path d="M132 72 Q132 115 150 122 Q168 115 168 72 Z"/>
      <line x1="140" y1="85" x2="160" y2="85"/>
      <line x1="136" y1="97" x2="164" y2="97"/>
      <line x1="140" y1="109" x2="160" y2="109"/>
      <line x1="240" y1="46" x2="240" y2="75"/>
      <path d="M228 75 Q228 110 240 115 Q252 110 252 75 Z"/>
      <line x1="235" y1="85" x2="245" y2="85"/>
      <line x1="232" y1="95" x2="248" y2="95"/>
      <line x1="235" y1="105" x2="245" y2="105"/>
      <path d="M100 155 Q100 220 150 235 Q200 220 200 155 Q200 120 185 108 Q165 130 150 130 Q135 130 115 108 Q100 120 100 155Z"/>
      <path d="M118 112 Q135 140 150 140 Q165 140 182 112"/>
      <circle cx="135" cy="168" r="7"/>
      <circle cx="165" cy="168" r="7"/>
      <circle cx="137" cy="166" r="3" fill="black"/>
      <circle cx="167" cy="166" r="3" fill="black"/>
      <path d="M132 182 Q150 195 168 182"/>
      <path d="M55 145 L58 136 L61 145 L70 145 L63 151 L66 160 L58 154 L50 160 L53 151 L46 145Z"/>
      <path d="M248 140 L251 131 L254 140 L263 140 L256 146 L259 155 L251 149 L243 155 L246 146 L239 140Z"/>
      <path d="M42 195 L44 189 L46 195 L52 195 L47 199 L49 205 L44 201 L39 205 L41 199 L36 195Z"/>
      <path d="M258 195 L260 189 L262 195 L268 195 L263 199 L265 205 L260 201 L255 205 L257 199 L252 195Z"/>
      <path d="M80 248 L82 242 L84 248 L90 248 L85 252 L87 258 L82 254 L77 258 L79 252 L74 248Z"/>
      <path d="M218 250 L220 244 L222 250 L228 250 L223 254 L225 260 L220 256 L215 260 L217 254 L212 250Z"/>
      <circle cx="90" cy="262" r="10"/>
      <path d="M90 272 L90 290"/><path d="M78 278 L90 275 L102 278"/>
      <path d="M90 290 L83 305"/><path d="M90 290 L97 305"/>
      <circle cx="150" cy="260" r="10"/>
      <path d="M150 270 L150 290"/><path d="M138 278 L150 275 L162 278"/>
      <path d="M150 290 L143 305"/><path d="M150 290 L157 305"/>
      <circle cx="210" cy="262" r="10"/>
      <path d="M210 272 L210 290"/><path d="M198 278 L210 275 L222 278"/>
      <path d="M210 290 L203 305"/><path d="M210 290 L217 305"/>
    </svg>` },
  { id: "11", title: "জন্মদিনের কেক", category: "উৎসব", categoryColor: "#EF4444", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="30" y="265" width="240" height="12" rx="5"/>
      <rect x="55" y="277" width="18" height="25"/>
      <rect x="227" y="277" width="18" height="25"/>
      <ellipse cx="150" cy="248" rx="100" ry="18"/>
      <rect x="50" y="200" width="200" height="50"/>
      <ellipse cx="150" cy="200" rx="100" ry="18"/>
      <ellipse cx="150" cy="195" rx="78" ry="14"/>
      <rect x="72" y="158" width="156" height="40"/>
      <ellipse cx="150" cy="158" rx="78" ry="14"/>
      <ellipse cx="150" cy="153" rx="55" ry="10"/>
      <rect x="95" y="122" width="110" height="33"/>
      <ellipse cx="150" cy="122" rx="55" ry="10"/>
      <rect x="118" y="98" width="12" height="28"/>
      <rect x="144" y="92" width="12" height="34"/>
      <rect x="170" y="98" width="12" height="28"/>
      <path d="M124 96 Q122 86 124 78 Q128 85 126 96Z"/>
      <path d="M150 90 Q148 78 150 68 Q154 77 152 90Z"/>
      <path d="M176 96 Q174 86 176 78 Q180 85 178 96Z"/>
      <path d="M100 122 Q105 135 108 122"/>
      <path d="M125 120 Q130 133 133 120"/>
      <path d="M150 119 Q155 132 158 119"/>
      <path d="M175 120 Q180 133 183 120"/>
      <path d="M200 122 Q205 135 208 122"/>
      <path d="M75 158 Q80 175 83 158"/>
      <path d="M105 155 Q110 172 113 155"/>
      <path d="M135 153 Q140 170 143 153"/>
      <path d="M165 153 Q170 170 173 153"/>
      <path d="M195 155 Q200 172 203 155"/>
      <path d="M222 158 Q227 175 230 158"/>
      <circle cx="120" cy="210" r="6"/>
      <circle cx="150" cy="215" r="6"/>
      <circle cx="180" cy="210" r="6"/>
      <circle cx="105" cy="225" r="5"/>
      <circle cx="195" cy="225" r="5"/>
      <path d="M42 80 L44 73 L46 80 L53 80 L47 84 L49 91 L44 87 L39 91 L41 84 L35 80Z"/>
      <path d="M255 75 L257 68 L259 75 L266 75 L260 79 L262 86 L257 82 L252 86 L254 79 L248 75Z"/>
      <path d="M42 180 L44 174 L46 180 L52 180 L47 184 L49 190 L44 186 L39 190 L41 184 L36 180Z"/>
      <path d="M260 180 L262 174 L264 180 L270 180 L265 184 L267 190 L262 186 L257 190 L259 184 L254 180Z"/>
      <circle cx="48" cy="115" r="22"/>
      <path d="M48 137 Q45 148 48 155"/>
      <circle cx="255" cy="115" r="22"/>
      <path d="M255 137 Q252 148 255 155"/>
      <path d="M48 155 Q55 165 52 178 Q49 190 55 200"/>
      <path d="M255 155 Q248 165 251 178 Q254 190 248 200"/>
    </svg>` },
  { id: "12", title: "মজার রকেট", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="30" cy="40" r="3" fill="black"/>
      <circle cx="60" cy="70" r="2" fill="black"/>
      <circle cx="250" cy="35" r="3" fill="black"/>
      <circle cx="270" cy="75" r="2" fill="black"/>
      <circle cx="40" cy="130" r="2" fill="black"/>
      <circle cx="260" cy="120" r="3" fill="black"/>
      <circle cx="25" cy="180" r="2" fill="black"/>
      <circle cx="275" cy="175" r="2" fill="black"/>
      <path d="M150 30 Q125 60 120 130 L120 220 L180 220 L180 130 Q175 60 150 30Z"/>
      <path d="M150 30 Q140 55 138 75 L162 75 Q160 55 150 30Z"/>
      <circle cx="150" cy="130" r="28"/>
      <circle cx="150" cy="130" r="18"/>
      <line x1="135" y1="120" x2="142" y2="128"/>
      <line x1="158" y1="128" x2="165" y2="120"/>
      <path d="M120 190 L85 235 L120 225Z"/>
      <path d="M180 190 L215 235 L180 225Z"/>
      <path d="M120 155 L100 175 L120 170Z"/>
      <path d="M180 155 L200 175 L180 170Z"/>
      <line x1="120" y1="95" x2="180" y2="95"/>
      <line x1="120" y1="165" x2="180" y2="165"/>
      <path d="M128 220 L122 235 L178 235 L172 220Z"/>
      <ellipse cx="150" cy="235" rx="28" ry="8"/>
      <path d="M130 243 Q135 265 150 272 Q165 265 170 243"/>
      <path d="M136 248 Q140 268 150 278 Q160 268 164 248"/>
      <path d="M140 252 Q143 270 150 280 Q157 270 160 252"/>
      <circle cx="55" cy="65" r="30"/>
      <ellipse cx="55" cy="65" rx="45" ry="12" transform="rotate(-20 55 65)"/>
      <path d="M18 58 Q55 48 92 58" stroke-width="4"/>
      <path d="M248 55 L250 48 L252 55 L259 55 L253 59 L255 66 L250 62 L245 66 L247 59 L241 55Z"/>
    </svg>` },
  { id: "13", title: "প্রিয় টেডি", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="150" cy="200" rx="75" ry="80"/>
      <circle cx="150" cy="108" r="62"/>
      <circle cx="98" cy="65" r="28"/>
      <circle cx="98" cy="65" r="18"/>
      <circle cx="202" cy="65" r="28"/>
      <circle cx="202" cy="65" r="18"/>
      <circle cx="128" cy="98" r="12"/>
      <circle cx="172" cy="98" r="12"/>
      <circle cx="130" cy="96" r="6" fill="black"/>
      <circle cx="174" cy="96" r="6" fill="black"/>
      <circle cx="132" cy="93" r="2" fill="white"/>
      <circle cx="176" cy="93" r="2" fill="white"/>
      <ellipse cx="150" cy="122" rx="25" ry="18"/>
      <path d="M142 116 Q150 112 158 116 Q155 122 150 123 Q145 122 142 116Z" fill="black"/>
      <path d="M150 123 Q140 132 133 128"/>
      <path d="M150 123 Q160 132 167 128"/>
      <ellipse cx="150" cy="205" rx="45" ry="50"/>
      <path d="M125 155 L140 165 L125 175 Z"/>
      <path d="M175 155 L160 165 L175 175 Z"/>
      <circle cx="150" cy="165" r="8"/>
      <ellipse cx="82" cy="195" rx="22" ry="45" transform="rotate(-20 82 195)"/>
      <ellipse cx="218" cy="195" rx="22" ry="45" transform="rotate(20 218 195)"/>
      <ellipse cx="110" cy="265" rx="28" ry="22"/>
      <ellipse cx="190" cy="265" rx="28" ry="22"/>
      <path d="M96 272 Q103 276 110 272"/>
      <path d="M190 272 Q197 276 204 272"/>
      <path d="M72 200 Q78 204 84 200"/>
      <path d="M214 200 Q220 204 226 200"/>
      <path d="M140 198 Q140 190 150 195 Q160 190 160 198 Q160 208 150 215 Q140 208 140 198Z"/>
    </svg>` },
  { id: "14", title: "জলের মাছ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "আরিফ", timeAgo: "৪ ঘণ্টা আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 200 Q40 185 70 200 Q100 215 130 200 Q160 185 190 200 Q220 215 250 200 Q275 188 290 200"/>
      <path d="M10 220 Q40 205 70 220 Q100 235 130 220 Q160 205 190 220 Q220 235 250 220 Q275 208 290 220"/>
      <path d="M10 240 Q40 225 70 240 Q100 255 130 240 Q160 225 190 240 Q220 255 250 240 Q275 228 290 240"/>
      <path d="M10 260 Q40 245 70 260 Q100 275 130 260 Q160 245 190 260 Q220 275 250 260 Q275 248 290 260"/>
      <path d="M40 280 Q30 260 40 240 Q50 220 40 200"/>
      <path d="M55 280 Q65 260 55 240 Q45 220 55 200"/>
      <path d="M248 280 Q238 260 248 240 Q258 220 248 200"/>
      <path d="M263 280 Q273 260 263 240 Q253 220 263 200"/>
      <path d="M80 150 Q80 100 150 95 Q220 100 240 140 Q255 165 240 185 Q220 205 150 200 Q80 195 80 150Z"/>
      <path d="M80 150 L38 120 L45 150 L38 180 L80 155Z"/>
      <path d="M140 95 Q150 65 175 72 Q165 90 160 95"/>
      <path d="M130 198 Q125 220 140 225 Q148 215 145 198"/>
      <path d="M175 198 Q170 220 185 225 Q193 215 190 198"/>
      <circle cx="215" cy="138" r="18"/>
      <circle cx="215" cy="138" r="10"/>
      <circle cx="218" cy="135" r="4" fill="black"/>
      <circle cx="221" cy="132" r="2" fill="white"/>
      <path d="M240 158 Q248 148 245 138"/>
      <circle cx="247" cy="135" r="3"/>
      <path d="M110 120 Q125 115 140 120"/>
      <path d="M130 138 Q145 133 160 138"/>
      <path d="M110 155 Q125 150 140 155"/>
      <path d="M150 120 Q165 115 180 120"/>
      <path d="M155 155 Q170 150 185 155"/>
      <path d="M170 138 Q185 133 200 138"/>
      <circle cx="255" cy="90" r="8"/>
      <circle cx="268" cy="72" r="6"/>
      <circle cx="278" cy="55" r="4"/>
      <circle cx="240" cy="75" r="5"/>
      <path d="M55 130 Q55 118 80 116 Q100 118 105 128 Q100 138 80 136 Q55 134 55 130Z"/>
      <path d="M55 128 L38 118 L42 128 L38 138 L55 132Z"/>
      <circle cx="95" cy="126" r="5"/>
      <circle cx="96" cy="125" r="2" fill="black"/>
    </svg>` },
  { id: "15", title: "গ্রামের নৌকা", category: "যানবাহন", categoryColor: "#3B82F6", author: "নীল", timeAgo: "৩ দিন আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="65" cy="55" r="22"/>
      <circle cx="85" cy="47" r="18"/>
      <circle cx="45" cy="50" r="16"/>
      <circle cx="220" cy="60" r="20"/>
      <circle cx="240" cy="52" r="16"/>
      <circle cx="200" cy="55" r="15"/>
      <circle cx="150" cy="50" r="28"/>
      <line x1="150" y1="15" x2="150" y2="5"/>
      <line x1="178" y1="28" x2="185" y2="21"/>
      <line x1="188" y1="50" x2="198" y2="50"/>
      <line x1="122" y1="28" x2="115" y2="21"/>
      <line x1="112" y1="50" x2="102" y2="50"/>
      <circle cx="143" cy="46" r="4"/>
      <circle cx="157" cy="46" r="4"/>
      <path d="M143 56 Q150 62 157 56"/>
      <path d="M10 200 Q55 185 100 200 Q145 215 190 200 Q235 185 290 200"/>
      <path d="M10 218 Q55 203 100 218 Q145 233 190 218 Q235 203 290 218"/>
      <path d="M10 236 Q55 221 100 236 Q145 251 190 236 Q235 221 290 236"/>
      <path d="M10 254 Q55 239 100 254 Q145 269 190 254 Q235 239 290 254"/>
      <path d="M55 205 Q55 225 65 232 L235 232 Q245 225 245 205Z"/>
      <path d="M65 205 L235 205"/>
      <line x1="150" y1="135" x2="150" y2="205"/>
      <path d="M150 140 L150 200 L95 185 Z"/>
      <path d="M150 145 L150 195 L200 175 Z"/>
      <path d="M150 135 L175 143 L150 151 Z"/>
      <line x1="150" y1="140" x2="55" y2="205"/>
      <line x1="150" y1="140" x2="245" y2="205"/>
      <circle cx="105" cy="198" r="9"/>
      <circle cx="150" cy="198" r="9"/>
      <circle cx="195" cy="198" r="9"/>
      <path d="M88 202 L65 225 Q60 232 68 235 Q76 238 80 230 L88 202"/>
      <path d="M150 232 Q138 248 140 260"/>
      <path d="M150 232 Q162 248 160 260"/>
      <path d="M200 95 Q205 90 210 95"/>
      <path d="M215 85 Q220 80 225 85"/>
      <path d="M230 98 Q235 93 240 98"/>
    </svg>` },
  { id: "16", title: "খুশির ডাইনোসর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "জিম", timeAgo: "১ দিন আগে",
    svgContent: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M210 220 Q255 210 270 240 Q265 260 245 255 Q230 250 220 240"/>
      <ellipse cx="155" cy="210" rx="80" ry="70"/>
      <path d="M118 160 Q105 130 108 100 Q112 75 125 68"/>
      <path d="M155 155 Q160 130 158 100 Q155 75 145 68"/>
      <ellipse cx="135" cy="60" rx="48" ry="38"/>
      <path d="M105 68 Q88 78 85 95 Q88 108 105 105"/>
      <path d="M90 85 L85 95"/>
      <line x1="96" y1="82" x2="93" y2="93"/>
      <line x1="102" y1="80" x2="100" y2="91"/>
      <ellipse cx="92" cy="78" rx="4" ry="3"/>
      <circle cx="128" cy="48" r="14"/>
      <circle cx="128" cy="48" r="8"/>
      <circle cx="131" cy="45" r="3" fill="black"/>
      <circle cx="133" cy="43" r="1.5" fill="white"/>
      <path d="M118 38 Q128 33 138 37"/>
      <path d="M108 82 Q125 92 145 85"/>
      <path d="M128 68 L118 45 L138 62"/>
      <path d="M145 68 L140 42 L155 62"/>
      <path d="M155 155 L148 128 L165 148"/>
      <path d="M165 175 L160 148 L175 168"/>
      <path d="M180 195 L178 165 L190 188"/>
      <path d="M100 185 Q75 175 68 192 Q65 205 75 210 Q85 215 95 205"/>
      <path d="M68 210 L62 218"/><path d="M72 213 L67 222"/><path d="M77 214 L73 223"/>
      <ellipse cx="110" cy="268" rx="32" ry="22"/>
      <ellipse cx="190" cy="268" rx="32" ry="22"/>
      <path d="M88 278 L82 288"/><path d="M96 282 L92 292"/><path d="M105 284 L103 294"/>
      <path d="M178 282 Q185 286 192 282"/><path d="M186 284 L186 294"/>
      <circle cx="140" cy="195" r="8"/>
      <circle cx="165" cy="210" r="7"/>
      <circle cx="142" cy="222" r="6"/>
      <circle cx="168" cy="228" r="5"/>
      <path d="M252 70 L255 62 L258 70 L266 70 L260 75 L262 83 L255 78 L248 83 L250 75 L244 70Z"/>
      <path d="M38 110 L40 103 L42 110 L49 110 L44 114 L46 121 L40 117 L34 121 L36 114 L30 110Z"/>
    </svg>` },
];

export const palette: string[] = [
  "#FF6B1A", "#2ECC71", "#3498DB", "#E74C3C", "#F1C40F",
  "#9B59B6", "#FF69B4", "#1ABC9C", "#A4DE02", "#F39C12",
  "#FF00FF", "#8E44AD", "#5D3FD3", "#16A085", "#8B4513",
  "#64748B", "#FFFFFF", "#34495E", "#DC143C", "#FFD700",
];
