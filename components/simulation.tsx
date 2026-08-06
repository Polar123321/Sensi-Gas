"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Activity, BellRing, CircleStop, Cpu, Gauge, Lightbulb, Play, RotateCcw } from "lucide-react";
import { SectionHeading, StatusDot } from "./ui";

type Level = "safe" | "attention" | "risk" | "critical";
const configs = {
  safe: { label: "Ambiente seguro", color: "#38e88f", detail: "Leitura abaixo do limite de atenção" },
  attention: { label: "Atenção", color: "#f5c451", detail: "Elevação simulada em observação" },
  risk: { label: "Risco detectado", color: "#ff784d", detail: "Alertas visuais e sonoros acionados" },
  critical: { label: "Estado crítico", color: "#ff4d5e", detail: "Bloqueio de válvula simulado" },
};
function getLevel(value: number): Level { return value < 35 ? "safe" : value < 65 ? "attention" : value < 85 ? "risk" : "critical"; }

export function Simulation() {
  const [value, setValue] = useState(18);
  const [running, setRunning] = useState(false);
  const [points, setPoints] = useState([12,14,16,15,17,18]);
  const [events, setEvents] = useState(["Sistema inicializado", "Sensor em monitoramento"]);
  const previous = useRef<Level>("safe");
  const level = getLevel(value); const cfg = configs[level];

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setValue(v => v >= 96 ? 12 : Math.min(100, v + 3)), 700);
    return () => window.clearInterval(timer);
  }, [running]);
  useEffect(() => {
    const timer = window.setInterval(() => setPoints(p => [...p.slice(-22), value]), 650);
    return () => window.clearInterval(timer);
  }, [value]);
  useEffect(() => {
    if (previous.current !== level) {
      setEvents(e => [`${new Date().toLocaleTimeString("pt-BR", { hour:"2-digit", minute:"2-digit", second:"2-digit" })} · ${configs[level].label}`, ...e].slice(0,5));
      previous.current = level;
    }
  }, [level]);
  const polyline = useMemo(() => points.map((p,i)=>`${(i/(Math.max(points.length-1,1)))*100},${95-p*.82}`).join(" "), [points]);
  const reset = () => { setRunning(false); setValue(18); setPoints([12,14,16,15,17,18]); setEvents(["Simulação reiniciada", "Sensor em monitoramento"]); previous.current="safe"; };
  const statuses = [
    [Activity, "Sensor MQ-4", "Monitorando", true], [Cpu, "ESP32 DevKit V1", "Processando", true],
    [BellRing, "Buzzer", level === "risk" || level === "critical" ? "Ativo" : "Inativo", level === "risk" || level === "critical"],
    [Lightbulb, "LEDs", level === "safe" ? "Verde" : level === "attention" ? "Amarelo" : "Vermelho", true],
    [CircleStop, "Válvula", level === "critical" ? "Bloqueada*" : "Aberta", level === "critical"],
  ] as const;

  return (
    <section id="prototipo" className="section overflow-hidden">
      <div className="ambient-orb orb-blue -right-64 top-24" />
      <div className="container-shell">
        <SectionHeading eyebrow="Demonstração interativa" title="Simulação do sistema" text="O protótipo físico utiliza o MQ-4 para detectar GLP. Aqui, ajuste a concentração para visualizar a lógica dos alertas; os valores desta interface são demonstrativos e não correspondem à leitura ao vivo do sensor." />
        <div className="glass mt-9 rounded-[20px] p-2.5 sm:mt-12 sm:rounded-[28px] sm:p-5 lg:p-7" style={{ "--state-color": cfg.color } as React.CSSProperties}>
          <div className="mb-5 flex flex-col gap-4 border-b border-white/8 px-1 pb-5 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-0">
            <div className="flex items-center gap-3"><span className="relative"><StatusDot color={cfg.color}/><i className="absolute inset-0 animate-ping rounded-full" style={{background:cfg.color,opacity:.25}}/></span><div><strong className="block text-sm">SENSIGÁS Control</strong><span className="text-xs text-slate-500">Ambiente experimental / SIM-01</span></div></div>
            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto"><button className="btn btn-secondary w-full !min-h-10 !px-3 !text-xs sm:w-auto sm:!px-4" onClick={()=>setRunning(!running)}>{running ? <><span className="size-2 rounded-sm bg-current"/> Pausar</> : <><Play size={14}/> Iniciar</>}</button><button className="btn btn-secondary w-full !min-h-10 !px-3 !text-xs sm:w-auto sm:!px-4" onClick={reset}><RotateCcw size={14}/> Reiniciar</button></div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.45fr_.8fr]">
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-[.42fr_1fr]">
                <div className="card flex min-h-44 flex-col justify-between p-4 sm:min-h-52 sm:p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400"><span>Nível atual</span><Gauge size={17}/></div>
                  <div><motion.strong key={value} initial={{opacity:.5}} animate={{opacity:1}} className="font-mono text-5xl tracking-[-.08em] sm:text-6xl" style={{color:cfg.color}}>{value}</motion.strong><span className="ml-2 text-[10px] text-slate-500 sm:text-xs">escala visual</span></div>
                  <div><strong className="block text-sm" style={{color:cfg.color}}>{cfg.label}</strong><span className="text-xs text-slate-500">{cfg.detail}</span></div>
                </div>
                <div className="card chart-grid min-h-48 p-3 sm:min-h-52 sm:p-4" aria-label="Gráfico da leitura simulada em tempo real">
                  <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-slate-500"><span>Telemetria simulada</span><span>tempo real</span></div>
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-36 w-full overflow-visible sm:h-40" role="img" aria-label={`Gráfico no nível ${value}`}>
                    <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor={cfg.color} stopOpacity=".3"/><stop offset="1" stopColor={cfg.color} stopOpacity="0"/></linearGradient></defs>
                    <polygon points={`0,100 ${polyline} 100,100`} fill="url(#chartFill)"/><polyline points={polyline} fill="none" stroke={cfg.color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="card p-4 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-3 text-sm"><label htmlFor="gas-range" className="font-medium">Concentração simulada</label><span className="shrink-0 font-mono" style={{color:cfg.color}}>{value}/100</span></div>
                <input id="gas-range" className="range" type="range" min="0" max="100" value={value} onChange={e=>{setRunning(false);setValue(Number(e.target.value))}} aria-describedby="simulation-note"/>
                <div className="mt-3 flex justify-between gap-1 font-mono text-[7px] uppercase tracking-wide text-slate-600 min-[380px]:text-[8px] sm:text-[9px] sm:tracking-wider"><span>Seguro</span><span>Atenção</span><span>Risco</span><span>Crítico</span></div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="card px-4 py-2 sm:px-5"><h3 className="pt-4 text-xs uppercase tracking-[.14em] text-slate-500">Estado dos módulos</h3>{statuses.map(([Icon,label,status,on])=><div className="status-row" key={label}><span className="flex min-w-0 items-center gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm"><Icon className="shrink-0" size={16}/><span className="break-words">{label}</span></span><span className="status-pill shrink-0" style={{color:on?cfg.color:"#718096"}}><StatusDot color={on?cfg.color:"#526070"}/>{status}</span></div>)}</div>
              <div className="card p-4 sm:p-5"><h3 className="mb-4 text-xs uppercase tracking-[.14em] text-slate-500">Histórico de eventos</h3><ol className="space-y-4">{events.map((event,i)=><li key={`${event}-${i}`} className="flex gap-3 text-xs leading-5 text-slate-400"><span className="mt-1 h-4 w-px shrink-0 bg-cyan-300/30"/><span>{event}</span></li>)}</ol></div>
            </div>
          </div>
          <p id="simulation-note" className="mt-5 text-center text-xs text-slate-500">* O bloqueio de válvula é uma função futura representada apenas nesta simulação visual.</p>
        </div>
      </div>
    </section>
  );
}
