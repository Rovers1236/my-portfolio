export default function Home() {
  function MobileCollapse({
    title = "Подробнее",
    children,
  }: {
    title?: string;
    children: any;
  }) {
    return (
      <>
        <div className="sm:hidden">
          <details className="group rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none text-sm font-medium text-zinc-200 marker:hidden">
              {title}
            </summary>
            <div className="mt-3 text-[15px] leading-7 text-zinc-300">{children}</div>
          </details>
        </div>
        <div className="hidden sm:block">{children}</div>
      </>
    );
  }

  const metrics = [
    { value: "12 000+", label: "участников в крупных проектах" },
    { value: "2M ₽", label: "бюджеты закупок и организации" },
    { value: "30", label: "человек в командах и подрядчиках" },
    { value: "3000+", label: "единиц контента в коммерческих проектах" },
  ];

  const highlights = [
    "Проектное управление",
    "Продюсирование",
    "Операционка",
    "BPMN / PDCA",
    "Аналитика",
    "Контроль качества",
  ];

  const roleFit = [
    "на срочных проектах, где нельзя долго раскачиваться",
    "в проектах, где много хаоса и не хватает структуры",
    "там, где нужно одновременно держать людей, сроки, качество и коммуникацию",
    "на задачах, где важны анализ, логика решений и прозрачность процессов",
    "в media / event / креативной среде, где нужно связать визуал и управление",
  ];

  const valueItems = [
    "прозрачный процесс вместо хаоса",
    "понятные роли и зоны ответственности",
    "контроль сроков, качества и загрузки",
    "результат, который не держится на ручном героизме",
  ];

  const thinkingItems = [
    "сначала собираю систему, потом масштаб",
    "хаос нельзя ускорять — его нужно структурировать",
    "хороший процесс снимает зависимость от героизма команды",
    "креатив должен жить внутри управляемой логики",
  ];

  const artifacts = [
    "ТЗ",
    "сценарии",
    "тайминги",
    "сметы",
    "дашборды и таблицы",
    "BPMN-схемы",
    "командные коммуникации",
    "контрольные документы",
  ];

  const caseCards = [
    {
      id: "graduation",
      title: "Медиавыпускной",
      desc: "Флагманский кейс: продюсирование, сценарий, визуальная система, тайминг и координация команды",
      metrics: ["флагман", "сценарий", "motion / дизайн"],
      image: "/cases/graduation-cover.jpg",
    },
    {
      id: "glowbyte",
      title: "GlowByte",
      desc: "Коммерческий кейс: работа по ТЗ клиента и управление продакшен-командой",
      metrics: ["бренд", "ТЗ", "команда"],
      image: "/cases/glowbyte-cover.jpg",
    },
    {
      id: "gf",
      title: "GF / вал и показатели",
      desc: "План / факт, аналитика и управленческие гипотезы",
      metrics: ["выручка", "план / факт", "решения"],
      image: "/cases/gf-cover.png",
    },
    {
      id: "bpmn",
      title: "BPMN",
      desc: "Проектирование бизнес-процессов и логики работы",
      metrics: ["процессы", "роли", "SLA"],
      image: "/cases/bpmn-cover.png",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Разбираю задачу и контекст",
      text: "Собираю вводные, ограничения, роли, ожидания и понимаю, где у проекта главные точки хаоса и риска.",
    },
    {
      step: "02",
      title: "Собираю структуру",
      text: "Выстраиваю систему: люди, этапы, сроки, зоны ответственности, документы, точки контроля и логику взаимодействия.",
    },
    {
      step: "03",
      title: "Запускаю и удерживаю процесс",
      text: "Синхронизирую команду, держу темп, снимаю рассинхрон и довожу проект до управляемого результата.",
    },
    {
      step: "04",
      title: "Анализирую и усиливаю",
      text: "Смотрю, где система просела, что можно оптимизировать, и собираю следующую версию процесса сильнее предыдущей.",
    },
  ];

  const tools = [
    "BPMN",
    "PDCA",
    "CRM-логика",
    "Google Sheets",
    "SQL basics",
    "Jira / Scrum",
    "Контент-планирование",
    "Координация подрядчиков",
    "Процессы и регламенты",
    "Фото / видео продакшн",
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-orange-500/20 [scrollbar-color:#27272a_#09090b]">
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp .7s ease-out both; }
          .delay-1 { animation-delay: .05s; }
          .delay-2 { animation-delay: .12s; }
          .delay-3 { animation-delay: .18s; }
        }
      `}</style>

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.16),transparent_26%),radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_24%),linear-gradient(to_bottom,#050505,#0a0a0a_40%,#050505)]" />
      <div className="fixed inset-0 -z-20 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="fixed inset-x-0 top-0 z-40 h-28 bg-gradient-to-b from-black via-black/92 to-transparent pointer-events-none sm:h-32" />

      <div className="mx-auto max-w-7xl px-4 pb-6 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <header className="fixed left-4 right-4 top-3 z-50 rounded-[24px] border border-white/10 bg-zinc-950/94 px-4 py-3 backdrop-blur-2xl shadow-[0_16px_60px_rgba(0,0,0,0.45)] sm:left-6 sm:right-6 sm:px-5 lg:left-8 lg:right-8 fade-up">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                Portfolio / Project & Production
              </div>
              <div className="mt-1 text-lg font-semibold text-white">
                Антон Гиззатов
              </div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-zinc-300">
              <a href="#cases" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                Кейсы
              </a>
              <a href="#value" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                Ценность
              </a>
              <a href="#process" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                Как работаю
              </a>
              <a href="#contacts" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                Контакты
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] fade-up delay-1">
          <div className="order-2 overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur sm:p-7 lg:order-1 lg:p-8 xl:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-orange-300">
                Project / Production / Operations
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                Москва · hybrid / project format
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
                  {item}
                </span>
              ))}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-5xl lg:text-[68px]">
              Собираю хаос
              <span className="block text-zinc-400">в работающую систему.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              Руководитель проектов / продюсер для сложных, срочных и многоуровневых задач. Быстро вхожу в контекст, выстраиваю структуру, синхронизирую людей и удерживаю проект в темпе без просадки по качеству.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Позиционирование</div>
                <div className="mt-2 text-base font-semibold text-white">Руководитель проектов / продюсер</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Для media, event, digital и креативных задач, где важны и визуал, и система.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Сильная сторона</div>
                <div className="mt-2 text-base font-semibold text-white">Структура под давлением</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Развожу роли, сроки, документы, контроль и коммуникацию в одну рабочую логику.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Доказательства</div>
                <div className="mt-2 text-base font-semibold text-white">GlowByte, Медиавыпускной, BPMN</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Коммерческий продакшн, крупные ивенты, аналитика и реальные управленческие артефакты.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#graduation" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]">
                Смотреть флагманский кейс
              </a>
              <a href="#cases" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]">
                Все кейсы
              </a>
              <a href="#contacts" className="inline-flex items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500/15">
                Связаться
              </a>
            </div>
          </div>

          <div className="order-1 grid gap-4 lg:order-2 xl:grid-rows-[minmax(0,1fr)_auto] fade-up delay-2">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/85 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur">
              <div className="relative aspect-[4/4.85] sm:aspect-[4/4.25] xl:aspect-[4/5.1]">
                <img src="/AGE-4.jpg" alt="Антон Гиззатов" className="h-full w-full object-cover object-[78%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                      Project / Producer / Operations
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      Антон Гиззатов
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      Системно собираю людей, процессы, визуал и контроль там, где проект легко уходит в перегруз.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[28px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.38)] backdrop-blur sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Быстрый контакт</div>
                    <div className="mt-3 text-xl font-semibold leading-tight text-white">Пиши в Telegram или на почту.</div>
                  </div>
                  <div className="rounded-2xl border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-200">
                    open to work
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <a href="https://t.me/Rovers1236" className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Telegram</div>
                    <div className="mt-2 text-lg font-semibold text-white">@Rovers1236</div>
                  </a>
                  <a href="mailto:anton6370@gmail.com" className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Почта</div>
                    <div className="mt-2 text-base font-semibold break-all text-white">anton6370@gmail.com</div>
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.38)] backdrop-blur sm:p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Ключевой тезис</div>
                <div className="mt-3 text-2xl font-semibold leading-tight text-white">
                  Не просто веду задачи.
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Проектирую систему, в которой людям понятно кто за что отвечает, где находится контроль и как проект доходит до результата.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 fade-up delay-3">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-[26px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Где я особенно полезен</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Синхронизирую хаотичные проекты, где много пересечений между людьми, задачами и сроками
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Это мой основной профессиональный профиль: быстро входить в сложный контекст, собирать структуру, выстраивать ритм команды и удерживать проект там, где без системы всё начинает рассыпаться.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Синхронизация с резюме</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Роль на сайте и в резюме совпадает
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Я продаю себя как руководителя проектов / продюсера на стыке креативной среды, event / media-проектов, аналитики и процессного управления — без разрыва между визуалом, логикой и операционкой.
            </p>
          </div>
        </section>

        <section id="value" className="mt-16 scroll-mt-28 sm:scroll-mt-32 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Что я даю проекту</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Что получает команда / работодатель</h2>
            <div className="mt-5 grid gap-3">
              {valueItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Как я думаю</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Моё управленческое мышление</h2>
            <div className="mt-5 grid gap-3">
              {thinkingItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Подхожу вам, если…</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Когда моя роль особенно полезна</h2>
            <div className="mt-5 grid gap-3">
              {roleFit.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Артефакты управления</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Не только говорю про систему — работаю через неё</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {artifacts.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="mt-16 scroll-mt-28 sm:scroll-mt-32">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейсы</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Кейсы, в которых видно и креатив, и систему</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {caseCards.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950/85 shadow-[0_16px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/15" />
                <div className="relative flex h-[300px] flex-col justify-end p-6">
                  <div className="text-xl font-semibold text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-zinc-100">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="graduation" className="mt-16 scroll-mt-28 rounded-[32px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur sm:scroll-mt-32 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Флагманский кейс</div>
              <h3 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Медиавыпускной — продюсирование события как цельной системы</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "сценарий",
                "тайминги",
                "дизайн",
                "motion",
                "смета",
                "координация",
              ].map((item) => (
                <span key={item} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 max-w-3xl">
            <MobileCollapse title="Открыть описание кейса">
              <p className="text-base leading-7 text-zinc-300 sm:text-lg">
                Здесь видно меня именно как продюсера / руководителя проекта: я собирал мероприятие не как набор задач, а как единую систему из сценария, тайминга, визуала, команды, сметы и контроля исполнения.
              </p>
            </MobileCollapse>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Задача</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Организовать крупное мероприятие с награждением, сценарием, визуальной системой, motion, сметой, таймингом и несколькими параллельными направлениями работы.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Сложность</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Риск рассинхрона между блоками, зависимость таймингов друг от друга, необходимость держать вместе контент, сцену, задачи, визуал и подготовку материалов.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Результат</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Вместо разрозненных направлений — синхронизированная система подготовки: сценарий, команда, визуал, тайминг, смета и контроль в одном ритме.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Было → стало</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Было: много направлений, визуальных носителей, отдельных задач и высокий риск хаоса. Стало: единая продюсерская логика, в которой сценарий, визуальная часть, тайминги, бюджет и команда работают как одна система.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Что этот кейс доказывает</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Я умею держать несколько направлений одновременно, собирать сложную подготовку в понятную структуру и быть руководителем проекта / продюсером не по названию, а по реальной роли внутри системы.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_0.9fr] auto-rows-fr">
            <img src="/cases/graduation/photo-1.jpg" alt="Медиавыпускной 1" className="aspect-[16/10] w-full rounded-[24px] object-cover xl:col-span-2" />
            <img src="/cases/graduation/photo-2.jpg" alt="Медиавыпускной 2" className="aspect-[16/10] w-full rounded-[24px] object-cover" />
            <img src="/cases/graduation/photo-3.jpg" alt="Медиавыпускной 3" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
            <img src="/cases/graduation/photo-4.jpg" alt="Медиавыпускной 4" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-poster.jpg" alt="Афиша" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Афиша</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-badge.png" alt="Бейдж" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Бейдж</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-popsocket.png" alt="Попсокет" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Попсокет</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-shopper.png" alt="Шоппер" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Шоппер</div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-notebook.png" alt="Блокнот" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Блокнот</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/design-stickerpack.png" alt="Стикерпак" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Стикерпак</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <video src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-1_yehdvl.mp4" autoPlay muted loop playsInline controls className="aspect-[4/3] w-full rounded-[18px] bg-black object-cover" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Motion 01</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <video src="https://res.cloudinary.com/dvb1limg4/video/upload/motion-2_njjnep.mp4" autoPlay muted loop playsInline controls className="aspect-[4/3] w-full rounded-[18px] bg-black object-cover" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Motion 02</div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/script.png" alt="Фрагмент сценария" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Фрагмент сценария</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/timings.png" alt="Фрагмент таймингов" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Тайминги</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/budget.png" alt="Фрагмент сметы" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Смета</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/tasks.png" alt="Фрагмент задач" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Задачи</div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/chat-1.png" alt="Координация блока 1" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Командная координация</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/chat-2.png" alt="Координация блока 2" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Общая логика блока</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/chat-3.png" alt="Координация блока 3" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Дедлайны и правки</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/graduation/chat-4.png" alt="Координация блока 4" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Вопросы по механике</div>
            </div>
          </div>
        </section>

        <section id="glowbyte" className="mt-16 scroll-mt-28 rounded-[32px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur sm:scroll-mt-32 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Коммерческий proof-case</div>
              <h3 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">GlowByte — работа по ТЗ клиента и управление продакшеном</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["GlowByte", "6 фотографов", "2 видеографа", "ТЗ", "3000+ фото"].map((item) => (
                <span key={item} className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 max-w-3xl">
            <MobileCollapse title="Открыть описание кейса">
              <p className="text-base leading-7 text-zinc-300 sm:text-lg">
                Этот кейс показывает, что я умею работать не только во внутренних системах, но и в коммерческом формате: есть бренд, есть внешнее ТЗ, есть продакшен-команда и есть результат, который нужно сдать управляемо и без хаоса.
              </p>
            </MobileCollapse>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Задача</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Организовать фото- и видеапродакшн под корпоративное мероприятие с контентом для отчётности, внутренних коммуникаций и публикаций.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Что собрал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Команду, распределение зон, требования к контенту, pipeline съёмка → отбор → обработка → сдача, а также логику контроля качества и сроков.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Что этот кейс доказывает</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Я умею работать по внешнему ТЗ, собирать коммерческий продакшн, управлять командой и выдачей результата, а не только участвовать в креативной части проекта.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
            <img src="/cases/glowbyte/photo-1.jpg" alt="GlowByte 1" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
            <img src="/cases/glowbyte/photo-2.jpg" alt="GlowByte 2" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
            <img src="/cases/glowbyte/photo-3.jpg" alt="GlowByte 3" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
            <img src="/cases/glowbyte/photo-4.jpg" alt="GlowByte 4" className="aspect-[4/3] w-full rounded-[24px] object-cover" />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-3 items-start">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/glowbyte/contract-1.png" alt="Фрагмент ТЗ GlowByte" className="aspect-[4/3] w-full rounded-[18px] object-cover" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Фрагмент ТЗ клиента</div>
            </div>
            <div className="grid gap-4">
              <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
                <img src="/cases/glowbyte/chat-1.png" alt="Командная координация GlowByte" className="aspect-[16/10] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Координация команды</div>
              </div>
              <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
                <img src="/cases/glowbyte/chat-2.png" alt="Распределение зон GlowByte" className="aspect-[16/10] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Распределение зон</div>
              </div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03] self-start">
              <video src="https://res.cloudinary.com/dvb1limg4/video/upload/video_t7tuw6.mp4" autoPlay muted loop playsInline controls className="aspect-[4/3] w-full rounded-[18px] bg-black object-cover" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Итоговое видео кейса</div>
            </div>
          </div>
        </section>

        <section id="gf" className="mt-16 scroll-mt-28 rounded-[32px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur sm:scroll-mt-32 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 03</div>
              <h3 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">GF — выручка, вал и управленческие гипотезы</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["план / факт", "ежедневный контроль", "вал", "решения"].map((item) => (
                <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">{item}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 max-w-3xl">
            <MobileCollapse title="Открыть описание кейса">
              <p className="text-base leading-7 text-zinc-300">Этот кейс показывает мою способность работать не только с креативом, но и с цифрами, логикой контроля и гипотезами для принятия решений.</p>
            </MobileCollapse>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Что делал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">Собирал и структурировал данные по выручке, визуализировал план / факт и отклонения, отслеживал динамику и выделял проблемные точки.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Как думал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">Не ограничивался цифрами: предлагал гипотезы по обучению, корпоративной культуре, сетям, адаптации новых сотрудников и упрощению регламентов.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Что этот кейс доказывает</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">Я умею работать с аналитикой и цифрами как с управленческим инструментом, а не только как с отчётностью.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/gf/gf-1.png" alt="Таблица GF 1" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">План / факт</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/gf/gf-2.png" alt="Таблица GF 2" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Динамика выручки</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/gf/chat-1.png" alt="Гипотезы 1" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Гипотезы улучшения</div>
            </div>
            <div className="group rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/gf/chat-2.png" alt="Гипотезы 2" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">Управленческие предложения</div>
            </div>
          </div>
        </section>

        <section id="bpmn" className="mt-16 scroll-mt-28 rounded-[32px] border border-white/10 bg-zinc-950/85 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur sm:scroll-mt-32 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 04</div>
              <h3 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">Проектирование и оптимизация процессов (BPMN)</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["5+ ролей", "документооборот", "финансовые потоки", "SLA"].map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">{item}</span>
                ))}
              </div>
              <div className="mt-5 max-w-2xl sm:max-w-none">
                <MobileCollapse title="Открыть описание кейса">
                  <p className="text-base leading-7 text-zinc-300">Этот кейс усиливает мой профиль как человека, который умеет не только вести проект, но и проектировать логику процессов, ролей, документов и точек контроля.</p>
                </MobileCollapse>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold text-white">Что сделал</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">Разложил процесс на этапы, выделил роли, зафиксировал точки согласования и встроил контроль сроков и документов.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold text-white">Что этот кейс доказывает</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">Я умею не только координировать текущую работу, но и проектировать сами правила и логику процессов.</p>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-2 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.03]">
              <img src="/cases/bpmn/bpmn-1.png" alt="BPMN схема" className="aspect-[4/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="px-2 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">BPMN-схема процесса</div>
            </div>
          </div>
        </section>

        <section id="process" className="mt-16 scroll-mt-28 grid gap-4 sm:scroll-mt-32 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Как проходит работа со мной</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Понятный процесс вместо ручного хаоса</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">Мне важно не просто двигать проект по задачам, а собирать систему, в которой понятно кто за что отвечает, как всё связано и где находится контроль.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300">{item.step}</div>
                <div className="mt-3 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16 scroll-mt-28 grid gap-4 sm:scroll-mt-32 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Инструменты</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">То, чем усиливаю управление и продакшн</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">Хорошо чувствую стык между контентом и операционкой: могу говорить и с креативной командой, и с теми, кому нужны сроки, предсказуемость и прозрачный результат.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <div className="flex flex-wrap gap-3">
              {tools.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-16 mb-8 scroll-mt-28 overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950/90 shadow-[0_24px_100px_rgba(0,0,0,0.5)] sm:scroll-mt-32">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.14),transparent_28%)]" />
            <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-10">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Контакты</div>
                  <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Нужен человек, который может быстро собрать проект, убрать хаос и удержать систему в рабочем ритме?
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                    Подключусь к роли, где нужно связать команду, сроки, визуал, документы, контроль и результат в одну понятную логику. Открыт к обсуждению проектных и постоянных форматов работы.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Фокус</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-200">Project management, production, operations</div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Формат</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-200">Hybrid / project / full-time</div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Что даю</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-200">Структуру, темп, контроль качества и прозрачность</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 content-start">
                <a href="https://t.me/Rovers1236" className="group rounded-[30px] border border-orange-400/25 bg-gradient-to-br from-orange-500/15 to-orange-500/5 p-5 shadow-[0_12px_40px_rgba(249,115,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:from-orange-500/20 hover:to-orange-500/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-orange-200/80">Основной канал</div>
                      <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">@Rovers1236</div>
                      <div className="mt-2 text-sm leading-6 text-zinc-300">
                        Telegram для быстрого контакта, обсуждения роли, задач и следующего шага.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white transition duration-300 group-hover:bg-white/15">
                      Telegram
                    </div>
                  </div>
                </a>

                <a href="mailto:anton6370@gmail.com" className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Почта</div>
                      <div className="mt-3 text-xl font-semibold tracking-tight break-all text-white sm:text-2xl">
                        anton6370@gmail.com
                      </div>
                      <div className="mt-2 text-sm leading-6 text-zinc-300">
                        Для официального отклика, подробного описания роли и рабочих деталей.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-200 transition duration-300 group-hover:bg-white/[0.08]">
                      E-mail
                    </div>
                  </div>
                </a>

                <div className="rounded-[30px] border border-white/10 bg-black/20 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Что важно</div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Особенно полезен там, где проект нужно не просто сопровождать, а быстро собрать в устойчивую систему.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
