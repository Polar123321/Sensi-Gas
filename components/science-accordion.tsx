"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { science } from "@/data/content";

export function ScienceAccordion() {
  const [open,setOpen]=useState(0);
  return <div className="mt-8 border-y border-white/10 sm:mt-10">{science.map(([title,text],i)=>{const expanded=open===i;return <div key={title} className="border-b border-white/8 last:border-0"><h3><button className="accordion-trigger" onClick={()=>setOpen(expanded?-1:i)} aria-expanded={expanded}><span className="flex min-w-0 items-center gap-3 sm:gap-4"><span className="font-mono text-xs text-cyan-300">0{i+1}</span><span className="text-left text-sm font-medium sm:text-lg">{title}</span></span><ChevronDown className={`shrink-0 text-slate-500 transition-transform ${expanded?"rotate-180":""}`}/></button></h3><AnimatePresence initial={false}>{expanded&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-4xl pb-6 pl-8 text-sm leading-6 text-slate-400 sm:pb-7 sm:pl-12 sm:text-base sm:leading-7">{text}</p></motion.div>}</AnimatePresence></div>})}</div>;
}
