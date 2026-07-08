import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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

const PENCIL_CURSOR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M 24 2 L 30 8 L 10 28 L 2 30 L 4 22 Z' fill='%23FF6B1A' stroke='black' stroke-width='1.5'/%3E%3Cpath d='M 22 4 L 28 10' stroke='black' stroke-width='1'/%3E%3Cpath d='M 4 22 L 10 28' stroke='black' stroke-width='1'/%3E%3C/svg%3E\") 2 30, crosshair";

const ERASER_CURSOR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Crect x='2' y='8' width='20' height='12' rx='2' fill='white' stroke='%23FF6B1A' stroke-width='2'/%3E%3Cline x1='2' y1='14' x2='22' y2='14' stroke='%23FF6B1A' stroke-width='1'/%3E%3C/svg%3E\") 12 20, cell";

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

function ColorPage() {
  const { id } = useParams({ from: "/color/$id" });
  const page = coloringPages.find((p) => p.id === id) ?? coloringPages[0];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#FF6B1A");
  const [isEraser, setIsEraser] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const historyRef = useRef<ImageData[]>([]);
  const [historyCount, setHistoryCount] = useState(0);
  const MAX_HISTORY = 10;

  const loadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
      historyRef.current = [];
      setHistoryCount(0);
    };
    img.src = page.image;
  };

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.id]);

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

  const doFill = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    saveHistory();
    setIsFilling(true);
    requestAnimationFrame(() => {
      floodFill(canvas, x, y, isEraser ? "#FFFFFF" : selectedColor);
      setIsFilling(false);
    });
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);
    doFill(x, y);
  };

  // Touch support (non-passive to preventDefault)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0] ?? e.changedTouches[0];
      if (!touch) return;
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((touch.clientX - rect.left) * (canvas.width / rect.width));
      const y = Math.floor((touch.clientY - rect.top) * (canvas.height / rect.height));
      doFill(x, y);
    };
    canvas.addEventListener("touchstart", onTouch, { passive: false });
    return () => canvas.removeEventListener("touchstart", onTouch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, isEraser]);

  const handleUndo = () => {
    if (historyRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = historyRef.current.pop()!;
    ctx.putImageData(imageData, 0, 0);
    setHistoryCount(historyRef.current.length);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    handleUndo();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${page.title}-রঙিন.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: page.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("লিংক কপি হয়েছে! 🎉");
      }
    } catch {}
  };

  const reset = () => loadImage();

  const cursorStyle = isEraser ? ERASER_CURSOR : PENCIL_CURSOR;

  return (
    <div className="min-h-screen pb-20 md:pb-6">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary mb-4">
          ← হোমে ফেরো
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Canvas */}
          <div className="bg-card rounded-3xl border border-border shadow-playful p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <h1 className="font-display font-extrabold text-2xl md:text-3xl">{page.title}</h1>
              <span className="hidden md:inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-bold">
                {page.category}
              </span>
            </div>
            <div className="relative rounded-2xl border-4 border-dashed border-primary/40 p-3 bg-white">
              <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                onClick={handleCanvasClick}
                onContextMenu={handleContextMenu}
                className="w-full h-auto aspect-square rounded-xl touch-none select-none"
                style={{ imageRendering: "auto", cursor: cursorStyle }}
              />
              {isFilling && (
                <div className="absolute inset-0 grid place-items-center bg-white/40 rounded-2xl pointer-events-none">
                  <div className="bg-white/95 rounded-full px-5 py-2 shadow-playful font-display font-bold text-primary flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    রঙ হচ্ছে...
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-center font-display font-extrabold text-2xl tracking-widest text-primary">
              COLOR ME!
            </p>
          </div>

          {/* Tools */}
          <aside className="space-y-4">
            <div className="bg-card rounded-3xl border border-border p-4 shadow-sm">
              <h3 className="font-display font-bold text-lg mb-3">🎨 রঙ বাছো</h3>
              <div className="grid grid-cols-5 gap-2">
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
                <button onClick={reset} className="rounded-xl bg-white border border-border px-3 py-2 font-semibold btn-bounce hover:bg-muted">
                  ♻️ নতুন করো
                </button>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border p-4 shadow-sm">
              <h3 className="font-display font-bold text-lg mb-3">রেফারেন্স ছবি</h3>
              <img
                src={page.image}
                alt={page.title}
                className="aspect-square w-full rounded-xl border border-border bg-white object-contain"
              />
              <p className="mt-2 text-center text-sm font-semibold text-foreground/70">{page.title}</p>
            </div>

            <div className="rounded-3xl p-4 border border-yellow/40" style={{ background: "#FFF3C4" }}>
              <h3 className="font-display font-bold text-lg mb-2">💡 টিপস</h3>
              <ul className="text-sm space-y-1 text-foreground/80">
                <li>• প্রথমে একটি রঙ বেছে নাও</li>
                <li>• তারপর ছবির যেকোনো অংশে ক্লিক করো</li>
                <li>• ভিন্ন রঙ দিয়ে আবার ক্লিক করলে রঙ বদলাবে</li>
                <li>• ডান-ক্লিক বা আনডু বাটনে শেষ রঙ ফিরে যাবে</li>
                <li>• শেষ হলে ডাউনলোড বাটনে ক্লিক করো</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2">
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

      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-playful font-bold animate-in fade-in slide-in-from-bottom-4">
          🎉 ছবি ডাউনলোড হয়েছে!
        </div>
      )}
    </div>
  );
}
