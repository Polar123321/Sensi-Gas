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
  return <section id="funcionamento" className="section overflow-hidden"><div className="container-shell"><SectionHeading eyebrow="Diagrama · 08 módulos" title="Como o sinal percorre o circuito" text="Selecione um módulo com o cursor ou o teclado para acompanhar o caminho da informação, desde o ambiente até os alertas e a resposta planejada."/>
    <div className="mt-9 grid items-stretch gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1.5fr_.5fr]">
      <div className="window relative">
        <div className="window-bar"><span className="window-dot"/><span className="window-dot"/><span className="window-dot"/><span className="plate-num ml-2">diagrama-de-fluxo</span></div>
        <div className="relative grid grid-cols-2 gap-2 p-3 sm:gap-4 sm:p-8 lg:grid-cols-4">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path className="circuit-line" d="M125 100 H375 H625 H875 V300 H625 H375 H125" fill="none"/></svg>
          {nodes.map(([Icon,name],i)=><button key={name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className={`relative z-10 min-h-28 rounded-2xl border p-3 text-left transition-all sm:min-h-32 sm:p-4 ${active===i?"border-[#8ea2ff]/45 bg-[#8ea2ff]/[.07]":"border-white/8 bg-[#0b0b0e]/90 hover:border-white/20"}`}><Icon size={18} className={active===i?"text-[#8ea2ff]":"text-[#616168]"}/><span className="mt-5 block text-xs font-medium leading-5 text-[#f4f4f7] sm:mt-7 sm:text-sm">{name}</span><span className="plate-num mt-1 block">Módulo {String(i+1).padStart(2,"0")}</span></button>)}
        </div>
      </div>
      <SpotlightCard code={`08 / ${String(active+1).padStart(2,"0")}`} className="flex min-h-56 flex-col justify-between p-5 sm:min-h-64 sm:p-7"><span className="plate-num">registro atual</span><div><div className="icon-box mb-4 mt-4 sm:mb-5">{(()=>{const Icon=nodes[active][0];return <Icon/>})()}</div><h3 className="text-lg font-medium text-[#f4f4f7] sm:text-xl">{nodes[active][1]}</h3><p className="mt-3 text-sm leading-6 text-[#98989f] sm:text-base sm:leading-7">{nodes[active][2]}</p></div><span className="mt-5 text-xs text-[#616168]">Componente do fluxo experimental</span></SpotlightCard>
    </div></div></section>;
}
