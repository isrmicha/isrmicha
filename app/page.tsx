import Image from "next/image";

// Inline SVG Icons
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function SmartphoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BriefcaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function SparklesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
    </svg>
  );
}

// Data
const SKILL_CATEGORIES = [
  {
    title: "Frontend & Mobile",
    description: "Interfaces reativas, responsivas e focadas na experiência do usuário.",
    skills: [
      "React",
      "Next.js (App Router)",
      "React Native",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Serviços escaláveis, integração de APIs e arquitetura de dados.",
    skills: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "PostgreSQL / SQL",
      "Autenticação & JWT",
    ],
  },
  {
    title: "Ferramentas & Ecossistema",
    description: "DevOps, controle de versão, documentação e novas tecnologias.",
    skills: [
      "Git & GitHub",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Web3 & Smart Contracts",
      "Fumadocs / MDX",
      "Vite",
      "System Design",
    ],
  },
];

const PROJECTS = [
  {
    title: "Cardápio Digital",
    category: "E-Commerce / Web App",
    description:
      "Plataforma completa de cardápio digital interativo e pedidos online, construída para proporcionar rapidez, responsividade e facilidade de navegação.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    demoUrl: "https://cardapio-digital-pi-olive.vercel.app",
    repoUrl: "https://github.com/isrmicha/cardapio-digital",
    featured: true,
  },
  {
    title: "Schedule",
    category: "SaaS / Produtividade",
    description:
      "Aplicação moderna de agendamento de consultas e gerenciamento de horários, simplificando fluxos de reserva com interface fluida.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://schedule-gamma-six.vercel.app",
    repoUrl: "https://github.com/isrmicha/schedule",
    featured: true,
  },
  {
    title: "PokePath TD Wiki",
    category: "Docs / Games",
    description:
      "Enciclopédia e guia de estratégias para o jogo PokePath Tower Defense, desenvolvida com Fumadocs para documentação rápida e moderna com suporte a MDX.",
    tags: ["Fumadocs", "Next.js", "TypeScript", "MDX"],
    demoUrl: "https://pokepath-wiki.vercel.app",
    repoUrl: "https://github.com/isrmicha/pokepath-wiki",
    featured: true,
  },
  {
    title: "Web3 Rock Paper Scissors",
    category: "Web3 / Blockchain DApp",
    description:
      "Jogo descentralizado de Pedra, Papel e Tesoura com conexão a carteiras Web3 e execução de partidas em smart contracts na blockchain.",
    tags: ["Solidity", "Web3", "React", "Smart Contracts"],
    demoUrl: "https://rock-paper-scissors-web3.vercel.app",
    repoUrl: "https://github.com/isrmicha/web3-rock-paper-scissors",
    featured: false,
  },
  {
    title: "Super Promos",
    category: "E-Commerce / Agregador",
    description:
      "Plataforma agregadora de promoções e ofertas imperdíveis, reunindo descontos e oportunidades de compra com filtros por categoria.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://super-promos.vercel.app",
    repoUrl: "https://github.com/isrmicha/promos",
    featured: false,
  },
  {
    title: "Karaoke Online",
    category: "Multimídia / Web App",
    description:
      "Aplicação web interativa para karaokê, sincronizando reprodução de áudio com exibição dinâmica de letras de músicas em tempo real.",
    tags: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
    demoUrl: "https://karaoke-bice.vercel.app",
    repoUrl: "https://github.com/isrmicha/karaoke",
    featured: false,
  },
  {
    title: "Uminha - Bora Tomar Uma",
    category: "Mobile App (Android)",
    description:
      "Aplicativo nativo para Android publicado pela ISR Studio, facilitando encontrar bares, pubs e pontos de encontro para beber cerveja por perto.",
    tags: ["React Native", "Android", "Geolocation", "Mobile"],
    demoUrl: "https://m.apkpure.com/br/uminha-bora-tomar-uma/com.isrstudio.uminhabeer",
    repoUrl: null,
    isApk: true,
    featured: false,
  },
  {
    title: "Pokédex",
    category: "Web App / API Integration",
    description:
      "Enciclopédia interativa de Pokémons com busca instantânea em tempo real, cards de atributos detalhados e integração direta com a PokeAPI.",
    tags: ["React", "TypeScript", "PokeAPI", "CSS3"],
    demoUrl: "https://pokedex-isrmicha.vercel.app",
    repoUrl: "https://github.com/isrmicha/pokedex",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090d16]/80 border-b border-white/5 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center space-x-2.5 font-mono text-sm font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span>isrmicha.dev</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#habilidades" className="hover:text-white transition-colors">
              Habilidades
            </a>
            <a href="#projetos" className="hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#experiencia" className="hover:text-white transition-colors">
              Trajetória
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Israel Neves"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Israel Neves"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:isrmicha@gmail.com"
              className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
            >
              <MailIcon className="w-3.5 h-3.5" />
              <span>Fale Comigo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28 w-full">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center text-center space-y-8 pt-4 md:pt-10">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Disponível para projetos & oportunidades de engenharia</span>
          </div>

          {/* Profile Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden p-1 bg-[#090d16]">
              <Image
                src="https://avatars.githubusercontent.com/u/8812005?v=4"
                alt="Israel Neves (isrmicha)"
                width={144}
                height={144}
                priority
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Headline & Subtitles */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Olá, sou{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Israel Neves
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-slate-300">
              Software Developer · Full-Stack & Mobile
            </p>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor de software baseado no Brasil, fundador da <strong className="text-slate-200 font-semibold">ISR Studio</strong> e com experiência corporativa de alta escala no <strong className="text-slate-200 font-semibold">Grupo Boticário</strong>. Especializado em construir aplicações ágeis, intuitivas e robustas com React, Next.js, React Native e TypeScript.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              <span>Ver Projetos</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:isrmicha@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <MailIcon className="w-4 h-4 text-blue-400" />
              <span>Entrar em Contato</span>
            </a>
          </div>

          {/* Highlight metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 w-full max-w-4xl border-t border-white/5">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">90+</div>
              <div className="text-xs text-slate-400 mt-1">Repositórios no GitHub</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 font-mono">10+</div>
              <div className="text-xs text-slate-400 mt-1">Anos de Código</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">Full-Stack</div>
              <div className="text-xs text-slate-400 mt-1">Web & Mobile</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-mono">Boticário</div>
              <div className="text-xs text-slate-400 mt-1">Experiência Enterprise</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="space-y-8 scroll-mt-24">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <SparklesIcon className="w-4 h-4" />
              <span>Tecnologias & Ferramentas</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Stack Tecnológica
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Conjunto de ferramentas modernas que utilizo para transformar ideias em produtos digitais de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{category.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projetos" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
                <CodeIcon className="w-4 h-4" />
                <span>Trabalhos Selecionados</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Projetos & Aplicações
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl">
                Projetos reais com código aberto e demonstrações em produção.
              </p>
            </div>
            <a
              href="https://github.com/isrmicha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>Ver todos os repositórios</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group relative flex flex-col justify-between rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Destaque
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-6 mt-4 border-t border-white/5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
                    >
                      {project.isApk ? (
                        <>
                          <SmartphoneIcon className="w-3.5 h-3.5" />
                          <span>Baixar APK</span>
                        </>
                      ) : (
                        <>
                          <ExternalLinkIcon className="w-3.5 h-3.5" />
                          <span>Acessar Demo</span>
                        </>
                      )}
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Código Fonte</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & About Section */}
        <section id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <BriefcaseIcon className="w-4 h-4" />
              <span>Carreira & Experiência</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Trajetória Profissional
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Equilíbrio entre desafios técnicos corporativos de larga escala e iniciativas empreendedoras ágeis.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Grupo Boticário</h3>
                  <p className="text-sm font-medium text-blue-400">Engenharia de Software / Desenvolvimento Frontend</p>
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                  Full-Time Enterprise
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Atuação em soluções tecnológicas corporativas de alta disponibilidade para uma das maiores empresas de varejo e beleza do mundo. Desenvolvimento e sustentação de interfaces com React, TypeScript, padrões sólidos de arquitetura, testes e integração contínua.
              </p>
            </div>

            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">ISR Studio</h3>
                  <p className="text-sm font-medium text-cyan-400">Fundador & Desenvolvedor de Produtos</p>
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                  Software Studio
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Criação e lançamento de produtos autorais, abrangendo desde aplicativos móveis nativos (como o app Uminha) até plataformas web completas (Cardápio Digital, wikis e DApps Web3). Foco total em autonomia de produto, UX moderna e arquitetura serverless de baixo custo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contato" className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] scroll-mt-24">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative max-w-2xl space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Estou sempre aberto a novas oportunidades profissionais, parcerias de projetos ou conversas sobre tecnologia, React, TypeScript e Web3.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="mailto:isrmicha@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <MailIcon className="w-4 h-4" />
                <span>isrmicha@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/isrmicha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/isrmicha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4 pt-4 text-xs text-slate-400">
              <div className="inline-flex items-center space-x-1.5">
                <MapPinIcon className="w-4 h-4 text-slate-400" />
                <span>Brasil (Disponível Remoto)</span>
              </div>
              <span>•</span>
              <div>Resposta rápida por e-mail</div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 mt-20 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Israel Neves (isrmicha). Todos os direitos reservados.</p>
          <p className="font-mono text-[11px] text-slate-600">
            Next.js 16 · Tailwind v4 · isrmicha.dev
          </p>
        </div>
      </footer>
    </div>
  );
}
