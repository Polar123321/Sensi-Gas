"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/content";
import { SensorLogo } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, .2, .5] });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur nav-scrolled" : "nav-top bg-transparent"}`}>
      <nav className={`container-shell flex items-center justify-between transition-all ${scrolled ? "h-[68px]" : "h-[82px]"}`} aria-label="Navegação principal">
        <button onClick={() => go("inicio")} aria-label="Ir para o início" className={scrolled ? "text-white" : "text-slate-950"}><SensorLogo /></button>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className={`nav-link ${scrolled ? "text-white" : "text-slate-950"} ${active === id ? "active" : ""}`}>{label}</button>)}
        </div>
        <button onClick={() => go("prototipo")} className="btn2 btn2-primary desktop-nav-cta !min-h-10 !px-4 !text-sm">Ver demonstração <ArrowUpRight size={16} /></button>
        <button className={`nav-menu-button grid size-11 place-items-center rounded-full border lg:hidden ${scrolled ? "border-white/10 bg-white/[.03] text-white" : "border-slate-950/20 bg-white/10 text-slate-950"}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="menu-mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="nav-blur max-h-[calc(100dvh-68px)] overflow-y-auto lg:hidden">
            <div className="container-shell flex flex-col gap-1 py-4">
              {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className={`px-4 py-3 text-left text-sm ${active === id ? "bg-[#8ea2ff]/10 text-white" : "text-slate-300"}`}>{label}</button>)}
              <button onClick={() => go("prototipo")} className="btn2 btn2-primary mt-3">Ver demonstração</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
