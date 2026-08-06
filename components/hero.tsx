"use client";

import { motion } from "framer-motion";
import { Activity, ArrowDown, BellRing, BookOpen, Code2, Cpu, Flame, Play, Radio, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { StatusDot } from "./ui";

const particles = Array.from({ length: 18 }, (_, i) => ({ left: `${8 + ((i * 37) % 86)}%`, top: `${10 + ((i * 53) % 78)}%`, dx: `${(i % 2 ? 1 : -1) * (12 + i)}px`, dy: `${-15 - (i % 5) * 9}px`, dur: `${3 + (i % 4)}s` }));
const features = [
  { id: "mq4", label: "Sensor MQ-4", Icon: Radio },
  { id: "glp", label: "Detecção de GLP", Icon: Flame },
  { id: "alerts", label: "Alertas sonoros e visuais", Icon: BellRing },
  { id: "esp32", label: "Automação com ESP32", Icon: Cpu },
  { id: "realtime", label: "Monitoramento em tempo real", Icon: Activity },
  { id: "education", label: "Protótipo educacional", Icon: BookOpen },
  { id: "opensource", label: "Projeto de código aberto", Icon: Code2 },
  { id: "safety", label: "Segurança inteligente", Icon: ShieldCheck },
];

function FeatureItem({ feature, visible }: { feature: (typeof features)[number]; visible: boolean }) {
  const Icon = feature.Icon;
  return <motion.div className="hero-feature" initial={false} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }} transition={{ duration: .56, ease: "easeInOut" }}>
    <Icon size={14} aria-hidden="true" />
    <span>{feature.label}</span>
  </motion.div>;
}

export function Hero() {
  const [featureOffset, setFeatureOffset] = useState(0);
  const [featuresVisible, setFeaturesVisible] = useState(true);
  useEffect(() => {
    let swapTimer: number | undefined;
    const cycle = () => {
      setFeaturesVisible(false);
      swapTimer = window.setTimeout(() => {
        setFeatureOffset((value) => (value + 1) % features.length);
        setFeaturesVisible(true);
      }, 600);
    };
    const cycleTimer = window.setInterval(cycle, 4400);
    return () => {
      window.clearInterval(cycleTimer);
      if (swapTimer !== undefined) window.clearTimeout(swapTimer);
    };
  }, []);
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="inicio" className="hero-mesh relative min-h-[760px] overflow-hidden pb-44 pt-28 sm:min-h-[860px] sm:pb-56 sm:pt-32 lg:min-h-[940px] lg:pb-64">
      <div className="mesh-blob mesh-blob-one"/><div className="mesh-blob mesh-blob-two"/><div className="mesh-blob mesh-blob-three"/>
      <div className="particles">{particles.map((p,i)=><i key={i} className="particle" style={{ left:p.left, top:p.top, "--dx":p.dx, "--dy":p.dy, "--dur":p.dur } as React.CSSProperties}/>)}</div>
      <div className="container-shell relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }} transition={{ duration:.8 }} className="hero-intro flex max-w-4xl flex-col items-center">
          <div className="badge mb-6 border-white/20 bg-white/10 text-center text-white backdrop-blur-xl sm:mb-7"><StatusDot /><span>MQ-4 + ESP32 · detecção de GLP</span></div>
          <h1 className="display-title gradient-text !mb-8 !mt-1">SENSIGÁS</h1>
          <p className="mb-5 max-w-3xl text-[clamp(1.65rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-.05em] text-white">Detecção de GLP que transforma sinais em alertas.</p>
          <p className="lead !max-w-2xl !text-white/70">Um protótipo educacional com sensor MQ-4 e ESP32 DevKit V1, criado para detectar GLP e reagir com alertas visuais e sonoros.</p>
          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
            <button className="btn btn-primary w-full sm:w-auto" onClick={() => scroll("projeto")}>Explorar projeto <ArrowDown size={18}/></button>
            <button className="btn btn-secondary w-full !border-white/20 !bg-white/10 backdrop-blur-xl sm:w-auto" onClick={() => scroll("prototipo")}><Play size={17}/> Simular detecção</button>
          </div>
          <div className="hero-features mt-8 grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-4 sm:mt-10 sm:grid-cols-4 sm:gap-x-6 lg:gap-x-10" aria-label="Recursos do protótipo">
            {[0, 1, 2, 3].map((slot) => {
              const feature = features[(slot + featureOffset) % features.length];
              return <div className="hero-feature-slot" key={slot}>
                <FeatureItem feature={feature} visible={featuresVisible} />
              </div>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
