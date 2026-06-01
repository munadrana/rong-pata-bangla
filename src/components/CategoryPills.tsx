import { categories, type Category } from "@/lib/coloring-data";

type Props = {
  active: Category | "সব";
  onChange: (c: Category | "সব") => void;
};

export function CategoryPills({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
      {categories.map((c) => {
        const isActive = active === c.value;
        return (
          <button
            key={c.value}
            onClick={() => onChange(c.value)}
            className={
              "shrink-0 rounded-full px-4 py-2 text-sm font-bold border-2 transition btn-bounce " +
              (isActive
                ? "bg-primary text-primary-foreground border-primary shadow-playful"
                : "bg-card text-foreground/80 border-border hover:border-primary/60")
            }
          >
            <span className="mr-1">{c.emoji}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
