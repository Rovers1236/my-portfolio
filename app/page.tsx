import type { ReactNode } from "react";

export default function Home() {
  const metrics = [
    { value: "12 000+", label: "участников в крупных проектах" },
    { value: "2M ₽", label: "закупки и оргбюджеты" },
    { value: "30", label: "человек в командах и подрядчиках" },
    { value: "3000+", label: "единиц контента в коммерческих кейсах" },
  ];

  const highlights = [
    "Проектное управление",
    "Продюсирование",
    "Операционка",
    "BPMN / PDCA",
    "Аналитика",
    "Контроль качества",
  ];

  const valueItems = [
    "собираю структуру там, где проект начинает рассыпаться",
    "связываю людей, сроки, визуал и контроль в одну систему",
    "снижаю зависимость результата от ручного героизма команды",
    "делаю процесс понятным для руководителя, команды и подрядчиков",
  ];

  const roleFit = [
    "срочные проекты, где нельзя долго раскачиваться",
    "хаотичные процессы, где нет ясной структуры",
    "media / event / content-среда, где много параллельных потоков",
    "задачи на стыке креатива, операционки и аналитики",
  ];

  const process = [
    {
      step: "01",
      title: "Быстро вхожу в контекст",
      text: "Собираю вводные, ограничения, роли, риски и понимаю, где проект реально теряет управляемость.",
    },
    {
      step: "02",
      title: "Собираю структуру",
      text: "Фиксирую этапы, ответственных, артефакты, точки контроля, сроки и правила взаимодействия.",
    },
    {
      step: "03",
      title: "Держу темп",
      text: "Синхронизирую людей, убираю рассинхрон, контролирую качество и довожу до результата без лишнего шума.",
    },
    {
      step: "04",
      title: "Усиливаю систему",
      text: "После запуска смотрю, где процесс проседает, и собираю следующую версию сильнее предыдущей.",
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
  }: {
    label?: string;
    secondary?: boolean;
    className?: string;
  }) {
    return (
      <a
        href="#contacts"
        className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
          secondary
            ? "border border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.08]"
            : "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 text-white shadow-[0_14px_40px_rgba(168,85,247,0.28)] hover:shadow-[0_18px_50px_rgba(249,115,22,0.26)]"
        } ${className}`}
      >
        {label}
      </a>
    );
  }

  function CaseChip({ children }: { children: ReactNode }) {
    return (
      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-200">
        {children}
      </span>
    );
  }

  function PhotoCard({
    src,
    alt,
    className = "",
  }: {
    src: string;
    alt: string;
    className?: string;
  }) {
    return (
      <div className={`group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.02] ${className}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  function InfoCard({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) {
    return (
      <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
        <div className="text-sm font-semibold text-white">{title}</div>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p>
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
    extra,
  }: {
    id: string;
    eyebrow: string;
    title: string;
    summary: string;
    chips: string[];
    intro: string;
    cards: { title: string; text: string }[];
    gallery: ReactNode;
    extra?: ReactNode;
  }) {
    return (
      <section
        id={id}
        className="relative mt-16 scroll-mt-28 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(10,10,12,0.94))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] sm:scroll-mt-32 sm:p-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

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
              <CaseChip key={chip}>{chip}</CaseChip>
            ))}
          </div>
        </div>

        <details className="group mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 open:bg-white/[0.04]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
            <div>
              <div className="text-sm font-semibold text-white">Развернуть кейс</div>
              <div className="mt-1 text-sm text-zinc-400">{intro}</div>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-zinc-300 transition duration-300 group-open:rotate-45 group-open:text-white">
              +
            </div>
          </summary>

          <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-out group-open:max-h-[5000px] group-open:grid-rows-[1fr]">
            <div className="min-h-0">
              <div className="border-t border-white/10 p-5 pt-6 sm:p-6 sm:pt-6">
                <div className="grid gap-4 lg:grid-cols-3">
                  {cards.map((card) => (
                    <InfoCard key={card.title} title={card.title} text={card.text} />
                  ))}
                </div>

                <div className="mt-5">{gallery}</div>

                {extra ? <div className="mt-5">{extra}</div> : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  <ContactButton label="Связаться" />
                  <ContactButton label="Перейти к контактам" secondary />
                </div>
              </div>
            </div>
          </div>
        </details>
      </section>
    );
  }

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
            0%, 100% { transform: scale(1); opacity: .75; }
            50% { transform: scale(1.06); opacity: 1; }
          }
          .fade-up { animation: fadeUp .7s ease-out both; }
          .delay-1 { animation-delay: .06s; }
          .delay-2 { animation-delay: .14s; }
          .delay-3 { animation-delay: .22s; }
          .pulse-soft { animation: softPulse 7s ease-in-out infinite; }
        }
        summary::-webkit-details-marker { display: none; }
      `}</style>

      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.10),transparent_24%),linear-gradient(to_bottom,#040405,#09090c_42%,#050507)]" />
      <div className="fixed inset-0 -z-30 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none fixed left-[8%] top-24 -z-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl pulse-soft" />
      <div className="pointer-events-none fixed bottom-16 right-[6%] -z-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl pulse-soft" />
      <div className="fixed inset-x-0 top-0 z-40 h-28 bg-gradient-to-b from-[#050507] via-[#050507]/88 to-transparent pointer-events-none sm:h-32" />

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pt-30 lg:px-8">
        <header className="fade-up fixed left-4 right-4 top-3 z-50 rounded-[24px] border border-white/10 bg-zinc-950/78 px-4 py-3 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.42)] sm:left-6 sm:right-6 lg:left-8 lg:right-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                Portfolio / Project & Production
              </div>
              <div className="mt-1 text-lg font-semibold text-white">Антон Гиззатов</div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-zinc-300">
              <a href="#cases" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">Кейсы</a>
              <a href="#value" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">Ценность</a>
              <a href="#process" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">Как работаю</a>
              <ContactButton label="Связаться" className="px-4 py-2 text-sm" />
            </nav>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] fade-up delay-1">
          <div className="order-1 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/88 to-zinc-950/88 shadow-[0_20px_80px_rgba(0,0,0,0.44)] lg:order-2">
            <div className="relative aspect-[4/4.65] sm:aspect-[4/4.2] lg:aspect-[4/4.8]">
              <img
                src="/AGE-4.jpg"
                alt="Антон Гиззатов"
                className="h-full w-full object-cover object-[58%_center] sm:object-[68%_center] lg:object-[78%_center]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="rounded-[24px] border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                    Project / Producer / Operations
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Антон Гиззатов
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-300">
                    Собираю сложные проекты в понятную систему и удерживаю результат в темпе.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.44)] backdrop-blur sm:p-7 lg:order-1 lg:p-8 xl:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-violet-200">
                middle+ / senior-ready positioning
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                Москва · hybrid / project format
              </div>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              Собираю хаос
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                в работающую систему.
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Руководитель проектов / продюсер для сложных, срочных и многоуровневых задач. Быстро вхожу в контекст, выстраиваю структуру, синхронизирую людей и довожу проект до результата без просадки по качеству.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <CaseChip key={item}>{item}</CaseChip>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton label="Связаться" />
              <a href="#cases" className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                Смотреть кейсы
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Роль</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">Руководитель проектов / продюсер на стыке media, event и operations.</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Сильная сторона</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">Быстро собираю логику проекта и делаю её управляемой для команды.</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Фокус</div>
                <div className="mt-2 text-sm leading-6 text-zinc-200">Сложные задачи, где нужны темп, система, контроль и визуальный результат.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 fade-up delay-2">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_14px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</div>
            </div>
          ))}
        </section>

        <section id="value" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[0.98fr_1.02fr] sm:scroll-mt-32 fade-up delay-3">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
            <SectionEyebrow>Ценность</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Что получает команда / работодатель
            </h2>
            <div className="mt-6 grid gap-3">
              {valueItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <ContactButton label="Связаться" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
              <SectionEyebrow>Где особенно полезен</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Когда моя роль работает сильнее всего
              </h2>
              <div className="mt-6 grid gap-3">
                {roleFit.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-violet-500/12 via-fuchsia-500/6 to-orange-500/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
              <SectionEyebrow>Быстрый вывод</SectionEyebrow>
              <div className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Подхожу туда, где проекту нужен не просто исполнитель, а человек, который собирает систему и удерживает её в движении.
              </div>
              <div className="mt-6">
                <ContactButton label="Связаться" />
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="mt-16 scroll-mt-28 sm:scroll-mt-32">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow>Кейсы</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Кейсы, где видно и креатив, и систему
              </h2>
            </div>
            <ContactButton label="Связаться" secondary />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                id: "graduation",
                title: "Медиавыпускной",
                desc: "Флагманский кейс: продюсирование, визуальная система, сценарий, тайминг и координация.",
                tags: ["флагман", "сценарий", "дизайн", "координация"],
                image: "/cases/graduation-cover.jpg",
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
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950/82 shadow-[0_16px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/15"
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
                <div className="relative flex h-[290px] flex-col justify-end p-6">
                  <div className="text-xl font-semibold text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <CaseChip key={tag}>{tag}</CaseChip>
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
          summary="Здесь видно меня как продюсера / руководителя проекта: я собирал не набор разрозненных задач, а единую систему из сценария, тайминга, визуала, команды, сметы и контроля исполнения."
          chips={["сценарий", "тайминги", "дизайн", "motion", "смета", "координация"]}
          intro="Задача, сложность, результат, визуальная система и материалы управления — всё внутри одного раскрывающегося блока."
          cards={[
            {
              title: "Задача",
              text: "Организовать крупное мероприятие с награждением, визуальной системой, motion, сценарием, сметой и несколькими параллельными потоками работы.",
            },
            {
              title: "Сложность",
              text: "Высокий риск рассинхрона между людьми и блоками, зависимые тайминги и необходимость держать вместе контент, сцену, дизайн и оргчасть.",
            },
            {
              title: "Результат",
              text: "Вместо хаотичной подготовки — единая продюсерская логика, где сценарий, визуал, тайминги, бюджет и команда работают как система.",
            },
          ]}
          gallery={
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4">
                <PhotoCard src="/cases/graduation/photo-1.jpg" alt="Медиавыпускной 1" className="aspect-[16/10]" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <PhotoCard src="/cases/graduation/photo-3.jpg" alt="Медиавыпускной 3" className="aspect-[4/3]" />
                  <PhotoCard src="/cases/graduation/photo-4.jpg" alt="Медиавыпускной 4" className="aspect-[4/3]" />
                </div>
              </div>
              <div className="grid gap-4">
                <PhotoCard src="/cases/graduation/photo-2.jpg" alt="Медиавыпускной 2" className="aspect-[4/3] lg:aspect-[4/4.15]" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <PhotoCard src="/cases/graduation/design-poster.jpg" alt="Афиша" className="aspect-[16/10]" />
                  <PhotoCard src="/cases/graduation/design-badge.png" alt="Бейдж" className="aspect-[16/10]" />
                </div>
              </div>
            </div>
          }
          extra={
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <PhotoCard src="/cases/graduation/script.png" alt="Фрагмент сценария" className="aspect-[4/3]" />
                <PhotoCard src="/cases/graduation/timings.png" alt="Фрагмент таймингов" className="aspect-[4/3]" />
                <PhotoCard src="/cases/graduation/budget.png" alt="Фрагмент сметы" className="aspect-[4/3]" />
                <PhotoCard src="/cases/graduation/tasks.png" alt="Фрагмент задач" className="aspect-[4/3]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group rounded-[26px] border border-white/10 bg-white/[0.02] p-2">
                  <video src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-1_yehdvl.mp4" autoPlay muted loop playsInline controls className="aspect-[4/3] w-full rounded-[20px] bg-black object-cover" />
                </div>
                <div className="group rounded-[26px] border border-white/10 bg-white/[0.02] p-2">
                  <video src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-2_njjnep.mp4" autoPlay muted loop playsInline controls className="aspect-[4/3] w-full rounded-[20px] bg-black object-cover" />
                </div>
                <PhotoCard src="/cases/graduation/chat-1.png" alt="Командная координация" className="aspect-[4/3]" />
                <PhotoCard src="/cases/graduation/chat-3.png" alt="Дедлайны и правки" className="aspect-[4/3]" />
              </div>
            </div>
          }
        />

        <CaseSection
          id="glowbyte"
          eyebrow="Коммерческий proof-case"
          title="GlowByte — работа по ТЗ клиента и управление продакшеном"
          summary="Этот кейс показывает, что я умею работать не только во внутренних системах, но и в коммерческом формате: есть бренд, внешнее ТЗ, продакшен-команда и результат, который нужно сдать управляемо и без хаоса."
          chips={["GlowByte", "ТЗ", "команда", "3000+ фото", "видео"]}
          intro="Внутри — задача, как был собран pipeline и какие материалы подтверждают роль управления."
          cards={[
            {
              title: "Задача",
              text: "Организовать фото- и видеапродакшн под корпоративное мероприятие с контентом для отчётности, внутренних коммуникаций и публикаций.",
            },
            {
              title: "Что собрал",
              text: "Команду, распределение зон, требования к контенту, pipeline съёмка → отбор → обработка → сдача и контроль качества по срокам.",
            },
            {
              title: "Что доказывает кейс",
              text: "Умею работать по внешнему ТЗ, собирать коммерческий продакшн и управлять командой, а не только участвовать в креативной части.",
            },
          ]}
          gallery={
            <div className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <PhotoCard src="/cases/glowbyte/photo-1.jpg" alt="GlowByte 1" className="aspect-[4/3]" />
                <PhotoCard src="/cases/glowbyte/photo-2.jpg" alt="GlowByte 2" className="aspect-[4/3]" />
                <PhotoCard src="/cases/glowbyte/photo-3.jpg" alt="GlowByte 3" className="aspect-[4/3]" />
                <PhotoCard src="/cases/glowbyte/photo-4.jpg" alt="GlowByte 4" className="aspect-[4/3]" />
              </div>
              <div className="grid gap-4">
                <PhotoCard src="/cases/glowbyte/contract-1.png" alt="Фрагмент ТЗ GlowByte" className="aspect-[16/10]" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <PhotoCard src="/cases/glowbyte/chat-1.png" alt="Командная координация GlowByte" className="aspect-[16/10]" />
                  <PhotoCard src="/cases/glowbyte/chat-2.png" alt="Распределение зон GlowByte" className="aspect-[16/10]" />
                </div>
              </div>
            </div>
          }
          extra={
            <div className="max-w-xl">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.02] p-2">
                <video src="https://res.cloudinary.com/dvb1limg4/video/upload/video_t7tuw6.mp4" autoPlay muted loop playsInline controls className="aspect-[16/10] w-full rounded-[20px] bg-black object-cover" />
              </div>
            </div>
          }
        />

        <CaseSection
          id="gf"
          eyebrow="Кейс 03"
          title="GF — выручка, вал и управленческие гипотезы"
          summary="Этот кейс показывает мою способность работать не только с креативом, но и с цифрами, логикой контроля и гипотезами для принятия решений."
          chips={["аналитика", "план / факт", "вал", "решения"]}
          intro="Внутри — что анализировал, как использовал данные и чем это полезно для управления." 
          cards={[
            {
              title: "Что делал",
              text: "Собирал и структурировал данные по выручке, визуализировал план / факт и отклонения, отслеживал динамику и выделял проблемные точки.",
            },
            {
              title: "Как думал",
              text: "Не ограничивался цифрами: предлагал гипотезы по обучению, корпоративной культуре, адаптации, сетям и упрощению регламентов.",
            },
            {
              title: "Что доказывает кейс",
              text: "Умею работать с аналитикой как с управленческим инструментом и превращать показатели в решения, а не в отчётность ради отчётности.",
            },
          ]}
          gallery={
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <PhotoCard src="/cases/gf/gf-1.png" alt="План факт" className="aspect-[4/3]" />
              <PhotoCard src="/cases/gf/gf-2.png" alt="Динамика выручки" className="aspect-[4/3]" />
              <PhotoCard src="/cases/gf/chat-1.png" alt="Гипотезы улучшения" className="aspect-[4/3]" />
              <PhotoCard src="/cases/gf/chat-2.png" alt="Управленческие предложения" className="aspect-[4/3]" />
            </div>
          }
        />

        <CaseSection
          id="bpmn"
          eyebrow="Кейс 04"
          title="Проектирование и оптимизация процессов (BPMN)"
          summary="Здесь акцент не на дублировании описаний, а на сути: умею не только вести проект, но и проектировать сами правила его работы — роли, документы, согласования и контроль."
          chips={["BPMN", "роли", "согласования", "SLA"]}
          intro="Внутри — что именно было спроектировано, что изменилось и почему это усиливает мой профиль как project / operations-специалиста."
          cards={[
            {
              title: "Что сделал",
              text: "Разложил процесс на этапы, выделил роли, зафиксировал точки согласования и встроил контроль сроков, документов и финансовых потоков.",
            },
            {
              title: "Что изменилось",
              text: "Процесс стал прозрачнее: понятнее зона ответственности, логика прохождения документов и точки, где нужен контроль и SLA.",
            },
            {
              title: "Что доказывает кейс",
              text: "Могу не только координировать текущую работу, но и проектировать основу системы, на которой эта работа держится.",
            },
          ]}
          gallery={
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <PhotoCard src="/cases/bpmn/bpmn-1.png" alt="BPMN схема" className="aspect-[4/3]" />
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <div className="text-sm font-semibold text-white">Почему этот кейс важен</div>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Он показывает, что я умею мыслить не только задачами и дедлайнами, но и архитектурой процесса: кто, когда, через что, по каким правилам и с какими контрольными точками двигает работу дальше.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["структура", "логика", "контроль", "масштабируемость"].map((item) => (
                    <CaseChip key={item}>{item}</CaseChip>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <section id="process" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[0.86fr_1.14fr] sm:scroll-mt-32">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
            <SectionEyebrow>Как проходит работа со мной</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Понятный процесс вместо ручного хаоса
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Мне важно не просто двигать проект по задачам, а собирать систему, в которой понятно, кто за что отвечает, как всё связано и где находится контроль.
            </p>
            <div className="mt-6">
              <ContactButton label="Связаться" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-violet-300">{item.step}</div>
                <div className="mt-3 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16 scroll-mt-28 grid gap-4 lg:grid-cols-[0.84fr_1.16fr] sm:scroll-mt-32">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
            <SectionEyebrow>Инструменты</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              То, чем усиливаю управление и продакшн
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Хорошо чувствую стык между контентом и операционкой: могу говорить и с креативной командой, и с теми, кому нужны сроки, предсказуемость и прозрачный результат.
            </p>
            <div className="mt-6">
              <ContactButton label="Связаться" />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900/84 to-zinc-950/88 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.34)] sm:p-8">
            <div className="flex flex-wrap gap-3">
              {tools.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-16 mb-8 scroll-mt-28 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(91,33,182,0.18),rgba(9,9,11,0.96))] shadow-[0_24px_90px_rgba(0,0,0,0.42)] sm:scroll-mt-32">
          <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-8 lg:p-10">
            <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/18 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-orange-500/14 blur-3xl" />

            <div className="relative flex flex-col justify-between">
              <div>
                <SectionEyebrow>Контакты</SectionEyebrow>
                <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Если вам нужен руководитель проектов / продюсер, который собирает систему, а не просто двигает задачи
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                  Могу подключиться к роли, где нужно связать команду, процессы, визуал, сроки и результат в одну рабочую логику. Открыт к обсуждению роли, формата и задач.
                </p>
              </div>

              <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Коротко</div>
                <div className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  Особенно полезен там, где проект нужно быстро собрать, убрать хаос и удержать команду в рабочем ритме.
                </div>
              </div>
            </div>

            <div className="relative grid gap-4 content-start">
              <a href="https://t.me/Rovers1236" className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_12px_34px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Telegram</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">@Rovers1236</div>
                <div className="mt-2 text-sm text-zinc-300">Основной и самый быстрый способ связи</div>
              </a>

              <a href="mailto:anton6370@gmail.com" className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_12px_34px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Почта</div>
                <div className="mt-3 break-all text-2xl font-semibold tracking-tight text-white sm:text-3xl">anton6370@gmail.com</div>
                <div className="mt-2 text-sm text-zinc-300">Для отклика, деталей по роли и рабочих обсуждений</div>
              </a>

              <div className="pt-2">
                <ContactButton label="Связаться" className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
