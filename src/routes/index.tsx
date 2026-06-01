import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryPills } from "@/components/CategoryPills";
import { ColoringCard } from "@/components/ColoringCard";
import { coloringPages, type Category } from "@/lib/coloring-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "রঙ.পাতা.বাংলা — রঙ দিয়ে সাজাও তোমার পাতা" },
      { name: "description", content: "শিশুদের জন্য বাংলায় মজার অনলাইন রঙ করার প্ল্যাটফর্ম।" },
    ],
  }),
  component: Home,
});

function FloatingDecor() {
  const items = [
    { left: "5%", top: "20%", color: "#FF6B1A", size: 26, r: -8 },
    { left: "12%", top: "70%", color: "#2ECC71", size: 18, r: 12 },
    { left: "85%", top: "18%", color: "#F39C12", size: 30, r: 6 },
    { left: "92%", top: "60%", color: "#E74C3C", size: 20, r: -10 },
    { left: "70%", top: "85%", color: "#3498DB", size: 22, r: 4 },
    { left: "30%", top: "85%", color: "#9B59B6", size: 16, r: -4 },
  ];
  return (
    <>
      {items.map((d, i) => (
        <span
          key={i}
          className="absolute animate-float pointer-events-none"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.color,
            borderRadius: i % 2 ? "30%" : "50%",
            // @ts-expect-error css var
            "--r": `${d.r}deg`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.85,
            boxShadow: `0 6px 14px -4px ${d.color}66`,
          }}
        />
      ))}
    </>
  );
}

function Home() {
  const [category, setCategory] = useState<Category | "সব">("সব");

  const filtered = useMemo(
    () => (category === "সব" ? coloringPages : coloringPages.filter((p) => p.category === category)),
    [category],
  );

  const stats = [
    { emoji: "🖼️", label: "৫০০+ রঙিন পাতা" },
    { emoji: "👧", label: "১২০+ ছোট শিল্পী" },
    { emoji: "🎨", label: "৫০k+ রঙ করা হয়েছে" },
    { emoji: "⭐", label: "৫ বিভাগ" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)" }}
      >
        <FloatingDecor />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
          <span className="inline-block rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            🎨 শিশুদের জন্য বানানো
          </span>
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-6xl leading-tight text-foreground">
            রঙ দিয়ে সাজাও তোমার পাতা
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-foreground/75">
            ছবি রঙ করো, শিখো রঙের ম্যাজিক, আর নিজের সুন্দর শিল্পকর্ম সবার সাথে শেয়ার করো।
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/color/$id"
              params={{ id: "1" }}
              className="rounded-full bg-primary text-primary-foreground px-7 py-3 font-bold shadow-playful btn-bounce hover:opacity-95"
            >
              🎨 রঙ শুরু করো →
            </Link>
            <Link
              to="/gallery"
              className="rounded-full bg-white text-foreground px-7 py-3 font-bold border-2 border-primary btn-bounce hover:bg-primary/5"
            >
              ✏️ আঁকতে শিখো
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-card rounded-3xl p-4 shadow-playful border border-border">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-3 py-2">
              <div className="text-2xl">{s.emoji}</div>
              <div className="mt-1 font-bold text-foreground/85 text-sm md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories + Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-4 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl">রঙ করার পাতা</h2>
            <p className="text-muted-foreground text-sm">তোমার পছন্দের ছবি বেছে নাও আর রঙ শুরু করো</p>
          </div>
        </div>
        <CategoryPills active={category} onChange={setCategory} />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => (
            <ColoringCard key={p.id} page={p} index={i} />
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-10 py-8 text-center text-sm text-muted-foreground">
        ❤️ দিয়ে তৈরি — রঙ.পাতা.বাংলা
      </footer>
    </div>
  );
}
