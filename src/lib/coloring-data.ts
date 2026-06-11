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

// Shared SVG wrapper attributes — white fill (flood-fill target), black outlines
const SVG_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="white" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">`;
const SVG_CLOSE = `</svg>`;
const wrap = (inner: string) => `${SVG_OPEN}${inner}${SVG_CLOSE}`;

// ============ 1. ELEPHANT ============
const elephant = wrap(`
  <path d="M80,280 C60,280 45,265 45,245 C45,200 55,160 80,140 C100,125 130,118 160,115 C190,112 220,115 245,125 C275,138 295,158 305,185 C318,215 315,248 300,265 C282,285 255,292 225,294 C195,296 165,293 140,287 C115,281 95,280 80,280Z"/>
  <path d="M160,115 C145,100 135,82 140,65 C145,48 160,38 178,35 C196,32 215,38 228,52 C242,67 245,88 238,105 C232,120 218,128 202,130 C186,132 170,127 160,115Z"/>
  <path d="M138,95 C115,88 95,95 80,112 C65,130 62,155 70,175 C78,195 95,208 115,210 C130,211 143,203 148,190 C155,173 152,148 148,128 C145,113 142,100 138,95Z"/>
  <path d="M130,105 C115,100 102,108 95,122 C88,136 90,155 100,168 C108,178 120,182 130,178 C140,174 145,162 144,148 C143,134 138,115 130,105Z" stroke-width="1.5"/>
  <path d="M158,128 C148,140 140,158 135,178 C130,198 128,220 130,240 C132,255 138,268 148,272 C158,276 168,268 172,255 C176,240 172,222 168,205 C165,192 162,178 162,165 C162,150 163,136 162,128"/>
  <path d="M148,272 C138,280 130,288 132,298 C134,308 146,312 156,308 C166,304 170,294 168,283"/>
  <path d="M142,180 Q155,183 162,178" stroke-width="1.5"/>
  <path d="M138,200 Q152,204 162,198" stroke-width="1.5"/>
  <path d="M134,222 Q149,226 162,220" stroke-width="1.5"/>
  <path d="M132,244 Q147,248 162,243" stroke-width="1.5"/>
  <ellipse cx="200" cy="72" rx="14" ry="12"/>
  <ellipse cx="200" cy="72" rx="9" ry="8"/>
  <path d="M188,63 L184,57" stroke-width="2"/>
  <path d="M194,61 L192,55" stroke-width="2"/>
  <path d="M200,60 L200,54" stroke-width="2"/>
  <path d="M206,61 L208,55" stroke-width="2"/>
  <path d="M175,118 C180,124 190,128 200,127" stroke-width="2"/>
  <path d="M172,115 C165,120 158,130 158,142 C158,150 162,155 168,153 C175,150 178,140 176,130 C175,122 173,117 172,115Z"/>
  <path d="M95,278 C88,278 82,285 82,295 L82,345 C82,355 88,360 95,360 L118,360 C125,360 130,355 130,345 L130,295 C130,285 125,278 118,278Z"/>
  <path d="M145,282 C138,282 132,289 132,299 L132,348 C132,358 138,363 145,363 L168,363 C175,363 180,358 180,348 L180,299 C180,289 175,282 168,282Z"/>
  <path d="M200,283 C193,283 187,290 187,300 L187,350 C187,360 193,365 200,365 L222,365 C229,365 234,360 234,350 L234,300 C234,290 229,283 222,283Z"/>
  <path d="M248,278 C241,278 235,285 235,295 L235,345 C235,355 241,360 248,360 L270,360 C277,360 282,355 282,345 L282,295 C282,285 277,278 270,278Z"/>
  <path d="M86,358 Q95,365 104,358" stroke-width="2"/>
  <path d="M108,360 Q117,367 126,360" stroke-width="2"/>
  <path d="M136,361 Q145,368 154,361" stroke-width="2"/>
  <path d="M158,361 Q167,368 176,361" stroke-width="2"/>
  <path d="M295,240 C308,235 318,242 322,255 C326,268 318,280 308,278"/>
  <path d="M308,278 C305,285 308,293 305,298 C302,303 296,302 296,296"/>
  <path d="M170,200 C185,195 200,193 215,195" stroke-width="1.5"/>
  <path d="M160,225 C178,218 200,215 220,218" stroke-width="1.5"/>
  <path d="M180,250 C198,245 218,243 235,247" stroke-width="1.5"/>
  <circle cx="148" cy="308" r="10"/>
  <circle cx="135" cy="300" r="8"/>
  <circle cx="148" cy="295" r="8"/>
  <circle cx="161" cy="300" r="8"/>
  <circle cx="161" cy="312" r="8"/>
  <circle cx="135" cy="312" r="8"/>
  <circle cx="148" cy="305" r="4"/>
  <path d="M40,375 Q200,372 380,375" stroke-width="2"/>
  <path d="M55,375 L50,365 M75,375 L72,367 M95,375 L92,368" stroke-width="1.5"/>
  <path d="M290,375 L287,367 M310,375 L307,367 M340,375 L337,367" stroke-width="1.5"/>
`);

// ============ 2. BUTTERFLY ============
const butterfly = wrap(`
  <ellipse cx="200" cy="200" rx="10" ry="60"/>
  <path d="M200,148 C195,138 195,128 200,120 C205,128 205,138 200,148" />
  <path d="M196,128 C190,118 192,108 197,103" stroke-width="1.5"/>
  <path d="M204,128 C210,118 208,108 203,103" stroke-width="1.5"/>
  <circle cx="195" cy="102" r="4"/>
  <circle cx="205" cy="102" r="4"/>
  <circle cx="197" cy="160" r="2"/>
  <circle cx="197" cy="175" r="2"/>
  <circle cx="197" cy="190" r="2"/>
  <circle cx="197" cy="205" r="2"/>
  <circle cx="197" cy="220" r="2"/>
  <circle cx="197" cy="235" r="2"/>
  <path d="M190,155 C140,130 80,135 50,170 C30,195 35,225 65,240 C95,253 140,245 175,225 C190,217 195,205 195,195"/>
  <path d="M190,205 C140,215 85,235 60,275 C45,300 55,325 85,325 C120,325 165,300 185,265 C195,247 197,228 195,215"/>
  <path d="M210,155 C260,130 320,135 350,170 C370,195 365,225 335,240 C305,253 260,245 225,225 C210,217 205,205 205,195"/>
  <path d="M210,205 C260,215 315,235 340,275 C355,300 345,325 315,325 C280,325 235,300 215,265 C205,247 203,228 205,215"/>
  <circle cx="100" cy="180" r="14"/>
  <circle cx="100" cy="180" r="6"/>
  <circle cx="140" cy="200" r="10"/>
  <circle cx="75" cy="210" r="8"/>
  <path d="M110,225 Q125,235 140,228" stroke-width="1.5"/>
  <path d="M70,195 Q60,200 55,210" stroke-width="1.5"/>
  <circle cx="110" cy="275" r="12"/>
  <circle cx="110" cy="275" r="5"/>
  <circle cx="145" cy="265" r="9"/>
  <circle cx="85" cy="295" r="8"/>
  <path d="M120,300 Q140,308 155,295" stroke-width="1.5"/>
  <circle cx="300" cy="180" r="14"/>
  <circle cx="300" cy="180" r="6"/>
  <circle cx="260" cy="200" r="10"/>
  <circle cx="325" cy="210" r="8"/>
  <path d="M290,225 Q275,235 260,228" stroke-width="1.5"/>
  <path d="M330,195 Q340,200 345,210" stroke-width="1.5"/>
  <circle cx="290" cy="275" r="12"/>
  <circle cx="290" cy="275" r="5"/>
  <circle cx="255" cy="265" r="9"/>
  <circle cx="315" cy="295" r="8"/>
  <path d="M280,300 Q260,308 245,295" stroke-width="1.5"/>
  <path d="M170,170 Q150,200 165,225" stroke-width="1.5"/>
  <path d="M165,220 Q145,255 170,290" stroke-width="1.5"/>
  <path d="M230,170 Q250,200 235,225" stroke-width="1.5"/>
  <path d="M235,220 Q255,255 230,290" stroke-width="1.5"/>
`);

// ============ 3. CAT ============
const cat = wrap(`
  <path d="M120,180 C100,180 85,195 85,215 L85,300 C85,330 110,355 145,355 L255,355 C290,355 315,330 315,300 L315,215 C315,195 300,180 280,180 Z"/>
  <circle cx="200" cy="155" r="75"/>
  <path d="M135,100 L120,55 L170,90 Z"/>
  <path d="M265,100 L280,55 L230,90 Z"/>
  <path d="M140,95 L130,68 L158,90 Z" stroke-width="1.5"/>
  <path d="M260,95 L270,68 L242,90 Z" stroke-width="1.5"/>
  <ellipse cx="175" cy="148" rx="12" ry="16"/>
  <ellipse cx="225" cy="148" rx="12" ry="16"/>
  <ellipse cx="175" cy="148" rx="5" ry="12"/>
  <ellipse cx="225" cy="148" rx="5" ry="12"/>
  <circle cx="172" cy="144" r="2"/>
  <circle cx="222" cy="144" r="2"/>
  <path d="M190,175 L200,185 L210,175 Z"/>
  <path d="M200,185 C200,195 195,200 188,200" stroke-width="1.5"/>
  <path d="M200,185 C200,195 205,200 212,200" stroke-width="1.5"/>
  <path d="M188,200 Q183,205 178,200" stroke-width="1.5"/>
  <path d="M212,200 Q217,205 222,200" stroke-width="1.5"/>
  <path d="M165,178 L130,175" stroke-width="1.5"/>
  <path d="M165,185 L128,188" stroke-width="1.5"/>
  <path d="M165,192 L130,200" stroke-width="1.5"/>
  <path d="M235,178 L270,175" stroke-width="1.5"/>
  <path d="M235,185 L272,188" stroke-width="1.5"/>
  <path d="M235,192 L270,200" stroke-width="1.5"/>
  <path d="M135,128 Q150,118 165,125" stroke-width="1.5"/>
  <path d="M235,125 Q250,118 265,128" stroke-width="1.5"/>
  <path d="M95,210 Q90,225 95,240" stroke-width="1.5"/>
  <path d="M305,210 Q310,225 305,240" stroke-width="1.5"/>
  <path d="M110,260 Q115,275 110,290" stroke-width="1.5"/>
  <path d="M290,260 Q285,275 290,290" stroke-width="1.5"/>
  <ellipse cx="130" cy="355" rx="22" ry="10"/>
  <ellipse cx="180" cy="358" rx="22" ry="10"/>
  <ellipse cx="220" cy="358" rx="22" ry="10"/>
  <ellipse cx="270" cy="355" rx="22" ry="10"/>
  <circle cx="120" cy="352" r="3"/>
  <circle cx="130" cy="350" r="3"/>
  <circle cx="140" cy="352" r="3"/>
  <circle cx="170" cy="354" r="3"/>
  <circle cx="180" cy="352" r="3"/>
  <circle cx="190" cy="354" r="3"/>
  <circle cx="210" cy="354" r="3"/>
  <circle cx="220" cy="352" r="3"/>
  <circle cx="230" cy="354" r="3"/>
  <circle cx="260" cy="352" r="3"/>
  <circle cx="270" cy="350" r="3"/>
  <circle cx="280" cy="352" r="3"/>
  <path d="M315,280 C340,275 360,290 358,315 C356,335 340,345 325,335" />
  <circle cx="200" cy="265" r="12"/>
  <path d="M200,277 L200,290" stroke-width="1.5"/>
  <path d="M40,378 Q200,374 380,378" stroke-width="2"/>
`);

// ============ 4. PEACOCK ============
const peacock = wrap(`
  <ellipse cx="200" cy="280" rx="35" ry="55"/>
  <circle cx="200" cy="195" r="28"/>
  <path d="M195,170 L195,150 L200,140 L205,150 L205,170"/>
  <circle cx="195" cy="148" r="3"/>
  <circle cx="205" cy="148" r="3"/>
  <circle cx="200" cy="142" r="3"/>
  <ellipse cx="190" cy="190" rx="4" ry="5"/>
  <ellipse cx="210" cy="190" rx="4" ry="5"/>
  <path d="M195,205 L200,212 L205,205 Z"/>
  <path d="M195,215 Q200,222 205,215"/>
  <path d="M180,235 L170,265 L185,260 L180,290 L195,275" stroke-width="1.5"/>
  <path d="M220,235 L230,265 L215,260 L220,290 L205,275" stroke-width="1.5"/>
  <path d="M200,180 C150,80 80,60 50,90 C80,100 100,120 110,150"/>
  <path d="M200,175 C160,60 100,40 80,75 C110,85 130,105 140,135"/>
  <path d="M200,180 C250,80 320,60 350,90 C320,100 300,120 290,150"/>
  <path d="M200,175 C240,60 300,40 320,75 C290,85 270,105 260,135"/>
  <path d="M200,180 C180,70 130,35 90,55" />
  <path d="M200,180 C220,70 270,35 310,55" />
  <path d="M200,180 C200,80 200,40 200,30" />
  <ellipse cx="50" cy="85" rx="14" ry="20" transform="rotate(-30 50 85)"/>
  <ellipse cx="50" cy="85" rx="7" ry="11" transform="rotate(-30 50 85)"/>
  <circle cx="50" cy="85" r="3"/>
  <ellipse cx="85" cy="55" rx="14" ry="20" transform="rotate(-15 85 55)"/>
  <ellipse cx="85" cy="55" rx="7" ry="11" transform="rotate(-15 85 55)"/>
  <circle cx="85" cy="55" r="3"/>
  <ellipse cx="135" cy="40" rx="14" ry="20" transform="rotate(-5 135 40)"/>
  <ellipse cx="135" cy="40" rx="7" ry="11" transform="rotate(-5 135 40)"/>
  <circle cx="135" cy="40" r="3"/>
  <ellipse cx="200" cy="30" rx="14" ry="20"/>
  <ellipse cx="200" cy="30" rx="7" ry="11"/>
  <circle cx="200" cy="30" r="3"/>
  <ellipse cx="265" cy="40" rx="14" ry="20" transform="rotate(5 265 40)"/>
  <ellipse cx="265" cy="40" rx="7" ry="11" transform="rotate(5 265 40)"/>
  <circle cx="265" cy="40" r="3"/>
  <ellipse cx="315" cy="55" rx="14" ry="20" transform="rotate(15 315 55)"/>
  <ellipse cx="315" cy="55" rx="7" ry="11" transform="rotate(15 315 55)"/>
  <circle cx="315" cy="55" r="3"/>
  <ellipse cx="350" cy="85" rx="14" ry="20" transform="rotate(30 350 85)"/>
  <ellipse cx="350" cy="85" rx="7" ry="11" transform="rotate(30 350 85)"/>
  <circle cx="350" cy="85" r="3"/>
  <path d="M180,240 Q160,250 155,270" stroke-width="1.5"/>
  <path d="M220,240 Q240,250 245,270" stroke-width="1.5"/>
  <path d="M175,260 Q160,272 158,288" stroke-width="1.5"/>
  <path d="M225,260 Q240,272 242,288" stroke-width="1.5"/>
  <path d="M190,335 L185,355 L195,355 L190,375" stroke-width="2"/>
  <path d="M210,335 L215,355 L205,355 L210,375" stroke-width="2"/>
  <path d="M180,375 L200,375 M200,375 L220,375" stroke-width="2"/>
  <path d="M40,380 Q200,376 380,380" stroke-width="2"/>
`);

// ============ 5. SUNFLOWER GARDEN ============
const sunflowers = wrap(`
  <circle cx="140" cy="140" r="35"/>
  <path d="M140,105 L140,70 M140,175 L140,210 M105,140 L70,140 M175,140 L210,140" stroke-width="1.5"/>
  <ellipse cx="140" cy="70" rx="15" ry="28"/>
  <ellipse cx="140" cy="210" rx="15" ry="28"/>
  <ellipse cx="70" cy="140" rx="28" ry="15"/>
  <ellipse cx="210" cy="140" rx="28" ry="15"/>
  <ellipse cx="115" cy="115" rx="22" ry="15" transform="rotate(-45 115 115)"/>
  <ellipse cx="165" cy="115" rx="22" ry="15" transform="rotate(45 165 115)"/>
  <ellipse cx="115" cy="165" rx="22" ry="15" transform="rotate(45 115 165)"/>
  <ellipse cx="165" cy="165" rx="22" ry="15" transform="rotate(-45 165 165)"/>
  <ellipse cx="95" cy="100" rx="15" ry="22" transform="rotate(-30 95 100)"/>
  <ellipse cx="185" cy="100" rx="15" ry="22" transform="rotate(30 185 100)"/>
  <ellipse cx="95" cy="180" rx="15" ry="22" transform="rotate(30 95 180)"/>
  <ellipse cx="185" cy="180" rx="15" ry="22" transform="rotate(-30 185 180)"/>
  <circle cx="130" cy="130" r="2.5"/>
  <circle cx="145" cy="130" r="2.5"/>
  <circle cx="135" cy="142" r="2.5"/>
  <circle cx="148" cy="143" r="2.5"/>
  <circle cx="125" cy="142" r="2.5"/>
  <circle cx="138" cy="155" r="2.5"/>
  <circle cx="150" cy="155" r="2.5"/>
  <circle cx="128" cy="155" r="2.5"/>
  <circle cx="143" cy="125" r="2.5"/>
  <circle cx="155" cy="138" r="2.5"/>
  <circle cx="120" cy="135" r="2.5"/>
  <circle cx="145" cy="148" r="2.5"/>
  <path d="M140,178 Q138,250 142,340" stroke-width="2.5"/>
  <path d="M141,215 Q120,210 105,225 Q125,232 142,225" />
  <path d="M141,265 Q165,260 180,275 Q160,282 142,275" />
  <circle cx="275" cy="200" r="28"/>
  <ellipse cx="275" cy="172" rx="12" ry="22"/>
  <ellipse cx="275" cy="228" rx="12" ry="22"/>
  <ellipse cx="247" cy="200" rx="22" ry="12"/>
  <ellipse cx="303" cy="200" rx="22" ry="12"/>
  <ellipse cx="255" cy="180" rx="18" ry="12" transform="rotate(-45 255 180)"/>
  <ellipse cx="295" cy="180" rx="18" ry="12" transform="rotate(45 295 180)"/>
  <ellipse cx="255" cy="220" rx="18" ry="12" transform="rotate(45 255 220)"/>
  <ellipse cx="295" cy="220" rx="18" ry="12" transform="rotate(-45 295 220)"/>
  <circle cx="268" cy="192" r="2"/>
  <circle cx="278" cy="192" r="2"/>
  <circle cx="273" cy="200" r="2"/>
  <circle cx="283" cy="200" r="2"/>
  <circle cx="263" cy="200" r="2"/>
  <circle cx="268" cy="208" r="2"/>
  <circle cx="278" cy="208" r="2"/>
  <path d="M275,228 Q273,290 277,340" stroke-width="2.5"/>
  <path d="M276,255 Q298,250 312,265 Q292,272 277,265" />
  <path d="M276,295 Q254,290 240,305 Q260,312 278,305" />
  <circle cx="60" cy="270" r="22"/>
  <ellipse cx="60" cy="250" rx="10" ry="16"/>
  <ellipse cx="60" cy="290" rx="10" ry="16"/>
  <ellipse cx="40" cy="270" rx="16" ry="10"/>
  <ellipse cx="80" cy="270" rx="16" ry="10"/>
  <circle cx="55" cy="265" r="1.8"/>
  <circle cx="63" cy="265" r="1.8"/>
  <circle cx="58" cy="272" r="1.8"/>
  <circle cx="65" cy="272" r="1.8"/>
  <path d="M60,292 Q58,330 62,360" stroke-width="2"/>
  <path d="M61,315 Q48,312 40,322 Q52,328 62,322"/>
  <path d="M40,365 Q200,360 380,365" stroke-width="2"/>
  <path d="M50,365 Q55,355 60,365 Q65,355 70,365" stroke-width="1.5"/>
  <path d="M120,360 Q125,350 130,360 Q135,350 140,360" stroke-width="1.5"/>
  <path d="M200,365 Q205,355 210,365 Q215,355 220,365" stroke-width="1.5"/>
  <path d="M310,360 Q315,350 320,360 Q325,350 330,360" stroke-width="1.5"/>
  <circle cx="340" cy="60" r="20"/>
  <path d="M340,30 L340,15 M340,90 L340,105 M310,60 L295,60 M370,60 L385,60 M320,40 L310,30 M360,40 L370,30 M320,80 L310,90 M360,80 L370,90" stroke-width="1.5"/>
`);

// ============ 6. RAINBOW & CLOUDS ============
const rainbow = wrap(`
  <path d="M50,260 A150,150 0 0 1 350,260" stroke-width="3"/>
  <path d="M65,260 A135,135 0 0 1 335,260" stroke-width="2"/>
  <path d="M80,260 A120,120 0 0 1 320,260" stroke-width="2"/>
  <path d="M95,260 A105,105 0 0 1 305,260" stroke-width="2"/>
  <path d="M110,260 A90,90 0 0 1 290,260" stroke-width="2"/>
  <path d="M125,260 A75,75 0 0 1 275,260" stroke-width="2"/>
  <path d="M140,260 A60,60 0 0 1 260,260" stroke-width="2"/>
  <path d="M40,265 C20,265 15,245 30,235 C20,220 35,205 50,212 C55,195 80,195 88,210 C100,200 120,210 118,225 C130,228 130,248 115,255 C110,265 60,265 40,265 Z"/>
  <path d="M55,238 Q65,232 75,238" stroke-width="1.5"/>
  <path d="M80,250 Q95,242 105,250" stroke-width="1.5"/>
  <path d="M360,265 C380,265 385,245 370,235 C380,220 365,205 350,212 C345,195 320,195 312,210 C300,200 280,210 282,225 C270,228 270,248 285,255 C290,265 340,265 360,265 Z"/>
  <path d="M325,238 Q335,232 345,238" stroke-width="1.5"/>
  <path d="M295,250 Q310,242 320,250" stroke-width="1.5"/>
  <path d="M170,335 C155,335 148,322 158,313 C150,300 165,288 178,295 C183,282 205,282 212,295 C225,288 240,300 232,313 C242,322 235,335 220,335 Z"/>
  <path d="M180,318 Q190,312 200,318" stroke-width="1.5"/>
  <circle cx="80" cy="80" r="18"/>
  <path d="M80,55 L80,40 M80,105 L80,120 M55,80 L40,80 M105,80 L120,80 M62,62 L52,52 M98,62 L108,52 M62,98 L52,108 M98,98 L108,108" stroke-width="2"/>
  <circle cx="75" cy="76" r="2"/>
  <circle cx="85" cy="76" r="2"/>
  <path d="M75,86 Q80,90 85,86" stroke-width="1.5"/>
  <path d="M300,90 L295,100 L305,100 Z" stroke-width="1.5"/>
  <path d="M310,75 L305,85 L315,85 Z" stroke-width="1.5"/>
  <path d="M320,95 L315,105 L325,105 Z" stroke-width="1.5"/>
  <path d="M295,110 L290,120 L300,120 Z" stroke-width="1.5"/>
  <path d="M40,378 Q200,374 380,378" stroke-width="2"/>
  <path d="M60,370 L55,378 M80,372 L75,378 M120,372 L115,378 M160,370 L155,378 M250,372 L245,378 M290,370 L285,378 M330,372 L325,378" stroke-width="1.5"/>
`);

// ============ 7. CAR ============
const car = wrap(`
  <path d="M60,260 L60,220 C60,210 65,205 75,205 L110,205 L140,150 C145,142 152,138 162,138 L260,138 C270,138 278,143 282,152 L305,205 L335,205 C345,205 350,210 350,220 L350,260 C350,268 345,272 338,272 L320,272 C315,290 295,295 285,272 L130,272 C125,290 105,295 95,272 L72,272 C65,272 60,268 60,260 Z"/>
  <path d="M150,205 L165,160 C167,153 173,150 180,150 L210,150 L210,205 Z"/>
  <path d="M215,150 L250,150 C257,150 263,153 265,160 L280,205 L215,205 Z"/>
  <path d="M210,150 L210,205" stroke-width="2"/>
  <path d="M170,170 L195,170 M170,180 L195,180 M170,190 L195,190" stroke-width="1"/>
  <path d="M230,170 L260,170 M230,180 L262,180 M230,190 L264,190" stroke-width="1"/>
  <circle cx="110" cy="272" r="28"/>
  <circle cx="110" cy="272" r="18"/>
  <circle cx="110" cy="272" r="6"/>
  <path d="M110,254 L110,290 M92,272 L128,272 M97,259 L123,285 M97,285 L123,259" stroke-width="1.5"/>
  <circle cx="305" cy="272" r="28"/>
  <circle cx="305" cy="272" r="18"/>
  <circle cx="305" cy="272" r="6"/>
  <path d="M305,254 L305,290 M287,272 L323,272 M292,259 L318,285 M292,285 L318,259" stroke-width="1.5"/>
  <path d="M75,225 L100,225 L100,245 L75,245 Z"/>
  <circle cx="87" cy="235" r="5"/>
  <path d="M310,225 L335,225 L335,245 L310,245 Z"/>
  <circle cx="322" cy="235" r="5"/>
  <path d="M70,232 L60,232" stroke-width="2"/>
  <path d="M340,232 L350,232" stroke-width="2"/>
  <path d="M155,225 L175,225 L175,240 L155,240 Z"/>
  <path d="M225,225 L290,225 L290,240 L225,240 Z"/>
  <path d="M235,231 L280,231" stroke-width="1"/>
  <path d="M60,240 L350,240" stroke-width="1.5"/>
  <path d="M140,150 L140,140 M260,138 L265,128" stroke-width="1.5"/>
  <circle cx="195" cy="232" r="3"/>
  <path d="M105,205 L105,140 C105,135 110,132 116,135 L138,148" stroke-width="1"/>
  <path d="M40,300 Q200,295 380,300" stroke-width="2"/>
  <path d="M40,310 L80,310 M100,310 L130,310 M150,310 L190,310 M210,310 L240,310 M260,310 L290,310 M310,310 L350,310" stroke-width="2"/>
  <circle cx="60" cy="80" r="15"/>
  <path d="M60,60 L60,50 M60,100 L60,110 M40,80 L30,80 M80,80 L90,80 M46,66 L40,60 M74,66 L80,60 M46,94 L40,100 M74,94 L80,100" stroke-width="1.5"/>
  <path d="M280,70 Q300,60 320,70 Q335,60 350,70 Q345,80 325,78 Q305,82 285,78 Z"/>
`);

// ============ 8. SHIP ============
const ship = wrap(`
  <path d="M50,290 L350,290 L320,340 L80,340 Z"/>
  <path d="M50,290 L350,290" stroke-width="2"/>
  <ellipse cx="75" cy="298" rx="8" ry="5"/>
  <ellipse cx="105" cy="298" rx="8" ry="5"/>
  <ellipse cx="135" cy="298" rx="8" ry="5"/>
  <ellipse cx="165" cy="298" rx="8" ry="5"/>
  <ellipse cx="195" cy="298" rx="8" ry="5"/>
  <ellipse cx="225" cy="298" rx="8" ry="5"/>
  <ellipse cx="255" cy="298" rx="8" ry="5"/>
  <ellipse cx="285" cy="298" rx="8" ry="5"/>
  <ellipse cx="315" cy="298" rx="8" ry="5"/>
  <path d="M90,290 L90,240 L310,240 L310,290 Z"/>
  <rect x="110" y="250" width="25" height="25" rx="3"/>
  <rect x="150" y="250" width="25" height="25" rx="3"/>
  <rect x="190" y="250" width="25" height="25" rx="3"/>
  <rect x="230" y="250" width="25" height="25" rx="3"/>
  <rect x="270" y="250" width="25" height="25" rx="3"/>
  <path d="M110,262 L135,262 M122,250 L122,275" stroke-width="1"/>
  <path d="M150,262 L175,262 M162,250 L162,275" stroke-width="1"/>
  <path d="M190,262 L215,262 M202,250 L202,275" stroke-width="1"/>
  <path d="M230,262 L255,262 M242,250 L242,275" stroke-width="1"/>
  <path d="M270,262 L295,262 M282,250 L282,275" stroke-width="1"/>
  <path d="M140,240 L140,195 L260,195 L260,240 Z"/>
  <rect x="155" y="208" width="20" height="22" rx="2"/>
  <rect x="190" y="208" width="20" height="22" rx="2"/>
  <rect x="225" y="208" width="20" height="22" rx="2"/>
  <path d="M155,218 L175,218 M165,208 L165,230" stroke-width="1"/>
  <path d="M190,218 L210,218 M200,208 L200,230" stroke-width="1"/>
  <path d="M225,218 L245,218 M235,208 L235,230" stroke-width="1"/>
  <rect x="190" y="155" width="20" height="40"/>
  <path d="M195,170 L205,170 M195,180 L205,180" stroke-width="1.5"/>
  <ellipse cx="200" cy="150" rx="12" ry="5"/>
  <path d="M200,145 L200,80" stroke-width="2"/>
  <path d="M200,80 L260,95 L200,110 Z"/>
  <path d="M225,87 L225,103" stroke-width="1"/>
  <path d="M240,91 L240,99" stroke-width="1"/>
  <ellipse cx="200" cy="80" rx="3" ry="3"/>
  <circle cx="170" cy="155" r="10"/>
  <path d="M170,145 L170,135" stroke-width="2"/>
  <path d="M230,165 L230,155" stroke-width="2"/>
  <rect x="226" y="142" width="8" height="13"/>
  <path d="M30,340 Q60,335 90,340 Q120,345 150,340 Q180,335 210,340 Q240,345 270,340 Q300,335 330,340 Q360,345 380,340" stroke-width="2"/>
  <path d="M30,355 Q60,350 90,355 Q120,360 150,355 Q180,350 210,355 Q240,360 270,355 Q300,350 330,355 Q360,360 380,355" stroke-width="2"/>
  <path d="M30,370 Q60,365 90,370 Q120,375 150,370 Q180,365 210,370 Q240,375 270,370 Q300,365 330,370 Q360,375 380,370" stroke-width="2"/>
  <circle cx="335" cy="70" r="22"/>
  <path d="M335,40 L335,25 M335,100 L335,115 M305,70 L290,70 M365,70 L380,70 M315,50 L305,40 M355,50 L365,40 M315,90 L305,100 M355,90 L365,100" stroke-width="1.5"/>
  <path d="M70,60 Q80,55 90,60 Q100,55 110,60 Q105,70 90,68 Q75,72 65,68 Z"/>
  <path d="M120,90 Q130,85 140,90 Q150,85 160,90 Q155,100 140,98 Q125,102 115,98 Z"/>
`);

// ============ 9. HOUSE ============
const house = wrap(`
  <path d="M70,210 L200,90 L330,210 Z"/>
  <path d="M70,210 L80,210 L200,103 L320,210 L330,210" stroke-width="1"/>
  <path d="M70,210 L200,90 L200,210 Z" fill="white"/>
  <path d="M85,210 L195,118 M100,210 L195,128 M115,210 L195,138 M130,210 L195,148 M145,210 L195,158 M160,210 L195,168 M175,210 L195,178 M190,210 L195,188" stroke-width="1"/>
  <path d="M205,118 L320,210 M205,128 L320,210 M205,138 L320,210 M205,148 L320,210 M205,158 L320,210 M205,168 L320,210 M205,178 L320,210 M205,188 L320,210" stroke-width="1"/>
  <path d="M250,140 L250,90 L275,90 L275,160 Z"/>
  <path d="M85,210 L85,340 L315,340 L315,210" />
  <path d="M85,225 L315,225" stroke-width="1.5"/>
  <path d="M95,225 L95,245 L115,245 L115,225 M125,225 L125,245 L145,245 L145,225 M155,225 L155,245 L175,245 L175,225 M225,225 L225,245 L245,245 L245,225 M255,225 L255,245 L275,245 L275,225 M285,225 L285,245 L305,245 L305,225" stroke-width="1"/>
  <path d="M85,260 L315,260" stroke-width="1.5"/>
  <path d="M95,260 L95,280 L115,280 L115,260 M125,260 L145,260 L145,280 L125,280 M155,260 L175,260 L175,280 L155,280 M225,260 L245,260 L245,280 L225,280 M255,260 L275,260 L275,280 L255,280 M285,260 L305,260 L305,280 L285,280" stroke-width="1"/>
  <path d="M85,295 L315,295" stroke-width="1.5"/>
  <path d="M85,330 L315,330" stroke-width="1.5"/>
  <path d="M100,295 L100,330 L120,330 L120,295 M130,295 L150,295 L150,330 L130,330 M230,295 L250,295 L250,330 L230,330 M260,295 L280,295 L280,330 L260,330 M290,295 L310,295 L310,330 L290,330" stroke-width="1"/>
  <path d="M170,340 L170,265 L230,265 L230,340 Z"/>
  <path d="M170,303 L230,303" stroke-width="1.5"/>
  <path d="M200,265 L200,340" stroke-width="1.5"/>
  <circle cx="220" cy="305" r="2"/>
  <path d="M115,165 L155,165 L155,205 L115,205 Z"/>
  <path d="M115,185 L155,185 M135,165 L135,205" stroke-width="1"/>
  <path d="M110,165 L160,165 L160,160 L110,160 Z"/>
  <path d="M245,165 L285,165 L285,205 L245,205 Z"/>
  <path d="M245,185 L285,185 M265,165 L265,205" stroke-width="1"/>
  <path d="M240,165 L290,165 L290,160 L240,160 Z"/>
  <path d="M50,340 Q200,335 380,340" stroke-width="2"/>
  <path d="M40,355 Q60,345 70,355 M85,350 Q95,340 105,350 M340,355 Q350,345 360,355" stroke-width="1.5"/>
  <path d="M50,350 L50,375 M55,355 L55,375 M60,358 L60,375" stroke-width="1.5"/>
  <path d="M340,350 L340,375 M345,355 L345,375 M350,358 L350,375" stroke-width="1.5"/>
  <circle cx="65" cy="70" r="18"/>
  <path d="M65,45 L65,35 M65,95 L65,105 M40,70 L30,70 M90,70 L100,70 M47,52 L40,45 M83,52 L90,45 M47,88 L40,95 M83,88 L90,95" stroke-width="1.5"/>
  <path d="M260,55 Q280,45 300,55 Q315,45 335,55 Q325,68 305,65 Q285,70 265,65 Z"/>
  <path d="M150,40 Q165,32 180,40 Q190,32 200,40 Q190,52 175,50 Q160,52 145,50 Z"/>
  <path d="M180,80 L180,75 Q180,70 185,72 L185,85 Z"/>
  <path d="M183,70 Q188,65 192,72 Q190,78 185,75" stroke-width="1.5"/>
`);

// ============ 10. EID STAR & MOON ============
const eid = wrap(`
  <path d="M260,80 C220,80 188,112 188,152 C188,192 220,224 260,224 C235,210 218,182 218,152 C218,122 235,94 260,80 Z"/>
  <circle cx="225" cy="120" r="3"/>
  <circle cx="222" cy="155" r="3"/>
  <circle cx="228" cy="185" r="3"/>
  <path d="M120,140 L132,170 L165,170 L138,190 L148,222 L120,202 L92,222 L102,190 L75,170 L108,170 Z"/>
  <circle cx="120" cy="186" r="6"/>
  <path d="M120,170 L120,202 M105,186 L135,186" stroke-width="1"/>
  <path d="M70,260 L78,278 L98,280 L83,294 L87,314 L70,304 L53,314 L57,294 L42,280 L62,278 Z"/>
  <path d="M330,260 L338,278 L358,280 L343,294 L347,314 L330,304 L313,314 L317,294 L302,280 L322,278 Z"/>
  <path d="M310,140 L315,152 L328,154 L319,163 L321,176 L310,170 L299,176 L301,163 L292,154 L305,152 Z"/>
  <path d="M50,180 L55,192 L68,194 L59,203 L61,216 L50,210 L39,216 L41,203 L32,194 L45,192 Z"/>
  <path d="M350,200 L355,212 L368,214 L359,223 L361,236 L350,230 L339,236 L341,223 L332,214 L345,212 Z"/>
  <circle cx="40" cy="80" r="3"/>
  <circle cx="80" cy="60" r="2.5"/>
  <circle cx="160" cy="50" r="3"/>
  <circle cx="350" cy="60" r="2.5"/>
  <circle cx="370" cy="120" r="3"/>
  <circle cx="30" cy="240" r="3"/>
  <circle cx="200" cy="270" r="2.5"/>
  <path d="M40,340 L60,340 L60,360 L100,360 L100,340 L140,340 L140,320 L180,320 L180,340 L220,340 L220,310 L260,310 L260,340 L300,340 L300,360 L340,360 L340,340 L370,340" stroke-width="2"/>
  <rect x="105" y="345" width="8" height="15"/>
  <rect x="185" y="325" width="8" height="15"/>
  <rect x="225" y="320" width="8" height="20"/>
  <rect x="265" y="325" width="8" height="15"/>
  <rect x="115" y="345" width="6" height="15"/>
  <rect x="155" y="345" width="8" height="15"/>
  <path d="M225,310 L225,295 M225,300 Q235,295 245,302" stroke-width="1.5"/>
  <path d="M30,375 L370,375" stroke-width="2"/>
  <path d="M195,228 Q200,235 205,228 M180,238 Q190,248 200,242" stroke-width="1"/>
`);

// ============ 11. BIRTHDAY CAKE ============
const cake = wrap(`
  <path d="M90,320 L310,320 L310,260 L90,260 Z"/>
  <path d="M90,272 Q110,262 130,272 Q150,282 170,272 Q190,262 210,272 Q230,282 250,272 Q270,262 290,272 Q305,278 310,272" stroke-width="2"/>
  <circle cx="115" cy="295" r="4"/>
  <circle cx="155" cy="300" r="4"/>
  <circle cx="195" cy="293" r="4"/>
  <circle cx="235" cy="302" r="4"/>
  <circle cx="275" cy="295" r="4"/>
  <path d="M115,295 L115,318 M155,300 L155,318 M195,293 L195,318 M235,302 L235,318 M275,295 L275,318" stroke-width="1"/>
  <path d="M110,260 L290,260 L290,200 L110,200 Z"/>
  <path d="M110,212 Q130,202 150,212 Q170,222 190,212 Q210,202 230,212 Q250,222 270,212 Q283,218 290,214" stroke-width="2"/>
  <circle cx="135" cy="235" r="3.5"/>
  <circle cx="170" cy="240" r="3.5"/>
  <circle cx="205" cy="233" r="3.5"/>
  <circle cx="240" cy="242" r="3.5"/>
  <circle cx="270" cy="235" r="3.5"/>
  <path d="M130,200 L270,200 L270,150 L130,150 Z"/>
  <path d="M130,162 Q145,152 160,162 Q175,172 190,162 Q205,152 220,162 Q235,172 250,162 Q263,168 270,164" stroke-width="2"/>
  <circle cx="155" cy="180" r="3"/>
  <circle cx="185" cy="185" r="3"/>
  <circle cx="215" cy="180" r="3"/>
  <circle cx="245" cy="185" r="3"/>
  <rect x="160" y="100" width="8" height="50" rx="2"/>
  <path d="M164,100 L164,80 Q164,70 158,68 Q160,75 164,82" stroke-width="2"/>
  <rect x="196" y="90" width="8" height="60" rx="2"/>
  <path d="M200,90 L200,68 Q200,58 194,56 Q196,63 200,70" stroke-width="2"/>
  <rect x="232" y="100" width="8" height="50" rx="2"/>
  <path d="M236,100 L236,80 Q236,70 230,68 Q232,75 236,82" stroke-width="2"/>
  <path d="M158,82 C152,75 158,65 162,65" stroke-width="1.5"/>
  <path d="M170,82 C176,75 170,65 166,65" stroke-width="1.5"/>
  <path d="M194,70 C188,63 194,53 198,53" stroke-width="1.5"/>
  <path d="M206,70 C212,63 206,53 202,53" stroke-width="1.5"/>
  <path d="M230,82 C224,75 230,65 234,65" stroke-width="1.5"/>
  <path d="M242,82 C248,75 242,65 238,65" stroke-width="1.5"/>
  <path d="M70,335 L330,335" stroke-width="2"/>
  <path d="M90,335 L90,355 L310,355 L310,335" />
  <path d="M70,355 L330,355" stroke-width="2"/>
  <circle cx="60" cy="240" r="6"/>
  <path d="M60,234 L60,222 M60,246 L60,258 M54,240 L42,240 M66,240 L78,240" stroke-width="1.5"/>
  <circle cx="340" cy="220" r="6"/>
  <path d="M340,214 L340,202 M340,226 L340,238 M334,220 L322,220 M346,220 L358,220" stroke-width="1.5"/>
  <path d="M50,300 L60,295 L58,305 Z"/>
  <path d="M340,290 L350,285 L348,295 Z"/>
  <path d="M30,180 L42,180 L40,170 M40,170 L48,180" stroke-width="1.5"/>
  <path d="M30,180 L42,180 Q42,190 36,192 L36,200 M34,200 L38,200" stroke-width="1.5"/>
  <path d="M40,378 L360,378" stroke-width="2"/>
`);

// ============ 12. ROCKET ============
const rocket = wrap(`
  <path d="M200,40 C175,70 158,110 155,160 L155,260 L245,260 L245,160 C242,110 225,70 200,40 Z"/>
  <path d="M155,180 L245,180" stroke-width="1.5"/>
  <path d="M155,220 L245,220" stroke-width="1.5"/>
  <circle cx="200" cy="135" r="22"/>
  <circle cx="200" cy="135" r="15"/>
  <path d="M190,128 Q195,123 200,127" stroke-width="1.5"/>
  <circle cx="180" cy="200" r="6"/>
  <circle cx="220" cy="200" r="6"/>
  <circle cx="180" cy="240" r="6"/>
  <circle cx="220" cy="240" r="6"/>
  <path d="M155,210 L100,250 L100,290 L155,265 Z"/>
  <path d="M155,210 L130,228" stroke-width="1.5"/>
  <path d="M245,210 L300,250 L300,290 L245,265 Z"/>
  <path d="M245,210 L270,228" stroke-width="1.5"/>
  <path d="M155,260 L155,300 L245,300 L245,260" />
  <path d="M170,260 L170,300 M185,260 L185,300 M200,260 L200,300 M215,260 L215,300 M230,260 L230,300" stroke-width="1"/>
  <path d="M170,305 Q175,330 168,355 Q180,340 178,330 Q188,355 185,365 Q195,335 200,360 Q205,335 215,365 Q212,355 222,330 Q220,340 232,355 Q225,330 230,305" />
  <path d="M180,315 Q183,330 178,345" stroke-width="1.5"/>
  <path d="M200,315 Q200,335 200,350" stroke-width="1.5"/>
  <path d="M220,315 Q217,330 222,345" stroke-width="1.5"/>
  <circle cx="60" cy="60" r="2"/>
  <circle cx="100" cy="100" r="2.5"/>
  <circle cx="340" cy="80" r="2"/>
  <circle cx="310" cy="50" r="2.5"/>
  <circle cx="70" cy="180" r="2"/>
  <circle cx="40" cy="240" r="2.5"/>
  <circle cx="350" cy="200" r="2"/>
  <circle cx="370" cy="160" r="2.5"/>
  <path d="M55,90 L55,110 M45,100 L65,100" stroke-width="1.5"/>
  <path d="M345,140 L345,160 M335,150 L355,150" stroke-width="1.5"/>
  <path d="M85,260 L85,280 M75,270 L95,270" stroke-width="1.5"/>
  <path d="M325,260 L325,280 M315,270 L335,270" stroke-width="1.5"/>
  <circle cx="320" cy="120" r="18"/>
  <circle cx="313" cy="115" r="3"/>
  <circle cx="328" cy="125" r="2"/>
  <circle cx="320" cy="128" r="2.5"/>
  <circle cx="60" cy="320" r="14"/>
  <circle cx="55" cy="316" r="2.5"/>
  <circle cx="65" cy="325" r="2"/>
  <path d="M40,378 L360,378" stroke-width="2"/>
`);

// ============ 13. TEDDY BEAR ============
const teddy = wrap(`
  <circle cx="200" cy="140" r="75"/>
  <circle cx="135" cy="95" r="22"/>
  <circle cx="135" cy="95" r="12"/>
  <circle cx="265" cy="95" r="22"/>
  <circle cx="265" cy="95" r="12"/>
  <ellipse cx="180" cy="135" rx="8" ry="10"/>
  <ellipse cx="220" cy="135" rx="8" ry="10"/>
  <circle cx="180" cy="135" r="3"/>
  <circle cx="220" cy="135" r="3"/>
  <circle cx="178" cy="132" r="1.5"/>
  <circle cx="218" cy="132" r="1.5"/>
  <ellipse cx="200" cy="165" rx="14" ry="10"/>
  <ellipse cx="200" cy="160" rx="9" ry="6"/>
  <path d="M200,175 L200,185" stroke-width="1.5"/>
  <path d="M200,185 Q190,193 185,188" stroke-width="1.5"/>
  <path d="M200,185 Q210,193 215,188" stroke-width="1.5"/>
  <path d="M120,130 Q125,115 145,113" stroke-width="1"/>
  <path d="M280,130 Q275,115 255,113" stroke-width="1"/>
  <path d="M150,170 Q160,178 170,170" stroke-width="1"/>
  <path d="M250,170 Q240,178 230,170" stroke-width="1"/>
  <ellipse cx="200" cy="280" rx="80" ry="75"/>
  <ellipse cx="200" cy="285" rx="50" ry="48"/>
  <path d="M200,240 Q170,245 165,265" stroke-width="1"/>
  <path d="M200,240 Q230,245 235,265" stroke-width="1"/>
  <path d="M165,310 Q200,320 235,310" stroke-width="1"/>
  <ellipse cx="125" cy="245" rx="22" ry="35" transform="rotate(-25 125 245)"/>
  <ellipse cx="275" cy="245" rx="22" ry="35" transform="rotate(25 275 245)"/>
  <ellipse cx="115" cy="225" rx="10" ry="8" transform="rotate(-25 115 225)"/>
  <ellipse cx="285" cy="225" rx="10" ry="8" transform="rotate(25 285 225)"/>
  <ellipse cx="150" cy="355" rx="32" ry="22"/>
  <ellipse cx="250" cy="355" rx="32" ry="22"/>
  <ellipse cx="140" cy="345" rx="14" ry="10"/>
  <ellipse cx="260" cy="345" rx="14" ry="10"/>
  <circle cx="130" cy="343" r="3"/>
  <circle cx="142" cy="350" r="3"/>
  <circle cx="135" cy="355" r="3"/>
  <circle cx="270" cy="343" r="3"/>
  <circle cx="258" cy="350" r="3"/>
  <circle cx="265" cy="355" r="3"/>
  <path d="M170,210 L170,245 L230,245 L230,210" stroke-width="1.5"/>
  <circle cx="185" cy="225" r="3"/>
  <circle cx="215" cy="225" r="3"/>
  <path d="M170,245 L150,255 M230,245 L250,255" stroke-width="1.5"/>
  <path d="M158,162 Q145,168 142,180" stroke-width="0.8"/>
  <path d="M242,162 Q255,168 258,180" stroke-width="0.8"/>
  <path d="M155,195 Q155,205 160,210" stroke-width="0.8"/>
  <path d="M245,195 Q245,205 240,210" stroke-width="0.8"/>
  <path d="M40,378 L360,378" stroke-width="2"/>
`);

// ============ 14. FISH ============
const fish = wrap(`
  <path d="M100,200 C100,150 150,115 220,115 C280,115 320,150 325,200 C320,250 280,285 220,285 C150,285 100,250 100,200 Z"/>
  <path d="M100,200 L50,150 L60,200 L50,250 Z"/>
  <path d="M55,180 L80,195" stroke-width="1"/>
  <path d="M55,200 L80,200" stroke-width="1"/>
  <path d="M55,220 L80,205" stroke-width="1"/>
  <circle cx="270" cy="175" r="14"/>
  <circle cx="270" cy="175" r="7"/>
  <circle cx="267" cy="172" r="2.5"/>
  <path d="M295,200 Q310,205 310,215" stroke-width="1.5"/>
  <path d="M295,200 Q310,195 310,185" stroke-width="1.5"/>
  <path d="M155,150 L150,115 L175,135 Z"/>
  <path d="M160,138 L160,128" stroke-width="1"/>
  <path d="M155,250 L150,285 L175,265 Z"/>
  <path d="M160,262 L160,272" stroke-width="1"/>
  <path d="M195,265 L200,295 L215,265" stroke-width="1.5"/>
  <path d="M115,225 L80,260 Q110,245 130,250" stroke-width="1.5"/>
  <ellipse cx="135" cy="190" rx="8" ry="14" transform="rotate(-15 135 190)"/>
  <ellipse cx="150" cy="200" rx="8" ry="14" transform="rotate(-10 150 200)"/>
  <ellipse cx="165" cy="210" rx="8" ry="14" transform="rotate(-5 165 210)"/>
  <ellipse cx="180" cy="195" rx="8" ry="14" transform="rotate(-10 180 195)"/>
  <ellipse cx="195" cy="180" rx="8" ry="14" transform="rotate(-15 195 180)"/>
  <ellipse cx="210" cy="195" rx="8" ry="14" transform="rotate(-5 210 195)"/>
  <ellipse cx="225" cy="210" rx="8" ry="14"/>
  <ellipse cx="240" cy="200" rx="8" ry="14" transform="rotate(5 240 200)"/>
  <ellipse cx="195" cy="225" rx="8" ry="14" transform="rotate(-5 195 225)"/>
  <ellipse cx="210" cy="240" rx="8" ry="14"/>
  <ellipse cx="180" cy="240" rx="8" ry="14"/>
  <ellipse cx="225" cy="170" rx="8" ry="14"/>
  <ellipse cx="240" cy="160" rx="8" ry="14" transform="rotate(5 240 160)"/>
  <ellipse cx="195" cy="160" rx="8" ry="14" transform="rotate(-10 195 160)"/>
  <ellipse cx="180" cy="160" rx="8" ry="14" transform="rotate(-15 180 160)"/>
  <ellipse cx="225" cy="245" rx="8" ry="14" transform="rotate(5 225 245)"/>
  <path d="M255,210 L255,235" stroke-width="1.5"/>
  <path d="M285,225 L290,250" stroke-width="1.5"/>
  <circle cx="60" cy="80" r="6"/>
  <circle cx="100" cy="60" r="5"/>
  <circle cx="340" cy="100" r="6"/>
  <circle cx="320" cy="60" r="5"/>
  <circle cx="50" cy="330" r="6"/>
  <circle cx="350" cy="320" r="5"/>
  <path d="M40,378 Q200,374 380,378" stroke-width="2"/>
  <path d="M40,355 Q200,350 380,355" stroke-width="1.5"/>
  <path d="M40,365 Q200,360 380,365" stroke-width="1"/>
  <path d="M70,340 Q72,360 70,378" stroke-width="2"/>
  <path d="M70,340 L65,350 M70,345 L78,355" stroke-width="1.5"/>
  <path d="M320,335 Q322,360 320,378" stroke-width="2"/>
  <path d="M320,335 L325,348 M320,342 L313,352" stroke-width="1.5"/>
`);

// ============ 15. BOAT (Village) ============
const boat = wrap(`
  <path d="M60,290 C90,330 310,330 340,290 L320,275 L80,275 Z"/>
  <path d="M80,275 L320,275" stroke-width="2"/>
  <path d="M90,285 L310,285" stroke-width="1"/>
  <path d="M100,295 L300,295" stroke-width="1"/>
  <path d="M115,275 L115,255 L285,255 L285,275 Z"/>
  <path d="M130,255 L130,275 M155,255 L155,275 M180,255 L180,275 M220,255 L220,275 M245,255 L245,275 M270,255 L270,275" stroke-width="1"/>
  <path d="M200,255 L200,90" stroke-width="2.5"/>
  <path d="M203,95 L290,160 L203,180 Z"/>
  <path d="M225,118 L225,165" stroke-width="1"/>
  <path d="M250,138 L250,170" stroke-width="1"/>
  <path d="M270,150 L270,172" stroke-width="1"/>
  <path d="M197,95 L110,160 L197,180 Z"/>
  <path d="M175,118 L175,165" stroke-width="1"/>
  <path d="M150,138 L150,170" stroke-width="1"/>
  <path d="M130,150 L130,172" stroke-width="1"/>
  <path d="M196,200 L120,250" stroke-width="1.5"/>
  <path d="M204,200 L280,250" stroke-width="1.5"/>
  <circle cx="200" cy="85" r="6"/>
  <path d="M200,79 L200,72 Q205,72 205,80" stroke-width="1.5"/>
  <path d="M205,75 L215,72" stroke-width="1.5"/>
  <path d="M335,290 L370,255" stroke-width="2"/>
  <path d="M370,250 L385,255 L380,265 L370,260 Z"/>
  <path d="M0,335 Q40,330 80,335 Q120,340 160,335 Q200,330 240,335 Q280,340 320,335 Q360,330 400,335" stroke-width="2"/>
  <path d="M0,350 Q40,345 80,350 Q120,355 160,350 Q200,345 240,350 Q280,355 320,350 Q360,345 400,350" stroke-width="2"/>
  <path d="M0,365 Q40,360 80,365 Q120,370 160,365 Q200,360 240,365 Q280,370 320,365 Q360,360 400,365" stroke-width="2"/>
  <path d="M30,378 Q60,374 90,378 Q120,382 150,378" stroke-width="2"/>
  <path d="M250,378 Q280,374 310,378 Q340,382 370,378" stroke-width="2"/>
  <circle cx="60" cy="80" r="20"/>
  <path d="M60,50 L60,35 M60,100 L60,115 M30,80 L15,80 M90,80 L105,80 M40,60 L30,50 M80,60 L90,50 M40,100 L30,110 M80,100 L90,110" stroke-width="1.5"/>
  <path d="M260,50 Q280,40 300,50 Q320,40 340,50 Q330,65 310,62 Q290,68 270,62 Z"/>
  <path d="M110,70 Q125,62 140,70 Q150,62 165,70 Q155,82 140,80 Q125,82 110,80 Z"/>
  <path d="M60,180 Q70,175 80,180" stroke-width="1.5"/>
  <path d="M60,180 L60,210 Q65,215 75,215 L80,215 L80,180" />
  <path d="M68,180 L68,215" stroke-width="1"/>
  <ellipse cx="50" cy="180" rx="8" ry="4"/>
  <path d="M320,180 Q330,175 340,180" stroke-width="1.5"/>
  <path d="M320,180 L320,210 Q325,215 335,215 L340,215 L340,180" />
  <path d="M328,180 L328,215" stroke-width="1"/>
  <ellipse cx="310" cy="180" rx="8" ry="4"/>
`);

// ============ 16. DINOSAUR ============
const dino = wrap(`
  <path d="M70,260 C50,255 38,235 50,215 C65,200 90,202 105,218 C120,200 145,195 170,200 C195,180 225,175 250,185 C275,170 310,178 320,205 C340,220 345,245 330,265 C340,290 320,310 295,308 C285,325 260,332 240,320 C220,335 190,335 175,320 C150,330 120,325 105,308 C85,318 60,308 55,290 C45,278 50,265 70,260 Z"/>
  <path d="M50,215 Q45,210 50,205" stroke-width="1.5"/>
  <path d="M65,205 Q60,200 65,195" stroke-width="1.5"/>
  <path d="M80,200 Q75,193 80,188" stroke-width="1.5"/>
  <path d="M100,195 Q95,188 102,182" stroke-width="1.5"/>
  <path d="M125,188 Q120,180 130,175" stroke-width="1.5"/>
  <path d="M155,182 Q150,173 162,168" stroke-width="1.5"/>
  <path d="M190,178 Q188,168 200,165" stroke-width="1.5"/>
  <path d="M225,172 Q225,162 238,160" stroke-width="1.5"/>
  <path d="M260,170 Q265,160 278,162" stroke-width="1.5"/>
  <path d="M295,178 Q302,170 312,175" stroke-width="1.5"/>
  <path d="M320,205 Q360,180 350,160 C340,150 325,160 330,180" />
  <path d="M335,165 Q345,158 350,165" stroke-width="1.5"/>
  <ellipse cx="345" cy="172" rx="3" ry="2.5"/>
  <path d="M348,178 Q352,180 354,177" stroke-width="1.5"/>
  <path d="M340,182 L335,180" stroke-width="1.5"/>
  <path d="M333,178 L329,176" stroke-width="1.5"/>
  <path d="M55,290 L60,335 L80,335 L78,305" />
  <path d="M105,308 L110,355 L130,355 L128,318" />
  <path d="M270,315 L275,360 L295,360 L293,310" />
  <path d="M320,308 L325,345 L345,345 L342,300" />
  <ellipse cx="70" cy="335" rx="14" ry="6"/>
  <ellipse cx="120" cy="355" rx="14" ry="6"/>
  <ellipse cx="285" cy="360" rx="14" ry="6"/>
  <ellipse cx="335" cy="345" rx="14" ry="6"/>
  <path d="M60,335 L58,328 M65,338 L63,332 M75,338 L77,332 M82,335 L82,328" stroke-width="1"/>
  <path d="M110,355 L108,348 M115,358 L113,352 M125,358 L127,352 M132,355 L132,348" stroke-width="1"/>
  <path d="M275,360 L273,353 M280,363 L278,357 M290,363 L292,357 M297,360 L297,353" stroke-width="1"/>
  <path d="M325,345 L323,338 M330,348 L328,342 M340,348 L342,342 M347,345 L347,338" stroke-width="1"/>
  <path d="M140,250 C145,240 158,238 165,245" stroke-width="1.5"/>
  <path d="M155,265 C162,255 175,253 182,260" stroke-width="1.5"/>
  <path d="M195,272 C202,262 215,260 222,267" stroke-width="1.5"/>
  <path d="M235,275 C242,265 255,263 262,270" stroke-width="1.5"/>
  <path d="M275,272 C282,262 295,260 302,267" stroke-width="1.5"/>
  <path d="M85,232 C90,222 103,220 110,227" stroke-width="1.5"/>
  <path d="M115,238 C120,228 133,226 140,233" stroke-width="1.5"/>
  <path d="M260,228 C265,218 278,216 285,223" stroke-width="1.5"/>
  <path d="M155,295 Q170,302 185,295" stroke-width="1"/>
  <path d="M220,300 Q235,307 250,300" stroke-width="1"/>
  <path d="M250,225 Q265,222 280,228" stroke-width="1"/>
  <path d="M195,225 Q210,220 225,225" stroke-width="1"/>
  <circle cx="40" cy="90" r="6"/>
  <circle cx="80" cy="60" r="5"/>
  <circle cx="350" cy="80" r="6"/>
  <circle cx="320" cy="50" r="5"/>
  <path d="M40,378 Q200,374 380,378" stroke-width="2"/>
  <path d="M50,370 Q60,360 75,365" stroke-width="1.5"/>
  <path d="M380,365 Q370,358 358,362" stroke-width="1.5"/>
  <path d="M70,355 L70,378 M72,360 L72,378 M68,365 L68,378" stroke-width="1.2"/>
  <path d="M360,358 L360,378 M362,365 L362,378 M358,370 L358,378" stroke-width="1.2"/>
`);

export const coloringPages: ColoringPage[] = [
  { id: "1", title: "হাসি-খুশি হাতি", category: "পশুপাখি", categoryColor: "#F59E0B", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", svgContent: elephant },
  { id: "2", title: "প্রজাপতি রানী", category: "পশুপাখি", categoryColor: "#F59E0B", author: "মিম", timeAgo: "২ ঘণ্টা আগে", svgContent: butterfly },
  { id: "3", title: "মিষ্টি বিড়াল", category: "পশুপাখি", categoryColor: "#F59E0B", author: "তানিয়া", timeAgo: "১ ঘণ্টা আগে", svgContent: cat },
  { id: "4", title: "সুন্দর ময়ূর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "সাদিয়া", timeAgo: "৪ ঘণ্টা আগে", svgContent: peacock },
  { id: "5", title: "ফুলের বাগান", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "তানিয়া", timeAgo: "৫ ঘণ্টা আগে", svgContent: sunflowers },
  { id: "6", title: "রংধনু মেঘ", category: "ফুল-প্রকৃতি", categoryColor: "#10B981", author: "নীল", timeAgo: "৬ ঘণ্টা আগে", svgContent: rainbow },
  { id: "7", title: "রঙিন গাড়ি", category: "যানবাহন", categoryColor: "#3B82F6", author: "রাফি", timeAgo: "৩ ঘণ্টা আগে", svgContent: car },
  { id: "8", title: "জাহাজ ভ্রমণ", category: "যানবাহন", categoryColor: "#3B82F6", author: "আরিফ", timeAgo: "৫ ঘণ্টা আগে", svgContent: ship },
  { id: "9", title: "আমার বাড়ি", category: "বাড়ি-গ্রাম", categoryColor: "#8B5CF6", author: "মীম", timeAgo: "১ দিন আগে", svgContent: house },
  { id: "10", title: "ঈদের তারা", category: "উৎসব", categoryColor: "#EF4444", author: "সাদিয়া", timeAgo: "২ দিন আগে", svgContent: eid },
  { id: "11", title: "জন্মদিনের কেক", category: "উৎসব", categoryColor: "#EF4444", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", svgContent: cake },
  { id: "12", title: "মজার রকেট", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", svgContent: rocket },
  { id: "13", title: "প্রিয় টেডি", category: "খেলনা", categoryColor: "#F97316", author: "রিয়া", timeAgo: "৮ ঘণ্টা আগে", svgContent: teddy },
  { id: "14", title: "জলের মাছ", category: "পশুপাখি", categoryColor: "#F59E0B", author: "আরিফ", timeAgo: "৪ ঘণ্টা আগে", svgContent: fish },
  { id: "15", title: "গ্রামের নৌকা", category: "যানবাহন", categoryColor: "#3B82F6", author: "নীল", timeAgo: "৩ দিন আগে", svgContent: boat },
  { id: "16", title: "খুশির ডাইনোসর", category: "পশুপাখি", categoryColor: "#F59E0B", author: "জিম", timeAgo: "১ দিন আগে", svgContent: dino },
];

export const palette: string[] = [
  "#FF6B1A", "#F39C12", "#FFD93D", "#2ECC71", "#27AE60",
  "#3498DB", "#1ABC9C", "#9B59B6", "#E74C3C", "#E91E63",
  "#FF8FA3", "#A0522D", "#8B4513", "#000000", "#7F8C8D",
  "#BDC3C7", "#34495E", "#16A085", "#D35400", "#C0392B",
];
