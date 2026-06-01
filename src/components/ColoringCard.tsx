import { Link } from "@tanstack/react-router";
import type { ColoringPage } from "@/lib/coloring-data";
import { svgArt } from "@/lib/coloring-data";

const categoryColor: Record<string, string> = {
  "পশুপাখি": "#2ECC71",
  "ফুল-প্রকৃতি": "#E91E63",
  "বাড়ি-গ্রাম": "#F39C12",
  "যানবাহন": "#3498DB",
  "খেলনা": "#9B59B6",
  "উৎসব": "#E74C3C",
};

export function ColoringCard({ page, index = 0 }: { page: ColoringPage; index?: number }) {
  const color = categoryColor[page.category] ?? "#FF6B1A";
  return (
    <Link
      to="/color/$id"
      params={{ id: page.id }}
      className="group block animate-pop-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="card-hover relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
        <div className="relative aspect-square bg-white overflow-hidden">
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgArt[page.svgKey] }}
          />
          <span
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
            style={{ backgroundColor: color }}
          >
            {page.category}
          </span>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="rounded-full bg-primary text-primary-foreground px-5 py-2 font-bold shadow-playful">
              🎨 রঙ করো
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display font-bold text-lg text-foreground">{page.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {page.author} · {page.timeAgo}
          </p>
        </div>
      </div>
    </Link>
  );
}
