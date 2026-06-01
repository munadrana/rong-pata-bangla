import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "রঙ করো" },
    { to: "/gallery", label: "গ্যালারি" },
    { to: "/", label: "রঙের পাঠ" },
    { to: "/", label: "গল্প ও ছড়া" },
    { to: "/", label: "প্রতিযোগিতা" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="font-display font-extrabold text-2xl tracking-tight">
          <span style={{ color: "#FF6B1A" }}>রঙ</span>
          <span className="text-foreground">.</span>
          <span style={{ color: "#2ECC71" }}>পাতা</span>
          <span className="text-foreground">.</span>
          <span style={{ color: "#FF6B1A" }}>বাংলা</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="px-3 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold shadow-playful btn-bounce hover:opacity-95">
            লগইন করো
          </button>
          <button
            className="md:hidden p-2 rounded-xl border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1">
          {links.map((l, i) => (
            <Link key={i} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-primary/10">
              {l.label}
            </Link>
          ))}
          <button className="mt-2 rounded-full bg-primary text-primary-foreground px-5 py-2 font-bold">লগইন করো</button>
        </div>
      )}
    </header>
  );
}
