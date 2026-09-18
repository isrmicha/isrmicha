import Image from "next/image";

// Clean, lightweight SVG Icons
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64 1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Data Architecture
interface Project {
  title: string;
  slug: string;
  role: string;
  category: string;
  description: string;
  highlight: string;
  tags: string[];
  demoUrl: string;
  repoUrl?: string;
  status: "produção" | "ativo";
  year: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "PopNews",
    slug: "popnews",
    role: "Criador & Engenheiro de Software",
    category: "Web App / Conteúdo",
    description:
      "Plataforma inteligente de agregação e curadoria de notícias em tempo real. Interface de leitura sem atrito, crawler automatizado e infraestrutura serverless com alta taxa de entrega de conteúdo.",
    highlight: "Crawler automatizado & renderização edge ultra veloz",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Serverless", "Edge API"],
    demoUrl: "https://popnews.tech",
    status: "produção",
    year: "2025",
    featured: true,
  },
  {
    title: "Cardápio Digital",
    slug: "cardapio-digital",
    role: "Arquiteto Frontend",
    category: "E-Commerce / Gastronomia",
    description:
      "Solução web ágil para bares e restaurantes: navegação instantânea de cardápio, gestão de pedidos com carrinho em tempo real e fechamento direto via WhatsApp para o estabelecimento.",
    highlight: "Fluxo de pedidos sem fricção com integração direta WhatsApp",
    tags: ["React", "TypeScript", "Tailwind CSS", "State Management", "Vercel"],
    demoUrl: "https://cardapio-digital-amber.vercel.app",
    repoUrl: "https://github.com/isrmicha/cardapio-digital",
    status: "produção",
    year: "2024",
    featured: true,
  },
  {
    title: "Uminha",
    slug: "uminha",
    role: "Fundador & Desenvolvedor",
    category: "Mobile & Web / Finanças",
    description:
      "Plataforma de finanças e planejamento pessoal com arquitetura focada em simplicidade, privacidade e disponibilidade offline no ecossistema mobile.",
    highlight: "Arquitetura offline-first & experiência mobile fluida",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind", "Mobile UX"],
    demoUrl: "https://uminha.com.br",
    status: "produção",
    year: "2024",
    featured: true,
  },
  {
    title: "Super Promos",
    slug: "super-promos",
    role: "Desenvolvedor Full Stack",
    category: "Agregador / E-Commerce",
    description:
      "Agregador e curadoria de ofertas com categorização instantânea, histórico de descontos e links rastreáveis de afiliados com alto índice de conversão.",
    highlight: "Indexação veloz e filtros multidimensionais",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://super-promos.vercel.app",
    status: "ativo",
    year: "2024",
  },
  {
    title: "Karaoke Online",
    slug: "karaoke-online",
    role: "Desenvolvedor Frontend",
    category: "Multimídia / Web Audio",
    description:
      "Player interativo para karaokê executado no navegador com sincronização precisa de letras e processamento dinâmico de áudio.",
    highlight: "Sincronização de letras em tempo real com Web Audio API",
    tags: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
    demoUrl: "https://karaoke-online-amber.vercel.app",
    repoUrl: "https://github.com/isrmicha/karaoke-online",
    status: "ativo",
    year: "2024",
  },
  {
    title: "Pokédex",
    slug: "pokedex",
    role: "Desenvolvedor Frontend",
    category: "Web App / API",
    description:
      "Enciclopédia interativa com busca instantânea, consumo assíncrono da PokeAPI, paginação dinâmica e detalhamento de estatísticas e evoluções.",
    highlight: "Busca em tempo real e consumo otimizado de API REST",
    tags: ["React", "TypeScript", "PokeAPI", "CSS3"],
    demoUrl: "https://pokedex-isrmicha.vercel.app",
    repoUrl: "https://github.com/isrmicha/pokedex",
    status: "ativo",
    year: "2023",
  },
];

const SKILL_GROUPS = [
  {
    category: "Frontend & Interfaces",
    detail: "Aplicações velozes, reativas e com arquitetura escalável",
    skills: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "JavaScript (ESNext)", "HTML5 & CSS3 Semântico", "Web Audio API"],
  },
  {
    category: "Mobile",
    detail: "Experiências móveis fluidas com base compartilhada",
    skills: ["React Native", "Expo", "Offline-First", "iOS & Android Builds", "Mobile Performance"],
  },
  {
    category: "Backend & Plataforma",
    detail: "Integração de serviços, APIs e deploy contínuo",
    skills: ["Node.js", "RESTful APIs", "Serverless Functions", "Git & GitHub", "Vercel", "Docker", "CI/CD Workflows"],
  },
  {
    category: "Engenharia & Qualidade",
    detail: "Padrões sólidos para produtos duráveis em produção",
    skills: ["Clean Architecture", "Code Review", "Otimização de Core Web Vitals", "Acessibilidade (a11y)", "Design Systems"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-200">
      {/* Subtle single-layer background - zero GPU scroll cost */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-subtle-grid opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(56,189,248,0.06),transparent_70%)] z-0"
        aria-hidden="true"
      />

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#090a0f]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a
            href="#topo"
            className="flex items-center gap-2 font-mono text-xs font-semibold tracking-tight text-zinc-100 hover:text-sky-400 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>isrmicha.dev</span>
          </a>

          <nav className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#projetos" className="hover:text-zinc-100 transition-colors">
              Projetos
            </a>
            <a href="#experiencia" className="hover:text-zinc-100 transition-colors">
              Trajetória
            </a>
            <a href="#competencias" className="hover:text-zinc-100 transition-colors">
              Stack
            </a>
            <a href="#contato" className="hover:text-zinc-100 transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              aria-label="GitHub de Israel Neves"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main id="topo" className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-24 space-y-24">
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="https://avatars.githubusercontent.com/u/8812005?v=4"
                alt="Israel Neves"
                width={72}
                height={72}
                priority
                className="rounded-full border border-zinc-700/80 bg-zinc-900 object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
                  Israel Neves
                </h1>
                <p className="text-xs font-mono text-zinc-400">
                  Engenheiro de Software Full Stack · ISR Studio
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Disponível para projetos selecionados</span>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 leading-snug">
              Desenvolvo produtos digitais de alta performance, interfaces fluidas e arquiteturas escaláveis para web e mobile.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Mais de uma década escrevendo código limpo e sustentável. Experiência técnica em ambiente enterprise no{" "}
              <span className="text-zinc-200 font-medium">Grupo Boticário</span>, com atuação direta em engenharia frontend para grandes volumes de usuários, e liderança técnica como fundador da{" "}
              <span className="text-zinc-200 font-medium">ISR Studio</span>, transformando conceitos em produtos completos em produção.
            </p>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-white transition-colors"
            >
              <span>Ver aplicações em produção</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:isrmicha@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>isrmicha@gmail.com</span>
            </a>
            <a
              href="https://github.com/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/israelneves"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Key Facts / Spec bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl border border-zinc-800/80 bg-zinc-800/40 overflow-hidden font-mono text-xs">
            <div className="bg-[#090a0f] p-4 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Experiência</span>
              <span className="text-base font-bold text-zinc-100">10+ Anos</span>
              <span className="text-[11px] text-zinc-400 block">Engenharia Contínua</span>
            </div>
            <div className="bg-[#090a0f] p-4 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Enterprise</span>
              <span className="text-base font-bold text-zinc-100">Grupo Boticário</span>
              <span className="text-[11px] text-zinc-400 block">Frontend de Alta Escala</span>
            </div>
            <div className="bg-[#090a0f] p-4 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Autonomia</span>
              <span className="text-base font-bold text-zinc-100">ISR Studio</span>
              <span className="text-[11px] text-zinc-400 block">Fundador & Arquiteto</span>
            </div>
            <div className="bg-[#090a0f] p-4 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Ecossistema</span>
              <span className="text-base font-bold text-emerald-400">8+ Deploys</span>
              <span className="text-[11px] text-zinc-400 block">Produtos em Produção</span>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projetos" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                Projetos & Aplicações em Produção
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Aplicações autorais ativas, construídas com foco em utilidade real, performance e experiência de usuário.
              </p>
            </div>
            <span className="font-mono text-[11px] text-zinc-500">
              {PROJECTS.length} produtos disponíveis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <article
                key={project.slug}
                className={`group relative flex flex-col justify-between rounded-xl border p-5 transition-colors ${
                  project.featured
                    ? "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                    : "border-zinc-800/60 bg-zinc-900/20 hover:border-zinc-700"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-zinc-400">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        {project.status}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white flex items-center gap-1.5">
                      {project.title}
                      <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-sky-400" />
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded border border-zinc-800/80 bg-zinc-950/60 px-2.5 py-1.5 text-[11px] font-mono text-zinc-300">
                    <span className="text-zinc-500 mr-1.5">Destaque:</span>
                    {project.highlight}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-zinc-800/50 border border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Abrir aplicação</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experiencia" className="space-y-6 scroll-mt-20">
          <div className="border-b border-zinc-800/80 pb-4">
            <h2 className="text-lg font-bold tracking-tight text-zinc-100">
              Trajetória Profissional
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Experiência consolidada em ambientes corporativos de larga escala e liderança técnica de produtos próprios.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    Grupo Boticário
                  </h3>
                  <p className="text-xs font-mono text-sky-400">
                    Engenheiro de Software / Desenvolvimento Frontend
                  </p>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  Enterprise · Larga Escala
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Desenvolvimento e sustentação de interfaces críticas de alta disponibilidade para uma das maiores companhias de varejo e beleza da América Latina. Atuação com React, TypeScript, padrões sólidos de componentização, testes automatizados e integração com microsserviços em ambiente ágil e distribuído.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    ISR Studio
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    Fundador & Arquiteto de Software
                  </p>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  Produtos Autorais · Web & Mobile
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fundação e liderança de estúdio independente de software. Responsável por todo o ciclo de vida dos produtos — desde arquitetura e design system até infraestrutura serverless, integração de pagamentos, deploys automatizados e monitoramento de métricas em produção (PopNews, Uminha, Cardápio Digital).
              </p>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section id="competencias" className="space-y-6 scroll-mt-20">
          <div className="border-b border-zinc-800/80 pb-4">
            <h2 className="text-lg font-bold tracking-tight text-zinc-100">
              Competências & Tecnologias
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Conjunto de ferramentas e conceitos aplicados no dia a dia para construir software confiável e de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 space-y-3"
              >
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {group.category}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {group.detail}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-zinc-800 bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="scroll-mt-20">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                Contato Direto
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Disponível para consultorias técnicas, novos projetos, oportunidades de engenharia sênior ou parcerias estratégicas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:isrmicha@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-white transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                <span>isrmicha@gmail.com</span>
              </a>
              <a
                href="https://github.com/isrmicha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/isrmicha</span>
              </a>
              <a
                href="https://linkedin.com/in/israelneves"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-zinc-800/60 font-mono text-[11px] text-zinc-500">
              <span>Localização: Brasil (Remoto)</span>
              <span>·</span>
              <span>Fuso horário: UTC-3</span>
              <span>·</span>
              <span>Chave PGP / Comunicação direta</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 text-zinc-500 text-xs">
        <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Israel Neves (isrmicha). Todos os direitos reservados.</p>
          <p className="text-zinc-600">
            isrmicha.dev · Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
