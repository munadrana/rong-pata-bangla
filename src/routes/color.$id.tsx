import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { coloringPages } from "@/lib/coloring-data";

export const Route = createFileRoute("/color/$id")({
  head: () => ({
    meta: [
      { title: "রঙ করো — রঙ.পাতা.বাংলা" },
      { name: "description", content: "ক্যানভাসে ক্লিক করে রঙ করো তোমার পছন্দের ছবি।" },
    ],
  }),
  component: ColorPage,
});

const CANVAS_SIZE = 600;

const colors = [
  "#FF0000", "#FF4500", "#FF6B1A", "#FF8C00", "#FFD700",
  "#FFFF00", "#ADFF2F", "#00FF00", "#00FA9A", "#00FFFF",
  "#00BFFF", "#0000FF", "#8A2BE2", "#FF00FF", "#FF1493",
  "#FFB3B3", "#FFD9B3", "#FFFFB3", "#B3FFB3", "#B3FFFF",
  "#B3D9FF", "#D9B3FF", "#FFB3FF", "#FFB3D9", "#8B0000",
  "#006400", "#00008B", "#4B0082", "#8B4513", "#2F4F4F",
  "#FFFFFF", "#C0C0C0", "#808080", "#000000",
];

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function buildPencilCursor(color: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
    <path d='M 24 2 L 30 8 L 10 28 L 2 30 L 4 22 Z' fill='${color}' stroke='black' stroke-width='1.5'/>
    <path d='M 4 22 L 10 28' stroke='black' stroke-width='1'/>
    <path d='M 22 4 L 28 10' stroke='black' stroke-width='1'/>
  </svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 2 30, crosshair`;
}

function buildEraserCursor() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
    <rect x='2' y='8' width='20' height='12' rx='2' fill='white' stroke='#FF6B1A' stroke-width='2'/>
    <line x1='2' y1='14' x2='22' y2='14' stroke='#FF6B1A' stroke-width='1'/>
  </svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 12 20, cell`;
}

function floodFill(
  canvas: HTMLCanvasElement,
  startX: number,
  startY: number,
  fillColor: string,
) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const [fillR, fillG, fillB] = hexToRgb(fillColor);
  const i = (startY * width + startX) * 4;
  const targetR = data[i];
  const targetG = data[i + 1];
  const targetB = data[i + 2];

  if (targetR < 80 && targetG < 80 && targetB < 80) return;
  if (
    Math.abs(targetR - fillR) < 5 &&
    Math.abs(targetG - fillG) < 5 &&
    Math.abs(targetB - fillB) < 5
  )
    return;

  const tolerance = 35;
  const stack: Array<[number, number]> = [[startX, startY]];
  const visited = new Uint8Array(width * height);
  visited[startY * width + startX] = 1;

  while (stack.length) {
    const [x, y] = stack.pop()!;
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    if (r < 80 && g < 80 && b < 80) continue;
    if (
      Math.abs(r - targetR) > tolerance ||
      Math.abs(g - targetG) > tolerance ||
      Math.abs(b - targetB) > tolerance
    )
      continue;

    data[idx] = fillR;
    data[idx + 1] = fillG;
    data[idx + 2] = fillB;
    data[idx + 3] = 255;

    const neighbors: Array<[number, number]> = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const ni = ny * width + nx;
        if (!visited[ni]) {
          visited[ni] = 1;
          stack.push([nx, ny]);
        }
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function showConfetti() {
  const palette = ["#FF6B1A", "#FFD700", "#FF69B4", "#00CED1", "#7B68EE", "#2ECC71"];
  for (let i = 0; i < 60; i++) {
    const div = document.createElement("div");
    div.style.cssText = `position:fixed;width:10px;height:10px;background:${palette[i % palette.length]};left:${Math.random() * 100}vw;top:-20px;border-radius:${Math.random() > 0.5 ? "50%" : "2px"};animation:confetti-fall ${1 + Math.random() * 2}s linear forwards;z-index:9999;pointer-events:none;`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3200);
  }
}

function ColorPage() {
  const { id } = useParams({ from: "/color/$id" });
  const navigate = useNavigate();
  const currentIndex = coloringPages.findIndex((p) => p.id === id);
  const currentPage = currentIndex >= 0 ? coloringPages[currentIndex] : coloringPages[0];
  const prevPage = currentIndex > 0 ? coloringPages[currentIndex - 1] : null;
  const nextPage = currentIndex < coloringPages.length - 1 ? coloringPages[currentIndex + 1] : null;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#FF6B1A");
  const [isEraser, setIsEraser] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const historyRef = useRef<ImageData[]>([]);
  const [historyCount, setHistoryCount] = useState(0);
  const MAX_HISTORY = 10;

  const [zoom, setZoom] = useState(1);
  const [coloredPercent, setColoredPercent] = useState(0);
  const milestonesRef = useRef({ p25: false, p50: false, p90: false });

  const updateCursor = useCallback((color: string, eraser: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.cursor = eraser ? buildEraserCursor() : buildPencilCursor(color);
  }, []);

  const drawImageOnCanvas = useCallback(
    (resetProgress: boolean) => {
      const canvas = canvasRef.current;
      if (!canvas || !currentPage?.image) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      setIsLoading(true);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const drawImg = (img: HTMLImageElement) => {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, w, h);
        setIsLoading(false);
        historyRef.current = [];
        setHistoryCount(0);
        if (resetProgress) {
          setColoredPercent(0);
          milestonesRef.current = { p25: false, p50: false, p90: false };
        }
      };

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => drawImg(img);
      img.onerror = () => {
        const img2 = new Image();
        img2.onload = () => drawImg(img2);
        img2.onerror = () => setIsLoading(false);
        img2.src = currentPage.image;
      };
      img.src = currentPage.image;
    },
    [currentPage],
  );

  useEffect(() => {
    drawImageOnCanvas(true);
    updateCursor(selectedColor, isEraser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage.id]);

  useEffect(() => {
    updateCursor(selectedColor, isEraser);
  }, [selectedColor, isEraser, updateCursor]);

  const saveHistory = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    historyRef.current.push(imageData);
    if (historyRef.current.length > MAX_HISTORY) historyRef.current.shift();
    setHistoryCount(historyRef.current.length);
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let colored = 0;
    let fillable = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const isOutline = r < 80 && g < 80 && b < 80;
      if (isOutline) continue;
      fillable++;
      const isWhite = r > 240 && g > 240 && b > 240;
      if (!isWhite) colored++;
    }
    if (fillable === 0) return;
    const percent = Math.round((colored / fillable) * 100);
    setColoredPercent(percent);
    const m = milestonesRef.current;
    if (percent >= 25 && !m.p25) { m.p25 = true; toast.success("দারুণ! ২৫% রঙ হয়েছে! 🎨"); }
    if (percent >= 50 && !m.p50) { m.p50 = true; toast.success("অর্ধেক হয়ে গেছে! 🌟"); }
    if (percent >= 90 && !m.p90) { m.p90 = true; toast.success("অসাধারণ! ছবি প্রায় সম্পূর্ণ! 🏆"); showConfetti(); }
  };

  const doFill = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return;
    saveHistory();
    setIsFilling(true);
    requestAnimationFrame(() => {
      floodFill(canvas, x, y, isEraser ? "#FFFFFF" : selectedColor);
      setIsFilling(false);
      setTimeout(() => checkProgress(), 100);
    });
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    doFill(x, y);
  };

  // Touch + pinch zoom
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let initialDistance = 0;
    let initialZoom = 1;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        initialDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        initialZoom = zoom;
        return;
      }
      if (e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((touch.clientX - rect.left) * (canvas.width / rect.width));
        const y = Math.floor((touch.clientY - rect.top) * (canvas.height / rect.height));
        doFill(x, y);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialDistance > 0) {
        e.preventDefault();
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        const scale = distance / initialDistance;
        setZoom(Math.min(Math.max(initialZoom * scale, 0.5), 3));
      }
    };

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, isEraser, zoom]);

  const handleUndo = () => {
    if (historyRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = historyRef.current.pop()!;
    ctx.putImageData(imageData, 0, 0);
    setHistoryCount(historyRef.current.length);
    checkProgress();
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    handleUndo();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${currentPage.title}-রঙিন.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("🎉 ছবি ডাউনলোড হয়েছে!");
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: currentPage.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("লিংক কপি হয়েছে! 🎉");
      }
    } catch {}
  };

  const handleReset = () => {
    drawImageOnCanvas(true);
    toast.success("ছবি রিসেট হয়েছে! 🔄");
  };

  const zoomIn = () => setZoom((p) => Math.min(p + 0.25, 3));
  const zoomOut = () => setZoom((p) => Math.max(p - 0.25, 0.5));

  return (
    <div className="min-h-screen pb-24 md:pb-6">
      <style>{`@keyframes confetti-fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`}</style>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary mb-4">
          ← হোমে ফেরো
        </Link>

        {/* Prev/Next navigation */}
        <div className="flex items-center justify-between gap-2 mb-4 bg-card border border-border rounded-2xl px-3 py-2 shadow-sm">
          <button
            onClick={() => prevPage && navigate({ to: "/color/$id", params: { id: String(prevPage.id) } })}
            disabled={!prevPage}
            className="px-3 py-1.5 rounded-lg border border-border bg-white text-sm font-semibold btn-bounce hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← আগের ছবি
          </button>
          <span className="font-display font-bold text-sm text-foreground/70">
            পেজ {currentIndex + 1} / {coloringPages.length}
          </span>
          <button
            onClick={() => nextPage && navigate({ to: "/color/$id", params: { id: String(nextPage.id) } })}
            disabled={!nextPage}
            className="px-3 py-1.5 rounded-lg border border-border bg-white text-sm font-semibold btn-bounce hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            পরের ছবি →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Canvas */}
          <div className="bg-card rounded-3xl border border-border shadow-playful p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <h1 className="font-display font-extrabold text-2xl md:text-3xl">{currentPage.title}</h1>
              <span className="hidden md:inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-bold">
                {currentPage.category}
              </span>
            </div>
            <div className="relative rounded-2xl border-4 border-dashed border-primary/40 p-3 bg-white overflow-hidden">
              <div
                className="origin-center transition-transform duration-150 ease-out"
                style={{ transform: `scale(${zoom})` }}
              >
                <canvas
                  ref={canvasRef}
                  width={CANVAS_SIZE}
                  height={CANVAS_SIZE}
                  onClick={handleCanvasClick}
                  onContextMenu={handleContextMenu}
                  className="w-full h-auto aspect-square rounded-xl touch-none select-none"
                  style={{ imageRendering: "auto" }}
                />
              </div>
              {isLoading && (
                <div className="absolute inset-0 grid place-items-center bg-white/70 rounded-2xl z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="font-display font-bold text-primary">ছবি লোড হচ্ছে...</p>
                  </div>
                </div>
              )}
              {isFilling && !isLoading && (
                <div className="absolute inset-0 grid place-items-center bg-white/40 rounded-2xl pointer-events-none">
                  <div className="bg-white/95 rounded-full px-5 py-2 shadow-playful font-display font-bold text-primary flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    রঙ হচ্ছে...
                  </div>
                </div>
              )}
            </div>

            {/* Zoom controls */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <button onClick={zoomOut} className="rounded-full bg-white border border-border w-10 h-10 font-bold btn-bounce hover:bg-muted" aria-label="Zoom out">🔍−</button>
              <span className="min-w-[64px] text-center font-display font-bold text-foreground/80">{Math.round(zoom * 100)}%</span>
              <button onClick={zoomIn} className="rounded-full bg-white border border-border w-10 h-10 font-bold btn-bounce hover:bg-muted" aria-label="Zoom in">🔍+</button>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${coloredPercent}%`,
                    background: "linear-gradient(90deg,#FF6B1A,#FFD700,#2ECC71)",
                  }}
                />
              </div>
              <p className="mt-1 text-center text-sm font-semibold text-foreground/70">
                {coloredPercent}% রঙ হয়েছে
              </p>
            </div>

            <p className="mt-3 text-center font-display font-extrabold text-2xl tracking-widest text-primary">
              COLOR ME!
            </p>
          </div>

          {/* Tools */}
          <aside className="space-y-4">
            {/* Selected color indicator */}
            <div className="bg-card rounded-3xl border border-border p-4 shadow-sm flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full border-4 border-white shadow-playful ring-2 ring-border"
                style={{ background: isEraser ? "#ffffff" : selectedColor }}
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground/60">বেছে নেওয়া রঙ</p>
                <p className="font-display font-extrabold text-lg">
                  {isEraser ? "🧹 ইরেজার" : "🖊️ রঙ তুলি"}
                </p>
                <p className="text-xs font-mono text-foreground/60">{isEraser ? "মুছে ফেলো" : selectedColor.toUpperCase()}</p>
              </div>
              <svg width="42" height="42" viewBox="0 0 32 32" aria-hidden>
                <path d="M 24 2 L 30 8 L 10 28 L 2 30 L 4 22 Z" fill={isEraser ? "#ffffff" : selectedColor} stroke="black" strokeWidth="1.5" />
                <path d="M 4 22 L 10 28" stroke="black" strokeWidth="1" />
              </svg>
            </div>

            <div className="bg-card rounded-3xl border border-border p-4 shadow-sm">
              <h3 className="font-display font-bold text-lg mb-3">🎨 রঙ বাছো</h3>
              <div className="grid grid-cols-5 gap-2 max-h-[240px] md:max-h-none overflow-y-auto md:overflow-visible pr-1">
                {colors.map((c) => {
                  const active = !isEraser && c.toLowerCase() === selectedColor.toLowerCase();
                  return (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedColor(c);
                        setIsEraser(false);
                      }}
                      className={
                        "relative aspect-square rounded-full border-2 transition hover:scale-110 " +
                        (active ? "ring-4 ring-primary/40 border-white shadow-playful scale-110" : "border-white shadow")
                      }
                      style={{ backgroundColor: c }}
                      aria-label={c}
                    >
                      {active && (
                        <span className="absolute inset-0 grid place-items-center text-white text-sm font-bold drop-shadow">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setIsEraser((v) => !v)}
                className={
                  "mt-3 w-full rounded-xl px-4 py-2 font-semibold border btn-bounce transition " +
                  (isEraser
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted text-foreground/80 border-border hover:bg-muted/70")
                }
              >
                🧽 {isEraser ? "ইরেজার চালু" : "রঙ মুছো (ইরেজার)"}
              </button>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={handleUndo}
                  disabled={historyCount === 0}
                  className="rounded-xl bg-white border border-border px-3 py-2 font-semibold btn-bounce hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed text-foreground/80"
                >
                  ↩️ আনডু
                </button>
                <button onClick={handleReset} className="rounded-xl bg-white border border-border px-3 py-2 font-semibold btn-bounce hover:bg-muted">
                  🔄 নতুন করো
                </button>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border p-4 shadow-sm">
              <h3 className="font-display font-bold text-lg mb-3">রেফারেন্স ছবি</h3>
              <div className="aspect-square w-full rounded-xl border border-border bg-white overflow-hidden">
                <img
                  src={currentPage.image}
                  alt={currentPage.title}
                  crossOrigin="anonymous"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <p className="mt-2 text-center text-sm font-semibold text-foreground/70">{currentPage.title}</p>
            </div>

            <div className="rounded-3xl p-4 border border-yellow/40" style={{ background: "#FFF3C4" }}>
              <h3 className="font-display font-bold text-lg mb-2">💡 টিপস</h3>
              <ul className="text-sm space-y-1 text-foreground/80">
                <li>• প্রথমে একটি রঙ বেছে নাও</li>
                <li>• তারপর ছবির যেকোনো অংশে ক্লিক করো</li>
                <li>• ছোট অংশে জুম করে রঙ করতে পারো</li>
                <li>• ডান-ক্লিক বা আনডু বাটনে শেষ রঙ ফিরে যাবে</li>
                <li>• শেষ হলে ডাউনলোড বাটনে ক্লিক করো</li>
              </ul>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-2">
              <button onClick={handleDownload} className="rounded-full bg-primary text-primary-foreground px-4 py-3 font-bold shadow-playful btn-bounce">
                ⬇️ ডাউনলোড
              </button>
              <button onClick={share} className="rounded-full bg-secondary text-secondary-foreground px-4 py-3 font-bold shadow-playful btn-bounce">
                🔗 শেয়ার
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky mobile action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur border-t border-border px-3 py-2 grid grid-cols-3 gap-2 shadow-lg">
        <button
          onClick={handleUndo}
          disabled={historyCount === 0}
          className="rounded-xl bg-white border border-border px-2 py-2 font-semibold text-sm btn-bounce disabled:opacity-40"
        >
          ↩️ আনডু
        </button>
        <button onClick={handleReset} className="rounded-xl bg-white border border-border px-2 py-2 font-semibold text-sm btn-bounce">
          🔄 রিসেট
        </button>
        <button onClick={handleDownload} className="rounded-xl bg-primary text-primary-foreground px-2 py-2 font-bold text-sm btn-bounce shadow-playful">
          ⬇️ ডাউনলোড
        </button>
      </div>
    </div>
  );
}
