import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { coloringPages, palette } from "@/lib/coloring-data";

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

function hexToRgba(hex: string): [number, number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), 255];
}

function floodFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  fill: [number, number, number, number],
) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const img = ctx.getImageData(0, 0, w, h);
  const data = img.data;
  const startIdx = (y * w + x) * 4;
  const target = [data[startIdx], data[startIdx + 1], data[startIdx + 2], data[startIdx + 3]];
  // tolerance — treat near-black outlines as barriers
  const tol = 40;
  const match = (idx: number) => {
    return (
      Math.abs(data[idx] - target[0]) <= tol &&
      Math.abs(data[idx + 1] - target[1]) <= tol &&
      Math.abs(data[idx + 2] - target[2]) <= tol
    );
  };
  if (
    target[0] === fill[0] &&
    target[1] === fill[1] &&
    target[2] === fill[2]
  ) return;

  // Don't fill on outlines (dark pixels)
  if (target[0] < 60 && target[1] < 60 && target[2] < 60) return;

  const stack: number[] = [x, y];
  while (stack.length) {
    const cy = stack.pop()!;
    const cx = stack.pop()!;
    if (cx < 0 || cy < 0 || cx >= w || cy >= h) continue;
    const idx = (cy * w + cx) * 4;
    if (!match(idx)) continue;
    data[idx] = fill[0];
    data[idx + 1] = fill[1];
    data[idx + 2] = fill[2];
    data[idx + 3] = fill[3];
    stack.push(cx + 1, cy, cx - 1, cy, cx, cy + 1, cx, cy - 1);
  }
  ctx.putImageData(img, 0, 0);
}

function ColorPage() {
  const { id } = useParams({ from: "/color/$id" });
  const page = coloringPages.find((p) => p.id === id) ?? coloringPages[0];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState<string>("#FF6B1A");
  const historyRef = useRef<ImageData[]>([]);

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
      historyRef.current = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
    };
    img.src = page.image;
  };

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.id]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (historyRef.current.length > 30) historyRef.current.shift();
    floodFill(ctx, x, y, hexToRgba(color));
  };

  const undo = () => {
    const canvas = canvasRef.current;
    if (!canvas || historyRef.current.length < 2) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    historyRef.current.pop();
    ctx.putImageData(historyRef.current[historyRef.current.length - 1], 0, 0);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    undo();
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${page.title}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
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

  return (
    <div className="min-h-screen">
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
            <div className="rounded-2xl border-4 border-dashed border-primary/40 p-3 bg-white">
              <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                onClick={handleCanvasClick}
                onContextMenu={handleContextMenu}
                className="w-full h-auto aspect-square rounded-xl cursor-crosshair touch-none select-none"
                style={{ imageRendering: "auto" }}
              />
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
                {palette.map((c) => {
                  const active = c.toLowerCase() === color.toLowerCase();
                  return (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={
                        "relative aspect-square rounded-full border-2 transition hover:scale-110 " +
                        (active ? "ring-4 ring-primary/40 border-white shadow-playful" : "border-white shadow")
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
                onClick={() => setColor("#FFFFFF")}
                className="mt-3 w-full rounded-xl bg-muted text-foreground/80 px-4 py-2 font-semibold border border-border hover:bg-muted/70 btn-bounce"
              >
                🧽 রঙ মুছো (ইরেজার)
              </button>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button onClick={undo} className="rounded-xl bg-white border border-border px-3 py-2 font-semibold btn-bounce hover:bg-muted">
                  ↶ আনডু
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
                <li>• ডান-ক্লিক করলে শেষ রঙ ফিরে যাবে</li>
                <li>• শেষ হলে ডাউনলোড বাটনে ক্লিক করো</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button onClick={download} className="rounded-full bg-primary text-primary-foreground px-4 py-3 font-bold shadow-playful btn-bounce">
                ⬇️ ডাউনলোড
              </button>
              <button onClick={share} className="rounded-full bg-secondary text-secondary-foreground px-4 py-3 font-bold shadow-playful btn-bounce">
                🔗 শেয়ার
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
