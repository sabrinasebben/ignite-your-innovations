import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEVBEN — Soluções inteligentes, negócios escaláveis" },
      {
        name: "description",
        content:
          "A SEVBEN cria aplicativos, cursos digitais e estrutura negócios digitais com visão estratégica, organização e potencial de escala.",
      },
      { property: "og:title", content: "SEVBEN — Soluções inteligentes, negócios escaláveis" },
      {
        property: "og:description",
        content:
          "Tecnologia, estrutura e crescimento para negócios digitais. Aplicativos, cursos e produtos digitais com visão de escala.",
      },
    ],
  }),
  component: SevbenLandingPage,
});

function SevbenLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Criação de aplicativos",
      description:
        "Estruturamos e desenvolvemos aplicativos com foco em clareza operacional, experiência do usuário e potencial de crescimento.",
    },
    {
      title: "Desenvolvimento de cursos digitais",
      description:
        "Organizamos produtos educacionais digitais com base estratégica, estrutura de conteúdo e visão de escala.",
    },
    {
      title: "Estruturação de negócios digitais",
      description:
        "Transformamos ideias em operações organizadas, conectando tecnologia, processo e posicionamento de mercado.",
    },
  ];

  const pillars = [
    "Posicionamento claro de marca",
    "Estrutura pensada para crescer",
    "Tecnologia com visão prática de negócio",
    "Organização, execução e escalabilidade",
  ];

  const areas = [
    "Aplicativos sob medida",
    "Plataformas digitais",
    "Cursos e produtos educacionais",
    "Estratégia e estruturação",
    "Organização operacional",
    "Crescimento digital",
  ];

  const navLinks: Array<[string, string]> = [
    ["#sobre", "Sobre"],
    ["#servicos", "Serviços"],
    ["#diferenciais", "Diferenciais"],
    ["#contato", "Contato"],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-lg font-bold text-white shadow-md">
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight text-slate-900">SEVBEN</span>
              <span className="hidden text-xs text-slate-500 sm:block">
                Soluções inteligentes, negócios escaláveis.
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 lg:inline-flex"
            >
              Falar com a SEVBEN
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={closeMenu}
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Falar com a SEVBEN
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Tecnologia, estrutura e crescimento para negócios digitais
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Criamos aplicativos, cursos digitais e soluções com base estratégica para crescer
                de forma organizada.
              </p>
              <p className="mt-4 text-base text-slate-500">
                A SEVBEN une visão de negócio, organização e tecnologia para estruturar produtos
                digitais com mais clareza, posicionamento e potencial de escala. Atuamos no
                desenvolvimento de soluções que nascem para funcionar bem hoje e evoluir com
                consistência amanhã.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Conhecer serviços
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Entrar em contato
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { number: "Apps", label: "Soluções digitais voltadas à operação e experiência do usuário" },
                  { number: "Cursos", label: "Produtos educacionais com estrutura e visão de crescimento" },
                  { number: "Escala", label: "Projetos pensados para evoluir com organização e posicionamento" },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-lg font-bold text-slate-900">{item.number}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-900 p-1 shadow-2xl">
                <div className="rounded-[22px] bg-slate-950 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                        SEVBEN
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        Startup mindset, execução com estrutura.
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                      S
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {pillars.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Foco
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Produtos digitais com visão real de negócio
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Essência
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Organização, tecnologia e crescimento sustentável
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Sobre a SEVBEN
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Uma empresa criada para transformar ideias digitais em estruturas sólidas e
                escaláveis.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Missão",
                  text: "Desenvolver e estruturar soluções digitais com inteligência estratégica, organização e foco em crescimento sustentável.",
                },
                {
                  title: "Visão",
                  text: "Consolidar uma empresa sólida, moderna e escalável, capaz de sustentar múltiplas iniciativas e oportunidades.",
                },
                {
                  title: "Valores",
                  text: "Profissionalismo, inovação com execução, visão de longo prazo, clareza operacional e crescimento com consistência.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICOS */}
        <section id="servicos" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                O que fazemos
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Criamos soluções digitais com foco em utilidade, posicionamento e potencial de
                evolução.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Diferenciais
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Não entregamos apenas execução: entregamos direção, estrutura e visão de
                crescimento.
              </p>
              <p className="mt-3 text-base text-slate-500">
                Nosso trabalho combina criação, posicionamento e organização para que aplicativos,
                cursos e produtos digitais tenham mais clareza desde a base, evitando improviso e
                facilitando evolução futura.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-600" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contato</h2>
                <p className="mt-4 text-lg text-slate-300">
                  Vamos transformar sua ideia em uma estrutura digital mais clara, forte e
                  preparada para crescer.
                </p>
                <p className="mt-3 text-base text-slate-400">
                  Para contato institucional, alinhamentos e informações gerais, utilize os canais
                  abaixo.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    E-mail principal
                  </p>
                  <a
                    href="mailto:contato@sevbenoficial.com"
                    className="mt-2 block break-all text-base font-semibold text-white hover:text-blue-300 sm:text-lg"
                  >
                    contato@sevbenoficial.com
                  </a>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    Financeiro
                  </p>
                  <a
                    href="mailto:financeiro@sevbenoficial.com"
                    className="mt-2 block break-all text-base font-semibold text-white hover:text-blue-300 sm:text-lg"
                  >
                    financeiro@sevbenoficial.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SEVBEN. Todos os direitos reservados.</p>
          <p>Soluções inteligentes, negócios escaláveis.</p>
        </div>
      </footer>
    </div>
  );
}
