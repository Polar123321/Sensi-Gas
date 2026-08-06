"use client";

import { useState } from "react";
import { Box, CircleStop, Cpu, Flame, Gauge, Lightbulb, Radio, Siren } from "lucide-react";
import { SectionHeading, SpotlightCard } from "./ui";

const nodes = [
  [Radio,"Ambiente","O ar ao redor do protótipo é continuamente amostrado."],
  [Flame,"Sensor MQ-4","O sensor utilizado responde à presença de GLP e dos gases inflamáveis avaliados no protótipo."],
  [Cpu,"ESP32 DevKit V1","Recebe o sinal do sensor e executa a lógica programada."],
  [Gauge,"Processamento","A leitura é comparada com limites experimentais configurados."],
  [Lightbulb,"LED verde","Indica o estado normal de monitoramento do ambiente."],
  [Siren,"LED vermelho + buzzer","Sinaliza uma elevação que exige atenção imediata."],
  [CircleStop,"Bloqueio da válvula","Possibilidade futura de interromper o fluxo de gás automaticamente."],
  [Box,"Protótipo físico","Integração experimental montada para estudo e demonstração."],
] as const;

export function Architecture() {
  const [active,setActive]=useState(0);
  return <section id="funcionamento" className="section bg-white/[.012]"><div className="container-shell"><SectionHeading eyebrow="Arquitetura" title="Como a tecnologia se conecta" text="Passe o cursor ou use o teclado sobre cada módulo para acompanhar o caminho da informação, desde o ambiente até os alertas e a resposta planejada."/>
    <div className="mt-9 grid items-stretch gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1.5fr_.5fr]">
      <div className="card relative grid grid-cols-2 gap-2 p-3 sm:gap-4 sm:p-8 lg:grid-cols-4">
        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path className="circuit-line" d="M125 100 H375 H625 H875 V300 H625 H375 H125" fill="none"/></svg>
        {nodes.map(([Icon,name],i)=><button key={name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className={`relative z-10 min-h-28 rounded-xl border p-3 text-left transition-all sm:min-h-32 sm:rounded-2xl sm:p-4 ${active===i?"border-cyan-300/40 bg-cyan-300/[.08] shadow-[0_0_30px_rgba(53,231,255,.08)]":"border-white/8 bg-[#080d15]/90 hover:border-white/20"}`}><Icon size={18} className={active===i?"text-cyan-300":"text-slate-500"}/><span className="mt-5 block text-xs font-medium leading-5 sm:mt-7 sm:text-sm">{name}</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-slate-600 sm:text-[9px]">Módulo {String(i+1).padStart(2,"0")}</span></button>)}
      </div>
      <SpotlightCard className="flex min-h-56 flex-col justify-between p-5 sm:min-h-64 sm:p-7"><span className="font-mono text-xs text-cyan-300">0{active+1} / 08</span><div><div className="icon-box mb-4 sm:mb-5">{(()=>{const Icon=nodes[active][0];return <Icon/>})()}</div><h3 className="text-lg font-medium sm:text-xl">{nodes[active][1]}</h3><p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{nodes[active][2]}</p></div><span className="mt-5 text-xs text-slate-600">Componente do fluxo experimental</span></SpotlightCard>
    </div></div></section>;
}
