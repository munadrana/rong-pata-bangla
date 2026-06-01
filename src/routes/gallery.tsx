import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CategoryPills } from "@/components/CategoryPills";
import { ColoringCard } from "@/components/ColoringCard";
import { coloringPages, type Category } from "@/lib/coloring-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "গ্যালারি — রঙ.পাতা.বাংলা" },
      { name: "description", content: "ছোট শিল্পীদের রঙ করা পাতার সংগ্রহ।" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [category, setCategory] = useState<Category | "সব">("সব");
  const filtered = useMemo(
    () => (category === "সব" ? coloringPages : coloringPages.filter((p) => p.category === category)),
    [category],
  );
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl">সকল রঙিন পাতা</h1>
        <p className="text-muted-foreground mt-1">তোমার বন্ধুদের তৈরি করা রঙিন শিল্পকর্ম দেখো</p>
        <div className="mt-6">
          <CategoryPills active={category} onChange={setCategory} />
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => (
            <ColoringCard key={p.id} page={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
