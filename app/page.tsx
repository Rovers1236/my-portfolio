import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Антон Гиззатов — Project Manager / Producer",
  description:
    "Портфолио Антона Гиззатова: project management, продюсирование, операционка, кейсы по event, media, аналитике и BPMN.",
};

type CaseCard = { title: string; text: string };

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
      {children}
    </div>
  );
}

function ContactButton({
  label = "Связаться",
  secondary = false,
  className = "",
  href = "#contacts",
}: {
  label?: string;
  secondary?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
        secondary
          ? "border border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.08]"
          : "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 text-white shadow-[0_14px_40px_rgba(168,85,247,0.28)] hover:shadow-[0_18px_50px_rgba(249,115,22,0.24)]"
      } ${className}`}
    >
      {label}
    </a>
  );
}

function Chip({ children, subtle = false }: { children: ReactNode; subtle?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs ${
        subtle
          ? "border border-white/10 bg-white/[0.03] text-zinc-300"
          : "border border-white/10 bg-white/[0.05] text-zinc-200"
      }`}
    >
      {children}
    </span>
  );
}

function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 shadow-[0_18px_70px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_24px_90px_rgba(0,0,0,0.42)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-300 group-hover:via-white/30" />
      <div className="pointer-events-none absolute -right-8 top-6 h-24 w-24 rounded-full bg-violet-500/8 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_14px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_22px_70px_rgba(0,0,0,0.34)]">
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-300 group-hover:via-violet-300/40" />
      <div className="pointer-events-none absolute -right-8 -top-6 h-20 w-20 rounded-full bg-violet-500/8 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</div>
      <div className="relative mt-2 text-sm leading-6 text-zinc-400">{label}</div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-300 group-hover:via-white/28" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

function MediaImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.34)] ${className}`}>
      <div className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-300 group-hover:via-white/30" />
      <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
    </div>
  );
}

function MediaVideo({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.36)] ${className}`}>
      <div className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-300 group-hover:via-violet-300/40" />
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="h-full w-full object-cover"
      />
      <div className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400 transition duration-300 group-hover:text-zinc-200">
        {title}
      </div>
    </div>
  );
}

function AssetTile({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_18px_48px_rgba(0,0,0,0.3)]">
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-300 group-hover:via-white/28" />
      <img src={src} alt={alt} className="aspect-[16/10] w-full rounded-[16px] object-cover transition duration-500 group-hover:scale-[1.02]" />
      <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">
        {title}
      </div>
    </div>
  );
}

function ProofItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
      <div className="text-lg font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm leading-6 text-zinc-400">{label}</div>
    </div>
  );
}

function CaseSection({
  id,
  eyebrow,
  title,
  summary,
  chips,
  intro,
  cards,
  gallery,
  assets,
}: {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  chips: string[];
  intro: string;
  cards: CaseCard[];
  gallery: ReactNode;
  assets?: ReactNode;
}) {
  return (
    <section
      id={id}
      className="group relative mt-16 scroll-mt-28 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(10,10,12,0.95))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] transition duration-300 hover:border-white/15 hover:shadow-[0_30px_110px_rgba(0,0,0,0.48)] sm:scroll-mt-32 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-300 group-hover:via-violet-200/35" />
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-orange-500/7 blur-3xl" />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h3 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </div>
      </div>

      <details className="group mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 open:bg-white/[0.04]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
          <div>
            <div className="text-sm font-semibold text-white">Открыть кейс</div>
            <div className="mt-1 text-sm text-zinc-400">{intro}</div>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-zinc-300 transition duration-300 group-open:rotate-45 group-open:text-white">
            +
          </div>
        </summary>

        <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-out group-open:max-h-[7000px] group-open:grid-rows-[1fr]">
          <div className="min-h-0">
            <div className="animate-reveal border-t border-white/10 p-5 pt-6 sm:p-6 sm:pt-6">
              <div className="grid gap-4 lg:grid-cols-3">
                {cards.map((card) => (
                  <InfoCard key={card.title} title={card.title} text={card.text} />
                ))}
              </div>

              <div className="mt-5">{gallery}</div>
              {assets ? <div className="mt-5">{assets}</div> : null}
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}

export default function Home() {
  const metrics = [
    { value: "12 000+", label: "участников в масштабных проектах" },
    { value: "2M ₽", label: "закупки и оргбюджеты" },
    { value: "30", label: "человек в командах и подрядчиках" },
    { value: "3000+", label: "единиц контента в коммерческих кейсах" },
  ];

  const highlights = [
    "Project management",
    "Продюсирование",
    "Операционка",
    "BPMN / PDCA",
    "Аналитика",
    "Контроль качества",
  ];

  const strengths = [
    "собираю хаос в рабочую систему",
    "держу сроки, качество и коммуникации одновременно",
    "соединяю креатив с управленческой логикой",
    "работаю через структуру, артефакты и контрольные точки",
  ];

  const roleFit = [
    "руководитель проектов / project manager",
    "продюсер / production manager",
    "operations / coordination lead",
    "гибридные роли на стыке media, event, content и процессов",
  ];

  const process = [
    {
      step: "01",
      title: "Быстро захожу в контекст",
      text: "Собираю вводные, ограничения и реальные точки риска без долгой раскачки.",
    },
    {
      step: "02",
      title: "Собираю систему",
      text: "Фиксирую этапы, ответственных, документы, дедлайны и правила взаимодействия.",
    },
    {
      step: "03",
      title: "Держу темп",
      text: "Синхронизирую команду, снимаю рассинхрон и удерживаю проект в рабочем ритме.",
    },
    {
      step: "04",
      title: "Усиливаю следующую итерацию",
      text: "Перевожу выводы из проекта в более сильную следующую версию процесса.",
    },
  ];

  const tools = [
    "BPMN",
    "PDCA",
    "CRM-логика",
    "Google Sheets",
    "SQL basics",
    "Jira / Scrum",
    "ТЗ и сметы",
    "Контрольные документы",
    "Координация подрядчиков",
    "Фото / видео продакшн",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050507] text-zinc-100 selection:bg-violet-500/30 [scrollbar-color:#27272a_#09090b]">
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes softPulse {
            0%, 100% { transform: scale(1); opacity: .64; }
            50% { transform: scale(1.04); opacity: .9; }
          }
          @keyframes reveal {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp .7s ease-out both; }
          .delay-1 { animation-delay: .06s; }
          .delay-2 { animation-delay: .14s; }
          .delay-3 { animation-delay: .22s; }
          .pulse-soft { animation: softPulse 8s ease-in-out infinite; }
          details[open] .animate-reveal { animation: reveal .45s ease-out both; }
        }
        summary::-webkit-details-marker { display: none; }
      `}</style>

      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_28%),linear-gradient(to_bottom,#040405,#09090c_42%,#050507)]" />
      <div className="fixed inset-0 -z-30 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none fixed left-[10%] top-24 -z-20 hidden h-44 w-44 rounded-full bg-violet-500/8 blur-3xl pulse-soft lg:block" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 bg-gradient-to-b from-[#050507] via-[#050507]/88 to-transparent sm:h-32" />

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6 sm:pt-30 lg:px-8 lg:pb-8">
        <header className="fade-up fixed left-4 right-4 top-3 z-50 rounded-[22px] border border-white/10 bg-zinc-950/78 px-4 py-3 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.42)] sm:left-6 sm:right-6 sm:px-5 sm:py-3 lg:left-8 lg:right-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px] sm:tracking-[0.28em]">
                Portfolio / Project & Production
              </div>
              <div className="mt-1 text-base font-semibold text-white sm:text-lg">Антон Гиззатов</div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-zinc-300">
              <a href="#cases" className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[15px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:px-4 sm:py-2 sm:text-sm">Кейсы</a>
              <a href="#value" className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[15px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:px-4 sm:py-2 sm:text-sm">Ценность</a>
              <a href="#process" className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[15px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:px-4 sm:py-2 sm:text-sm">Как работаю</a>
              <ContactButton label="Связаться" className="hidden sm:inline-flex px-4 py-2 text-sm" />
            </nav>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] fade-up delay-1">
          <div className="order-1 grid gap-4 lg:order-2 lg:auto-rows-max">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/88 to-zinc-950/88 shadow-[0_20px_80px_rgba(0,0,0,0.44)]">
              <div className="relative aspect-[4/4.7] sm:aspect-[4/4.05] lg:aspect-[4/3.55]">
                <img
                  src="/AGE-4.jpg"
                  alt="Антон Гиззатов"
                  className="h-full w-full object-cover object-[58%_center] sm:object-[66%_center] lg:object-[74%_28%]"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <div className="rounded-[20px] border border-white/10 bg-black/30 p-3 backdrop-blur-md sm:p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:text-[11px] sm:tracking-[0.24em]">
                      Project / Producer / Operations
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white sm:text-2xl">
                      Антон Гиззатов
                    </div>
                    <div className="mt-2 text-sm leading-5 text-zinc-300 sm:max-w-[28rem] sm:leading-6">
                      Профиль уровня middle+ для сложных и многоуровневых задач.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4 lg:col-span-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Формат работы</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">
                  Hybrid / project format, быстрый вход в контекст, спокойная коммуникация и высокий темп исполнения.
                </div>
              </div>
              <div className="rounded-[26px] border border-white/10 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/4 to-transparent p-4 lg:col-span-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Роли</div>
                <div className="mt-2 text-sm leading-6 text-zinc-100">
                  Project manager / producer / operations lead для media, event, content и гибридных команд.
                </div>
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4 sm:col-span-2 lg:col-span-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Тип задач</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">
                  Особенно полезен там, где много хаоса, зависимых блоков, сжатые сроки и нужен управляемый результат.
                </div>
              </div>
            </div>
          </div>

          <Surface className="order-2 p-5 backdrop-blur sm:p-7 lg:order-1 lg:p-8 xl:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-violet-200">
                middle / middle+
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                Москва · hybrid / project format
              </div>
            </div>

            <div className="pointer-events-none absolute left-12 top-20 hidden h-44 w-44 rounded-full bg-violet-500/8 blur-3xl lg:block" />

            <h1 className="relative mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              Собираю хаос
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                в работающую систему.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Руководитель проектов / продюсер, который быстро входит в контекст, выстраивает структуру и доводит сложные проекты до управляемого результата.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <Chip key={item} subtle>{item}</Chip>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton label="Связаться" />
              <a href="#cases" className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                Смотреть кейсы
              </a>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Что даю проекту</div>
                <div className="mt-3 grid gap-2.5">
                  <div className="text-sm leading-6 text-zinc-200">Собираю людей, процессы, сроки и контроль в одну систему.</div>
                  <div className="text-sm leading-6 text-zinc-200">Удерживаю темп без перегруза команды и потери качества.</div>
                  <div className="text-sm leading-6 text-zinc-200">Соединяю креативную часть с управленческой логикой проекта.</div>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/4 to-transparent p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Роль и уровень</div>
                <div className="mt-2 text-sm leading-6 text-zinc-100">
                  Руководитель проектов / продюсер / operations lead для задач, где важно не просто исполнение, а управляемый результат.
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Подход</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">
                  Работаю через структуру, контрольные точки, понятные роли и спокойную координацию даже в сложных и срочных проектах.
                </div>
              </div>
            </div>
          </Surface>
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 fade-up delay-2">
          {metrics.map((item) => (
            <MetricCard key={item.label} value={item.value} label={item.label} />
          ))}
        </section>

        <section className="mt-4 grid gap-3 lg:grid-cols-4 fade-up delay-2">
          <ProofItem value="8 процессов" label="описал и собрал в понятную логику" />
          <ProofItem value="6 процессов" label="оптимизировал через AS IS / TO BE" />
          <ProofItem value="BPMN / PDCA" label="использую как рабочий инструмент управления" />
          <ProofItem value="Media + ops" label="соединяю продакшн, аналитику и операционку" />
        </section>

        <section id="value" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[1fr_1fr] sm:scroll-mt-32 fade-up delay-3">
          <div className="grid gap-4">
            <Surface className="p-6 sm:p-8">
              <SectionEyebrow>Ценность</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Что получает команда / работодатель
              </h2>
              <div className="mt-6 grid gap-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-4 py-3 text-sm leading-6 text-zinc-300">
                Итог для команды: меньше хаоса, меньше ручного героизма и больше предсказуемости по срокам, качеству и коммуникации.
              </div>
            </Surface>

            <Surface className="bg-gradient-to-b from-violet-500/10 via-fuchsia-500/4 to-transparent p-6 sm:p-8">
              <SectionEyebrow>Что это даёт бизнесу</SectionEyebrow>
              <div className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Не просто сильного исполнителя, а человека, который снижает хаос, удерживает темп и переводит проект в управляемый режим.
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-200 sm:text-base">
                Полезен там, где нужно быстро собрать людей, процессы, сроки и результат в одну рабочую систему — без потери качества и контроля.
              </p>
            </Surface>
          </div>

          <div className="grid gap-4">
            <Surface className="p-6 sm:p-8">
              <SectionEyebrow>Где я особенно полезен</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Роли и контекст, где профиль считывается сильнее всего
              </h2>
              <div className="mt-6 grid gap-3">
                {roleFit.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </Surface>

            <Surface className="p-6 sm:p-8">
              <SectionEyebrow>Процессная экспертиза</SectionEyebrow>
              <div className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Умею не только координировать текущую работу, но и собирать саму логику процесса: роли, переходы, согласования и точки контроля.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-zinc-200">
                  <div className="text-lg font-semibold text-white">8 процессов / 6 оптимизировано</div>
                  <div className="mt-1 text-zinc-400">Есть практика описания и улучшения процессов через AS IS / TO BE.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-zinc-200">
                  <div className="text-lg font-semibold text-white">BPMN как инструмент</div>
                  <div className="mt-1 text-zinc-400">Использую схемы не как формальность, а как способ убрать потери и сделать систему прозрачнее.</div>
                </div>
              </div>
            </Surface>
          </div>
        </section>

        <section id="cases" className="mt-16 scroll-mt-28 sm:scroll-mt-32">
          <div className="mb-6">
            <SectionEyebrow>Кейсы</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Кейсы, где видно не только визуал, но и управленческий контур
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                id: "graduation",
                title: "Медиавыпускной",
                desc: "Флагманский кейс: продюсирование, визуальная система, сценарий, тайминг и координация.",
                tags: ["флагман", "сценарий", "дизайн", "координация"],
                image: "/cases/graduation-cover.jpg",
                featured: true,
              },
              {
                id: "glowbyte",
                title: "GlowByte",
                desc: "Коммерческий продакшн по ТЗ клиента и управление командой под результат.",
                tags: ["бренд", "ТЗ", "команда", "контент"],
                image: "/cases/glowbyte-cover.jpg",
              },
              {
                id: "gf",
                title: "GF / показатели",
                desc: "План / факт, аналитика и управленческие гипотезы как инструмент решений.",
                tags: ["аналитика", "план / факт", "гипотезы"],
                image: "/cases/gf-cover.png",
              },
              {
                id: "bpmn",
                title: "BPMN",
                desc: "Проектирование процессов, ролей, согласований и логики контроля.",
                tags: ["процессы", "роли", "контроль"],
                image: "/cases/bpmn-cover.png",
              },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950/82 shadow-[0_16px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/15 ${item.featured ? "md:col-span-2 xl:col-span-2" : ""}`}
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
                <div className={`relative flex flex-col justify-end p-6 ${item.featured ? "h-[320px] sm:h-[360px]" : "h-[290px]"}`}>
                  <div className="text-xl font-semibold text-white">{item.title}</div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-300">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <CaseSection
          id="graduation"
          eyebrow="Флагманский кейс"
          title="Медиавыпускной — продюсирование события как цельной системы"
          summary="Не набор отдельных задач, а единая система из сценария, визуала, тайминга, сметы, команды и контроля исполнения. Это кейс, где видно и креатив, и управленческий контур."
          chips={["сценарий", "тайминги", "дизайн", "motion", "смета", "координация"]}
          intro="Задача, сложность, результат, видео и материалы управления — внутри одного блока."
          cards={[
            {
              title: "Задача",
              text: "Собрать крупное мероприятие с награждением, визуальной системой, motion, сценарием, сметой и несколькими параллельными потоками подготовки.",
            },
            {
              title: "Сложность",
              text: "Высокий риск рассинхрона между людьми и блоками: сцена, контент, дизайн, оргчасть, материалы и зависимые тайминги.",
            },
            {
              title: "Результат",
              text: "Вместо хаотичной подготовки — единая продюсерская логика, где сценарий, визуал, сроки, бюджет и команда работают как система.",
            },
          ]}
          gallery={
            <div className="grid gap-4">
              <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr_1fr]">
                <MediaImage src="/cases/graduation/design-poster.jpg" alt="Постер Медиавыпускного" className="aspect-[4/5]" />
                <MediaVideo src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-1_yehdvl.mp4" title="Motion 01" className="aspect-[16/10]" />
                <MediaVideo src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-2_njjnep.mp4" title="Motion 02" className="aspect-[16/10]" />
              </div>
              <div className="grid gap-4 xl:grid-cols-[1.25fr_0.95fr_0.82fr]">
                <MediaImage src="/cases/graduation/photo-2.jpg" alt="Медиавыпускной 2" className="aspect-[16/10]" />
                <MediaImage src="/cases/graduation/photo-4.jpg" alt="Медиавыпускной 4" className="aspect-[16/10]" />
                <MediaImage src="/cases/graduation/photo-3.jpg" alt="Медиавыпускной 3" className="aspect-[16/10]" />
              </div>
            </div>
          }
          assets={
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <AssetTile src="/cases/graduation/design-poster.jpg" alt="Афиша" title="Афиша" />
                <AssetTile src="/cases/graduation/design-badge.png" alt="Бейдж" title="Бейдж" />
                <AssetTile src="/cases/graduation/design-popsocket.png" alt="Попсокет" title="Попсокет" />
                <AssetTile src="/cases/graduation/design-shopper.png" alt="Шоппер" title="Шоппер" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <AssetTile src="/cases/graduation/script.png" alt="Фрагмент сценария" title="Сценарий" />
                <AssetTile src="/cases/graduation/timings.png" alt="Тайминги" title="Тайминги" />
                <AssetTile src="/cases/graduation/budget.png" alt="Смета" title="Смета" />
                <AssetTile src="/cases/graduation/tasks.png" alt="Задачи" title="Задачи" />
              </div>
            </div>
          }
        />

        <CaseSection
          id="glowbyte"
          eyebrow="Коммерческий кейс"
          title="GlowByte — продакшн по ТЗ клиента и управление командой под результат"
          summary="Коммерческий кейс, где важно было не просто снять красиво, а собрать людей, требования, pipeline и выдачу результата без хаоса и потери качества."
          chips={["GlowByte", "ТЗ", "команда", "контент", "3000+ фото"]}
          intro="Коммерческий контекст, команда, контроль качества, видео и логика сдачи материалов."
          cards={[
            {
              title: "Задача",
              text: "Организовать фото- и видеапродакшн под корпоративное мероприятие с контентом для отчётности, внутренних коммуникаций и публикаций.",
            },
            {
              title: "Что собрал",
              text: "Команду, распределение зон, требования к контенту, pipeline съёмка → отбор → обработка → сдача и контроль качества.",
            },
            {
              title: "Что доказывает",
              text: "Умею работать по внешнему ТЗ, управлять продакшеном и выдавать результат как система, а не как набор разрозненных действий.",
            },
          ]}
          gallery={
            <div className="grid gap-4 xl:grid-cols-12">
              <MediaVideo src="https://res.cloudinary.com/dvb1limg4/video/upload/video_t7tuw6.mp4" title="Итоговое видео кейса" className="xl:col-span-6" />
              <MediaImage src="/cases/glowbyte/photo-1.jpg" alt="GlowByte 1" className="aspect-[16/10] xl:col-span-6" />
              <MediaImage src="/cases/glowbyte/photo-2.jpg" alt="GlowByte 2" className="aspect-[16/10] xl:col-span-4" />
              <MediaImage src="/cases/glowbyte/photo-3.jpg" alt="GlowByte 3" className="aspect-[16/10] xl:col-span-4" />
              <MediaImage src="/cases/glowbyte/photo-4.jpg" alt="GlowByte 4" className="aspect-[16/10] xl:col-span-4" />
            </div>
          }
          assets={
            <div className="grid gap-4 lg:grid-cols-3">
              <AssetTile src="/cases/glowbyte/contract-1.png" alt="Фрагмент ТЗ" title="Фрагмент ТЗ" />
              <AssetTile src="/cases/glowbyte/chat-1.png" alt="Координация команды" title="Координация" />
              <AssetTile src="/cases/glowbyte/chat-2.png" alt="Распределение зон" title="Распределение зон" />
            </div>
          }
        />

        <CaseSection
          id="gf"
          eyebrow="Аналитический кейс"
          title="GF — план / факт, вал и управленческие гипотезы"
          summary="Кейс показывает, что я работаю не только с креативом, но и с цифрами: собираю структуру данных, вижу отклонения и перевожу аналитику в управленческие решения."
          chips={["план / факт", "ежедневный контроль", "вал", "гипотезы"]}
          intro="Что анализировал, как думал и что этот кейс доказывает."
          cards={[
            {
              title: "Что делал",
              text: "Собирал и структурировал данные по выручке, визуализировал план / факт, отслеживал динамику и выделял проблемные точки.",
            },
            {
              title: "Как думал",
              text: "Не ограничивался отчётностью: формировал гипотезы по обучению, адаптации, корпоративной культуре и упрощению регламентов.",
            },
            {
              title: "Что доказывает",
              text: "Умею использовать аналитику как инструмент управления, а не как пассивную таблицу с цифрами.",
            },
          ]}
          gallery={
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              <AssetTile src="/cases/gf/gf-1.png" alt="План / факт" title="План / факт" />
              <AssetTile src="/cases/gf/gf-2.png" alt="Динамика выручки" title="Динамика выручки" />
              <AssetTile src="/cases/gf/chat-1.png" alt="Гипотезы улучшения" title="Гипотезы" />
              <AssetTile src="/cases/gf/chat-2.png" alt="Управленческие предложения" title="Управленческие выводы" />
            </div>
          }
        />

        <CaseSection
          id="bpmn"
          eyebrow="Процессный кейс"
          title="BPMN — проектирование процессов, ролей и точек контроля"
          summary="Кейс не про дублирование описаний, а про конкретный навык: превращать разрозненный процесс в понятную логику со стадиями, ролями, согласованиями и прозрачным контуром управления."
          chips={["BPMN", "роли", "согласования", "контроль", "AS IS / TO BE"]}
          intro="Что спроектировал, что изменилось и почему это усиливает мой профиль под управленческие роли."
          cards={[
            {
              title: "Что сделал",
              text: "Разложил процесс на этапы, выделил роли, зафиксировал точки согласования и встроил контроль по срокам, документам и переходам.",
            },
            {
              title: "Что изменилось",
              text: "Процесс стал понятнее: где начинается задача, кто принимает решение, на каком этапе возникает контроль и где снимается риск потерь.",
            },
            {
              title: "Что доказывает",
              text: "Я умею не только вести текущий проект, но и проектировать сами правила игры внутри системы.",
            },
          ]}
          gallery={
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <MediaImage src="/cases/bpmn/bpmn-1.png" alt="BPMN схема" className="aspect-[16/10]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard title="8 процессов / 6 оптимизировано" text="Есть практика описания процессов и последующей оптимизации через AS IS / TO BE: где процесс теряет скорость, где ломается согласование и где нужен контроль." />
                <InfoCard title="Что даёт системе" text="Процесс становится прозрачнее: понятны роли, точки передачи, логика согласования и места, где раньше возникал хаос или ручной героизм." />
              </div>
            </div>
          }
        />

        <section id="process" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[0.92fr_1.08fr] sm:scroll-mt-32">
          <Surface className="p-6 sm:p-8">
            <SectionEyebrow>Как работаю</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Понятный процесс вместо ручного хаоса
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Мне важно не просто двигать задачи, а собирать систему, в которой понятно кто за что отвечает, где находится контроль и как всё связано между собой.
            </p>
          </Surface>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <Surface key={item.step} className="p-6">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300">{item.step}</div>
                <div className="mt-3 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
              </Surface>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] sm:scroll-mt-32">
          <Surface className="p-6 sm:p-8">
            <SectionEyebrow>Инструменты</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              То, чем усиливаю управление и продакшн
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Хорошо чувствую стык между контентом и операционкой: могу говорить и с креативной командой, и с теми, кому нужны сроки, предсказуемость и прозрачный результат.
            </p>
          </Surface>

          <Surface className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              {tools.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </Surface>
        </section>

        <section id="contacts" className="mt-16 mb-8 scroll-mt-28 sm:scroll-mt-32">
          <Surface className="overflow-hidden bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(10,10,12,0.98))]">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:p-10">
              <div>
                <SectionEyebrow>Контакты</SectionEyebrow>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Открыт к ролям, где нужен человек, который собирает проект в систему
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                  Интересны project / producer / operations роли, где важно связать людей, процессы, сроки и результат в одну рабочую логику.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ContactButton label="Написать в Telegram" href="https://t.me/Rovers1236" />
                </div>
                <div className="mt-4 text-sm leading-6 text-zinc-500">
                  Почта — для вакансий, резюме и рабочих деталей.
                </div>
              </div>

              <div className="grid gap-4 content-start">
                <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/4 to-transparent p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Основной канал</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Telegram</div>
                  <a href="https://t.me/Rovers1236" className="mt-2 block text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    @Rovers1236
                  </a>
                  <div className="mt-2 text-sm text-zinc-300">Быстрее всего отвечаю здесь — удобно обсудить роль и следующий шаг.</div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Почта</div>
                  <a href="mailto:anton6370@gmail.com" className="mt-3 block break-all text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    anton6370@gmail.com
                  </a>
                  <div className="mt-2 text-sm text-zinc-400">Подходит для вакансий, резюме и рабочих деталей.</div>
                </div>
              </div>
            </div>
          </Surface>
        </section>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
        <ContactButton label="Связаться" className="w-full" />
      </div>
    </main>
  );
}
