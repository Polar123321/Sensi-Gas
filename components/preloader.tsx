"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SensorLogo } from "./ui";

export function Preloader() {
  const [visible,setVisible]=useState(true); const reduce=useReducedMotion();
  useEffect(()=>{const timer=window.setTimeout(()=>setVisible(false),reduce?80:850);return()=>window.clearTimeout(timer)},[reduce]);
  return <AnimatePresence>{visible&&<motion.div initial={{opacity:1}} exit={{opacity:0}} transition={{duration:.45}} className="fixed inset-0 z-[1000] grid place-items-center bg-[#05070b]" aria-hidden="true"><div className="flex flex-col items-center gap-6"><SensorLogo/><div className="h-px w-40 overflow-hidden bg-white/10"><motion.div initial={{x:"-100%"}} animate={{x:"100%"}} transition={{duration:.7,ease:"easeInOut"}} className="h-full w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"/></div><span className="font-mono text-[9px] uppercase tracking-[.25em] text-slate-600">Inicializando monitoramento</span></div></motion.div>}</AnimatePresence>;
}
