import Image from "next/image";
import { AlertTriangle, ArrowUp, Atom, BellRing, Box, Cable, CheckCircle2, ChevronRight, CircleGauge, CircleStop, Cloud, Code2, Cpu, Flame, FlaskConical, Gauge, GraduationCap, HousePlug, Lightbulb, Radio, Router, ShieldAlert, Smartphone, Sparkles, Users, Wifi, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Simulation } from "@/components/simulation";
import { Architecture } from "@/components/architecture";
import { Preloader } from "@/components/preloader";
import { ScienceAccordion } from "@/components/science-accordion";
import { SafetyModal } from "@/components/safety-modal";
import { Reveal, SectionHeading, SensorLogo, SpotlightCard } from "@/components/ui";
import { futureItems, methodology, team, technologies, navItems } from "@/data/content";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/Sensi-Gas" : "";

const problemCards = [
  [Flame,"Risco de incêndio","O contato do gás acumulado com uma fonte de ignição pode iniciar um incêndio."],
  [Zap,"Risco de explosão","Em determinadas condições, uma mistura inflamável confinada pode provocar explosões."],
  [ShieldAlert,"Exposição silenciosa","Um vazamento pode passar despercebido, ampliando o tempo de exposição ao risco."],
] as const;
const flow = [
  [Radio,"Leitura","O sensor analisa continuamente o ambiente."], [Cpu,"Processamento","O ESP32 interpreta as leituras."],
  [Gauge,"Comparação","O valor é comparado ao limite definido."], [BellRing,"Alerta","LED vermelho e buzzer são acionados."],
  [CircleStop,"Resposta futura","Um mecanismo poderá bloquear a válvula."],
] as const;
const techIcons = [Cpu,Radio,Atom,BellRing,Lightbulb,Box,CircleGauge,Cable,Router,Code2];
const futureIcons = [Gauge,FlaskConical,Smartphone,Wifi,Cloud,Radio,Zap,CircleStop,HousePlug,Box];

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3A5.7 5.7 0 0 0 19.2 3a5.3 5.3 0 0 0-.1-4S17.9-1.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-1.4 4.9-1 4.9-1a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.4 6.9 6.7 7.3A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg>;
}

export default function Home() {
  return <>
    <Preloader/><Navbar/>
    <main>
      <Hero/>
      <div className="divider"/>
      <div className="dossier">
      <section id="projeto" className="section overflow-hidden">
        <div className="ambient-orb orb-purple -left-64 top-1/3"/>
        <div className="container-shell">
          <SectionHeading eyebrow="Registro 01 · O problema" title="Um vazamento invisível pode causar grandes consequências." text="Gases combustíveis como o GLP fazem parte da rotina de muitos lares. Quando ocorre um vazamento, porém, o acúmulo pode representar riscos à vida, ao patrimônio e ao ambiente."/>
          <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">{problemCards.map(([Icon,title,text],i)=><Reveal key={title} delay={i*.08}><SpotlightCard code={`RISCO 0${i+1}`} className="h-full p-5 sm:p-8"><div className="icon-box mt-2"><Icon/></div><h3 className="mt-10 text-lg font-medium text-[#f4f4f7] sm:mt-16 sm:text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#98989f] sm:text-base sm:leading-7">{text}</p></SpotlightCard></Reveal>)}</div>
        </div>
      </section>
      <section className="section bg-white/[.012]">
        <div className="container-shell">
          <SectionHeading eyebrow="Registro 02 · A solução" title="Uma camada adicional de proteção." text="O SENSIGÁS foi concebido para realizar leituras contínuas e reagir quando o sinal ultrapassa limites definidos no programa. É um protótipo experimental em desenvolvimento, sujeito a calibração e novos testes."/>
          <div className="relative mt-10 grid gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-px overflow-hidden bg-white/10 lg:block"><div className="h-full w-1/3 animate-[shimmer_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-[#8ea2ff] to-transparent bg-[length:200%_100%]"/></div>
            {flow.map(([Icon,title,text],i)=><Reveal key={title} delay={i*.08} className="relative"><div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#0b0b0e] p-4 sm:gap-4 sm:p-5 lg:block lg:min-h-64 lg:border-0 lg:bg-transparent lg:p-0"><span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-[#8ea2ff]/25 bg-[#131317] text-[#8ea2ff] sm:size-[72px]"><Icon size={21}/></span><div className="min-w-0"><span className="plate-num mb-2 mt-0 block sm:mb-3 lg:mt-9">Etapa 0{i+1}</span><h3 className="font-medium text-[#f4f4f7]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#98989f]">{text}</p></div></div></Reveal>)}
          </div>
        </div>
      </section>
      <Simulation/>
      <Architecture/>
      <section id="tecnologia" className="section">
        <div className="container-shell"><SectionHeading eyebrow="Registro 03 · Stack física" title="Tecnologias que dão forma ao protótipo" text="Um conjunto acessível de hardware e software transforma variações do ambiente em sinais que podem ser interpretados, comparados e comunicados."/>
          <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">{technologies.map(([title,text],i)=>{const Icon=techIcons[i];return <Reveal key={title} delay={(i%5)*.05}><SpotlightCard code={`CMP-${String(i+1).padStart(2,"0")}`} className="h-full p-5 sm:min-h-64"><Icon className="text-[#8ea2ff] mt-2" size={22}/><h3 className="mt-8 font-medium text-[#f4f4f7] sm:mt-14">{title}</h3><p className="mt-3 text-sm leading-6 text-[#98989f]">{text}</p></SpotlightCard></Reveal>})}</div>
        </div>
      </section>
      <section className="section bg-white/[.012]">
        <div className="container-shell"><SectionHeading eyebrow="Registro 04 · Estudo comparativo" title="MQ-4 × MQ-5: o MQ-4 venceu no protótipo" text="Nos testes realizados pela equipe SENSIGÁS, o MQ-4 respondeu à maior variedade de gases avaliados, incluindo GLP. Por esse resultado experimental, ele foi escolhido como o sensor oficial do protótipo."/>
          <p className="mt-7 text-xs text-[#616168] sm:hidden">Deslize a tabela para o lado para comparar →</p><Reveal className="dossier-table-wrap mt-3 sm:mt-12"><table className="dossier-table"><thead><tr><th>Critério</th><th>MQ-4</th><th>MQ-5</th></tr></thead><tbody>
            <tr><td>Resposta nos testes da equipe</td><td>Respondeu à maior variedade de gases avaliados</td><td>Apresentou resposta mais restrita no experimento</td></tr>
            <tr><td>Detecção de GLP</td><td>Detectado no protótipo SENSIGÁS</td><td>Também indicado para GLP pelo fabricante*</td></tr>
            <tr><td>Integração com o ESP32</td><td>Montado, programado e testado</td><td>Avaliado apenas na etapa comparativa</td></tr>
            <tr><td>Resultado do projeto</td><td><strong className="text-[#7fb069]">Selecionado — vencedor</strong></td><td>Não selecionado</td></tr>
            <tr><td>Aplicação atual</td><td>Sensor oficial do protótipo</td><td>Referência de comparação</td></tr></tbody></table></Reveal>
          <p className="mt-4 text-xs leading-6 text-[#616168]">* A ficha técnica do fabricante apresenta o MQ-4 com foco em metano e o MQ-5 com foco em GLP e metano. A escolha do MQ-4 descrita aqui corresponde ao resultado observado nos testes específicos da equipe SENSIGÁS.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-shell"><SectionHeading eyebrow="Registro 05 · Metodologia" title="Da pesquisa ao protótipo" text="O SENSIGÁS é uma pesquisa aplicada e experimental: combina estudo bibliográfico, montagem, programação, observação e refinamento progressivo."/>
          <div className="relative mt-10 grid gap-x-12 gap-y-0 sm:mt-14 md:grid-cols-2"><div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-gradient-to-b from-[#8ea2ff]/50 via-white/10 to-transparent md:block"/>{methodology.map(([num,title,text],i)=><Reveal key={title} className={`${i%2?"md:translate-y-20":""} relative border-t border-white/10 py-6 sm:py-8 md:px-7`}><span className="plate-num text-[#8ea2ff]">{num}</span><h3 className="mt-3 text-lg font-medium text-[#f4f4f7] sm:mt-4 sm:text-xl">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#98989f] sm:text-base sm:leading-7">{text}</p></Reveal>)}</div>
        </div>
      </section>
      <section className="section overflow-hidden bg-white/[.012]">
        <div className="ambient-orb orb-blue -right-64 top-0"/><div className="container-shell"><SectionHeading eyebrow="Registro 06 · Resultados e limites" title="Transparência também faz parte da ciência." text="O valor do experimento está tanto no que ele demonstra quanto nas perguntas que ainda precisam ser investigadas."/>
          <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2"><div className="plate p-5 sm:p-9"><CheckCircle2 className="text-[#7fb069]"/><h3 className="mt-6 text-xl font-medium text-[#f4f4f7] sm:mt-8 sm:text-2xl">Aprendizados alcançados</h3><ul className="mt-5 space-y-4 text-sm leading-6 text-[#98989f] sm:mt-6 sm:text-base">{["Estudo da resposta de sensores a gases inflamáveis.","Integração de eletrônica, programação e automação.","Implementação de estados visuais e alerta sonoro.","Compreensão prática da importância da calibração."].map(x=><li key={x} className="flex gap-3"><ChevronRight className="mt-1 shrink-0 text-[#7fb069]" size={15}/>{x}</li>)}</ul></div>
            <div className="plate p-5 sm:p-9"><AlertTriangle className="text-[#8ea2ff]"/><h3 className="mt-6 text-xl font-medium text-[#f4f4f7] sm:mt-8 sm:text-2xl">Limitações atuais</h3><ul className="mt-5 space-y-4 text-sm leading-6 text-[#98989f] sm:mt-6 sm:text-base">{["Calibração influencia diretamente as leituras.","Instalação e condições ambientais podem alterar a resposta.","A resposta a diferentes gases não identifica isoladamente qual gás está presente.","São necessários testes controlados mais profundos."].map(x=><li key={x} className="flex gap-3"><ChevronRight className="mt-1 shrink-0 text-[#8ea2ff]" size={15}/>{x}</li>)}</ul></div></div>
          <Reveal className="mt-4 flex gap-3 border border-[#d43f3f]/25 bg-[#d43f3f]/[.06] p-4 text-sm leading-6 text-red-100/80 sm:mt-5 sm:gap-4 sm:p-6"><ShieldAlert className="mt-0.5 shrink-0 text-[#d43f3f]" size={20}/><div><p><strong className="text-[#f4f4f7]">Aviso de segurança:</strong> Este projeto possui finalidade educacional e experimental. Não substitui detectores certificados nem procedimentos oficiais de segurança.</p><SafetyModal/></div></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container-shell"><SectionHeading eyebrow="Registro 07 · Roadmap" title="Próximos sinais no horizonte" text="As melhorias propostas orientam a continuidade da pesquisa e descrevem possibilidades — não funcionalidades já validadas."/>
          <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">{futureItems.map((title,i)=>{const Icon=futureIcons[i];return <Reveal key={title} className="h-full"><div className="plate group h-full p-5 transition-colors hover:bg-[#131317] sm:min-h-48 sm:p-6"><Icon size={20} className="text-[#616168] transition-colors group-hover:text-[#8ea2ff]"/><h3 className="mt-9 text-sm font-medium leading-6 text-[#f4f4f7] sm:mt-16">{title}</h3><span className="plate-num mt-2 block">Em perspectiva</span></div></Reveal>})}</div>
        </div>
      </section>
      <section id="equipe" className="section bg-white/[.012]">
        <div className="container-shell"><SectionHeading eyebrow="Registro 08 · Equipe" title="Ciência construída em conjunto" text="Estudantes e orientadoras conectados pela investigação, pela aprendizagem prática e pelo desenvolvimento responsável de tecnologia."/>
          <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">{team.map((name,i)=>{const initials=name.split(" ").filter((_,j,a)=>j===0||j===a.length-1).map(n=>n[0]).join("");return <Reveal key={name} delay={(i%3)*.06}><SpotlightCard className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5"><div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#8ea2ff]/25 bg-gradient-to-br from-[#8ea2ff]/10 to-[#8b5cf6]/10 font-mono text-xs text-[#8ea2ff] sm:size-14 sm:text-sm">{initials}</div><div className="min-w-0"><h3 className="break-words text-sm font-medium leading-5 text-[#f4f4f7] sm:text-base">{name}</h3><span className="plate-num mt-2 block">Pesquisador</span></div></SpotlightCard></Reveal>})}</div>
          <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-2"><div className="plate p-5 sm:p-7"><GraduationCap className="text-[#8b5cf6]"/><span className="mt-6 block text-xs uppercase tracking-widest text-[#98989f] sm:mt-8">Orientação</span><p className="mt-3 text-lg text-[#f4f4f7] sm:text-xl">Prof. Jacicleuma <span className="text-[#616168]">&</span> Prof. Ruth</p></div><div className="plate p-5 sm:p-7"><Users className="text-[#8ea2ff]"/><span className="mt-6 block text-xs uppercase tracking-widest text-[#98989f] sm:mt-8">Instituição</span><p className="mt-3 text-lg leading-7 text-[#f4f4f7] sm:text-xl">Escola Doutor José Fernandes de Melo</p><p className="mt-2 text-sm text-[#98989f]">Pau dos Ferros · 2026</p></div></div>
        </div>
      </section>
      <section id="pesquisa" className="section">
        <div className="container-shell"><SectionHeading eyebrow="Registro 09 · Seção científica" title="A pesquisa por trás do sinal" text="Explore os elementos centrais do trabalho científico em uma leitura organizada e objetiva."/><ScienceAccordion/></div>
      </section>
      <section className="pb-8"><div className="container-shell"><div className="glass relative overflow-hidden px-5 py-14 text-center sm:px-12 sm:py-20"><div className="ambient-orb orb-blue left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <Sparkles className="relative mx-auto text-[#8ea2ff]"/>
        <h2 className="relative mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,9vw,5.2rem)] font-medium leading-[.98] tracking-[-.045em] text-[#f4f4f7]">Tecnologia, ciência e segurança conectadas.</h2><p className="relative mx-auto mt-5 max-w-xl text-sm leading-6 text-[#98989f] sm:mt-6 sm:text-base">SENSIGÁS é uma investigação em desenvolvimento sobre como a automação pode ampliar a percepção de risco no ambiente doméstico.</p><a href="#inicio" className="btn2 btn2-primary relative mt-7 w-full sm:mt-8 sm:w-auto">Voltar ao início <ArrowUp size={17}/></a></div></div></section>
      </div>
    </main>
    <footer className="dossier mt-14 border-t border-[#8ea2ff]/16 py-10 sm:mt-20 sm:py-12">
      <div className="container-shell grid gap-9 sm:grid-cols-2 lg:grid-cols-[1fr_.65fr_1fr]">
        <div><SensorLogo/><p className="mt-5 max-w-sm text-sm leading-6 text-[#98989f]">Protótipo científico com ESP32 DevKit V1 e sensor MQ-4 para detecção experimental de GLP. Tecnologia, ciência e segurança conectadas.</p></div>
        <div><h2 className="text-xs uppercase tracking-widest text-[#98989f]">Navegação</h2><div className="mt-5 grid grid-cols-2 gap-3">{navItems.map(([label, id])=><a key={id} href={`#${id}`} className="dossier-link text-sm">{label}</a>)}</div></div>
        <div className="sm:col-span-2 lg:col-span-1">
          <div><h2 className="text-xs uppercase tracking-widest text-[#98989f]">Projeto</h2><p className="mt-5 text-sm leading-6 text-[#98989f]">Escola Doutor José Fernandes de Melo<br/>Pau dos Ferros<br/>2026</p></div>
          <div className="relative mt-12 flex max-w-sm items-center gap-3 border border-[#8ea2ff]/16 bg-white/[.025] p-4 pr-14 text-sm leading-6 text-[#98989f] sm:pr-4">
            <p>Nosso site é código aberto! Dê uma olhada no GitHub.</p>
            <Image src={`${basePath}/thumbs-up-transparent.png`} alt="Emoji sorridente fazendo sinal de positivo" width={1209} height={1153} className="absolute -right-1 -top-16 h-auto w-20 -rotate-[12deg] drop-shadow-[0_14px_24px_rgba(245,190,35,.16)] sm:-right-2 sm:-top-20 sm:w-24"/>
            <a href="https://github.com/Polar123321/Sensi-Gas" target="_blank" rel="noreferrer" aria-label="Ver o código do SENSIGÁS no GitHub" title="Ver no GitHub" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-[#f4f4f7] transition hover:-translate-y-0.5 hover:border-[#8ea2ff]/40 hover:bg-[#8ea2ff]/10 hover:text-[#8ea2ff]"><GitHubIcon/></a>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-center text-xs leading-5 text-[#616168] sm:mt-12 sm:flex-row sm:justify-between sm:gap-4 sm:text-left"><span>© 2026 SENSIGÁS</span><span>Projeto educacional e experimental · Não certificado para segurança</span></div>
    </footer>
  </>;
}
