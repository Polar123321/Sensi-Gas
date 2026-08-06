"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SafetyModal() {
  const [open,setOpen]=useState(false); const closeRef=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    if(!open) return;
    const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};
    const previous=document.body.style.overflow; document.body.style.overflow="hidden";
    window.addEventListener("keydown",onKey); window.setTimeout(()=>closeRef.current?.focus(),0);
    return()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",onKey)};
  },[open]);
  return <>
    <button onClick={()=>setOpen(true)} className="mt-3 text-left text-xs font-semibold text-red-200 underline decoration-red-300/30 underline-offset-4 hover:text-white">Ler orientação de segurança</button>
    <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-[200] grid place-items-center bg-black/70 p-3 backdrop-blur-sm sm:p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>{if(e.target===e.currentTarget)setOpen(false)}} role="presentation">
      <motion.div initial={{opacity:0,y:20,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} role="dialog" aria-modal="true" aria-labelledby="safety-title" className="glass relative max-h-[calc(100dvh-24px)] w-full max-w-lg overflow-y-auto rounded-[20px] p-5 sm:rounded-[24px] sm:p-9">
        <button ref={closeRef} onClick={()=>setOpen(false)} className="absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 hover:text-white sm:right-5 sm:top-5" aria-label="Fechar orientação"><X size={18}/></button>
        <div className="icon-box !border-red-300/20 !bg-red-300/[.06] !text-red-300"><ShieldAlert/></div>
        <h2 id="safety-title" className="mt-7 text-2xl font-medium">Orientação de segurança</h2>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400"><p>O protótipo físico do SENSIGÁS utiliza o sensor MQ-4 e detecta a presença de GLP nos testes experimentais da equipe. A simulação exibida neste site demonstra a lógica do sistema, mas não recebe medições do ambiente em tempo real.</p><p>Em caso de suspeita de vazamento, siga os procedimentos oficiais de segurança, evite fontes de ignição, ventile o ambiente quando isso puder ser feito com segurança e procure assistência especializada.</p><p>O projeto tem finalidade educacional e ainda não substitui detectores certificados.</p></div>
        <button onClick={()=>setOpen(false)} className="btn btn-primary mt-7 w-full">Entendi</button>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </>;
}
