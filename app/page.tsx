"use client";

export default function Home() {
  const nav = [
    ["Опыт", "#experience"],
    ["Кейсы", "#cases"],
    ["Как я работаю", "#process"],
    ["Навыки", "#skills"],
    ["Факты", "#facts"],
    ["Роли", "#roles"],
    ["Контакты", "#contacts"],
  ];

  const heroTags = [
    "Управление медиапроектами",
    "Координация команд и подрядчиков",
    "Контроль процессов и дедлайнов",
    "Бюджеты, логистика, сдача результата",
  ];

  const heroMetrics = [
    ["1–1.1 млн ₽", "месячный вал"],
    ["до 30", "человек в команде"],
    ["2 млн ₽", "бюджеты проектов"],
  ];

  const flow = [
    { n: "01", title: "Idea", sub: "Анализ и концепция" },
    { n: "02", title: "Team", sub: "Команда и роли" },
    { n: "03", title: "Продакшн", sub: "Процессы и контроль", accent: true },
    { n: "04", title: "Result", sub: "Публикации и рост" },
  ];

  const heroCards = [
    ["роль", "лидерство и координация"],
    ["фокус", "процессы, команда, результат"],
    ["подход", "структура вместо хаоса"],
    ["масштаб", "команды, бюджеты, крупные события"],
  ];

  const experience = [
    {
      company: "МГТУ им. Н. Э. Баумана",
      role: "Junior Specialist / Проектный офис",
      text: "BPMN-моделирование, оптимизация процессов, работа с внутренними актами, согласованиями и структурированием данных в понятные управленческие материалы.",
    },
    {
      company: "MediaBMSTU / УМП",
      role: "Организатор и продюсер внутренних медиапроектов",
      text: "Организация крупных мероприятий, управление оргкомандами, работа с бюджетами, техподдержкой, медиаблоками, дедлайнами и участниками.",
    },
    {
      company: "Glowbyte",
      role: "Подрядчик по фото- и видеопродакшну",
      text: "Подбор и координация фото- и видеокоманд для мероприятий, контроль качества контента и долгосрочное взаимодействие с клиентом.",
    },
  ];

  const cases = [
    {
      id: "01",
      title: "Медиавыпускной",
      type: "Финал медиакурсов УМП и MediaBMSTU",
      summary:
        "Главный организатор финального события с официальной частью, награждением и переходом в полностью арендованный клуб на afterparty.",
      result: [
        "около 700 участников и полный маршрут мероприятия в двух форматах",
        "бюджет 2 млн ₽, смета и коммерческое предложение под моим контролем",
        "команда 30 человек, из них 5 ответственных со своими командами",
        "рост оргкоманды примерно на 40% и производительности около 50%",
      ],
    },
    {
      id: "02",
      title: "Медиавыезд",
      type: "Обучающий и командоформирующий выезд на 3 дня",
      summary:
        "Ответственный за два блока и главный помощник главного организатора. Работал не только по своим зонам, но и помогал всей команде выезда на стыке продакшна, логистики и координации.",
      result: [
        "12 человек в двух моих блоках, полная оргкоманда — 30 человек",
        "бюджет 300 000 ₽ без базовых затрат и около 1.5 млн ₽ с полной стоимостью выезда",
        "повышение качества контента примерно на 60% относительно прошлых результатов",
        "обучение и усиление участников в дизайне, SMM, фото, видео и продюсировании",
      ],
    },
    {
      id: "03",
      title: "Glowbyte",
      type: "Подрядчик по фото- и видеопродакшну",
      summary:
        "Организация медиапродакшна для корпоративных мероприятий и постоянное взаимодействие с клиентом как подрядчик: подбор команд, координация и итоговая сдача материалов.",
      result: [
        "команда 12 человек: 7 фотографов и 5 видеографов на корпоративном событии",
        "3000+ уникальных фотографий, 2 итоговых видео и 20+ reels",
        "на постоянной основе предоставляю фотографов и видеографов на мероприятия",
      ],
    },
    {
      id: "04",
      title: "Проектный офис МГТУ им. Н. Э. Баумана",
      type: "Основная работа / процессы и операционка",
      summary:
        "Работа в проектном офисе с упором на процессы, структуру и внутреннюю координацию: BPMN-моделирование, согласования, документы и превращение сложных данных в понятные рабочие материалы.",
      result: [
        "BPMN-моделирование и оптимизация процессов для разных подразделений",
        "работа с внутренними актами, маршрутами согласования и сопровождением изменений",
        "подготовка презентационных и управленческих материалов из сырых данных",
      ],
    },
    {
      id: "05",
      title: "Performance / Growth кейс",
      type: "Коммерческая точка / рост продаж и вала",
      summary:
        "Подключился к работе в конце ноября и через управление командой, мотивацией и пересборку рабочих подходов помог вывести точку на новый уровень ежедневной и месячной выручки.",
      result: [
        "вал до подключения — 560k ₽, в декабре и январе стабильно 1–1.1 млн ₽",
        "появились дни с кассой 100k ₽, базовый дневной уровень — около 20–30k ₽",
        "рост через мотивацию команды, новые подходы к работе и анализ существующих схем",
      ],
    },
  ];

  const process = [
    ["01", "Идея", "Цели, формат, ограничения", false],
    ["02", "Команда", "Подбор ролей и распределение задач", false],
    ["03", "Продакшн", "Координация процессов и сроков", true],
    ["04", "Контроль", "Качество, согласования, дедлайны", false],
    ["05", "Результат", "Сдача проекта и анализ итогов", false],
  ] as const;

  const skills = [
    ["Управление проектами", ["планирование", "контроль сроков", "согласования", "координация команд"]],
    ["Медиапродакшн", ["фото и видео", "постановка ТЗ", "контроль качества", "финальная сдача"]],
    ["Операционка", ["подрядчики", "сметы и КП", "логистика", "документы и маршруты"]],
    ["Инструменты", ["BPMN", "Jira", "Google Sheets", "Yougile", "Notion", "SQL basics"]],
  ] as const;

  const facts = [
    ["700+", "участников крупнейшего события"],
    ["3000+", "единиц контента"],
    ["до 30", "человек в командах"],
    ["2 млн ₽", "бюджеты и закупки проектов"],
  ] as const;

  const roles = [
    "Продюсер / Project Manager",
    "Project Manager медиапроектов",
    "Production Manager",
    "Операционный менеджер",
    "Координатор проектов",
  ];

  const contacts = [
    ["Telegram", "@Rovers1236", "https://t.me/Rovers1236"],
    ["Телефон", "+7 900 027-27-74", "tel:+79000272774"],
    ["Email", "anton6370@gmail.com", "mailto:anton6370@gmail.com"],
  ] as const;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0B0B] text-[#F3F3F3] selection:bg-[#D62828] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .radial-soft {
          background: radial-gradient(circle at 82% 18%, rgba(214,40,40,0.05), transparent 24%);
        }
        .hero-photo {
          filter: grayscale(100%) contrast(1.03) brightness(0.86);
        }
        .case-card:hover .case-accent {
          width: 56px;
          opacity: 1;
        }
        .case-accent {
          width: 0;
          opacity: 0;
          transition: width .24s ease, opacity .24s ease;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 xl:px-16">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white/92">
            AG / Anton Gizzatov
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#A7A7A7] transition hover:text-[#F3F3F3]">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden radial-soft">
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 xl:px-16 xl:pb-24 xl:pt-20">
            <div className="grid gap-6 xl:grid-cols-12 xl:gap-10">
              <div className="order-1 xl:col-span-7">
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-sm border border-white/10 bg-[#111111] md:hidden">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src="/AGE-4.jpg"
                          alt="Антон Гиззатов"
                          className="hero-photo h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.32)_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Портрет</div>
                          <div className="mt-2 text-lg font-medium text-white">Антон Гиззатов</div>
                          <div className="mt-1 text-sm leading-6 text-[#B9B9B9]">Продюсер / Project Manager</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                      {heroCards.map(([k, v]) => (
                        <div key={k} className="border border-white/10 bg-[#111111]/92 p-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{k}</div>
                          <div className="mt-2 text-sm leading-6 text-[#D3D3D3]">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                    {flow.map((item) => (
                      <div
                        key={item.title}
                        className={[
                          "min-w-0 rounded-sm border bg-[#111111] px-4 py-5 md:px-5 md:py-6",
                          item.accent ? "border-[#D62828] bg-[#160808] shadow-[0_0_18px_rgba(214,40,40,0.10)]" : "border-white/10",
                        ].join(" ")}
                      >
                        <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{item.n}</div>
                        <div
                          className={
                            item.accent
                              ? "mt-5 break-words text-[17px] font-semibold text-[#D62828] md:text-[19px] lg:text-[21px]"
                              : "mt-5 break-words text-[17px] font-semibold text-[#F3F3F3] md:text-[19px] lg:text-[21px]"
                          }
                        >
                          {item.title}
                        </div>
                        <div className="mt-3 text-sm leading-6 text-[#8A8A8A]">{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-2 xl:col-span-5 xl:pl-2">
                <div className="relative z-10">
                  <div className="mb-7 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                    <span className="h-2 w-2 bg-[#D62828]" />
                    <span>Продюсер / Project Manager</span>
                  </div>

                  <h1 className="max-w-[760px] text-[34px] font-semibold leading-[0.9] tracking-[-0.055em] text-[#F3F3F3] sm:text-[56px] lg:text-[72px] xl:text-[78px]">
                    <span className="block">Продюсер /</span>
                    <span className="mt-1 block">Project Manager</span>
                  </h1>

                  <p className="mt-5 max-w-[560px] text-[19px] font-normal leading-[1.16] tracking-[-0.03em] text-[#D9D9D9] sm:text-[23px] lg:text-[29px]">
                    для медиапроектов, команд, системной координации
                  </p>

                  <p className="mt-8 max-w-[620px] text-[17px] leading-[1.72] text-[#A7A7A7] md:text-[20px]">
                    Координирую медиапроекты и команды, управляю процессами, сроками, подрядчиками и качеством
                    контента. Этот сайт — краткая выжимка моего опыта, подхода к работе и проектов, где важны
                    системность, ответственность и результат.
                  </p>

                  <div className="mt-8 flex max-w-[640px] flex-wrap gap-3">
                    {heroTags.map((item) => (
                      <div
                        key={item}
                        className="border border-white/10 bg-[#111111]/80 px-3 py-2 text-[12px] uppercase tracking-[0.14em] text-[#B6B6B6]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#contacts"
                      className="inline-flex items-center gap-3 rounded-sm border border-[#D62828] bg-[#D62828] px-6 py-3 text-sm font-medium text-white transition hover:border-[#C51F1F] hover:bg-[#C51F1F]"
                    >
                      Связаться <span aria-hidden>→</span>
                    </a>
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-3 rounded-sm border border-white/10 bg-[#111111] px-6 py-3 text-sm font-medium text-[#F3F3F3] transition hover:border-white/20 hover:bg-[#161616]"
                    >
                      Посмотреть опыт <span aria-hidden>→</span>
                    </a>
                  </div>

                  <div className="mt-12 grid max-w-[620px] grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                    {heroMetrics.map(([value, label]) => (
                      <div key={label} className="sm:min-w-0 sm:border-l sm:border-white/10 sm:pl-4 sm:first:border-l-0 sm:first:pl-0">
                        <div className="whitespace-nowrap text-[22px] font-semibold tracking-[-0.04em] text-[#F3F3F3] md:text-[30px]">
                          {value}
                        </div>
                        <div className="mt-1 text-sm text-[#7E7E7E] md:text-[15px]">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-3 hidden xl:col-span-7 xl:block" />
              <div className="order-4 hidden xl:col-span-5 xl:block">
                <div className="overflow-hidden rounded-sm border border-white/10 bg-[#111111]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/AGE-4.jpg"
                      alt="Антон Гиззатов"
                      className="hero-photo h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.32)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Портрет</div>
                      <div className="mt-2 text-lg font-medium text-white">Антон Гиззатов</div>
                      <div className="mt-1 text-sm leading-6 text-[#B9B9B9]">Продюсер / Project Manager</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                Опыт работы
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[700px] text-[15px] leading-8 text-[#8F8F8F]">
              Формальный и проектный опыт, который объединяет медиа, операционное управление, процессы,
              взаимодействие с подрядчиками и контроль исполнения.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <article key={item.company + item.role} className="border border-white/10 bg-[#111111] p-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Опыт</div>
                <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#F3F3F3]">{item.company}</div>
                <div className="mt-2 text-sm text-[#A7A7A7]">{item.role}</div>
                <p className="mt-5 text-[15px] leading-8 text-[#BDBDBD]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                Ключевые кейсы
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[700px] text-[15px] leading-8 text-[#8F8F8F]">
              Ниже — проекты и рабочие ситуации, которые лучше всего показывают мой уровень координации,
              организационного лидерства, управления командой и контроля результата.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.title}
                className="case-card group relative overflow-hidden rounded-sm border border-white/10 bg-[#111111] transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="case-accent absolute left-0 top-0 z-10 h-[2px] bg-[#D62828]" />
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{item.id}</div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#F3F3F3]">{item.title}</div>
                  <div className="mt-2 text-sm text-[#A7A7A7]">{item.type}</div>
                  <p className="mt-5 text-[15px] leading-7 text-[#BDBDBD]">{item.summary}</p>
                  <ul className="mt-5 space-y-2 text-[15px] leading-7 text-[#D5D5D5]">
                    {item.result.map((line) => (
                      <li key={line}>— {line}</li>
                    ))}
                  </ul>
                  <a
                    href="#contacts"
                    className="mt-7 inline-flex items-center gap-2 border-b border-[#D62828] pb-1 text-sm text-[#F3F3F3] transition hover:text-[#D62828]"
                  >
                    Подробнее при контакте <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                  Как я работаю
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[700px] text-[15px] leading-8 text-[#8F8F8F]">
                Для меня проект — это не набор хаотичных задач, а управляемая цепочка, где у каждого этапа есть
                цель, ответственный и понятный критерий качества.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {process.map(([n, title, text, accent]) => (
                <div
                  key={n}
                  className={["group border bg-[#111111] p-6 transition", accent ? "border-[#D62828]/70" : "border-white/10 hover:border-white/20"].join(" ")}
                >
                  <div className={accent ? "h-[2px] w-10 bg-[#D62828]" : "h-[2px] w-10 bg-white/12 group-hover:bg-white/20"} />
                  <div className={accent ? "mt-5 text-[#D62828]" : "mt-5 text-white/35"}>{n}</div>
                  <div className={accent ? "mt-3 text-[24px] font-semibold text-[#D62828]" : "mt-3 text-[24px] font-semibold text-[#F3F3F3]"}>
                    {title}
                  </div>
                  <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#A7A7A7]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                  Навыки и инструменты
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[700px] text-[15px] leading-8 text-[#8F8F8F]">
                Набор навыков, который помогает мне работать на пересечении продюсирования, project management и
                операционной координации.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {skills.map(([title, items]) => (
                <article key={title} className="border border-white/10 bg-[#111111] p-6">
                  <div className="text-lg font-medium text-[#F3F3F3]">{title}</div>
                  <ul className="mt-5 space-y-2 text-[15px] leading-7 text-[#A7A7A7]">
                    {items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="facts" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
          <div className="mb-10">
            <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
              Факты и цифры
            </h2>
            <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {facts.map(([value, label]) => (
              <div key={label} className="border border-white/10 bg-[#111111] p-7">
                <div className="mb-5 h-0.5 w-10 bg-[#D62828]" />
                <div className="text-[38px] font-semibold tracking-[-0.05em] text-[#F3F3F3] md:text-[42px]">
                  {value}
                </div>
                <div className="mt-2 text-[15px] leading-7 text-[#A7A7A7]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="roles" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                  Роли, которые рассматриваю
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[700px] text-[15px] leading-8 text-[#8F8F8F]">
                Основной вектор — роли, где ценится сочетание системного мышления, управления командой,
                координации процессов и медиапонимания.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {roles.map((role) => (
                <div key={role} className="border border-white/10 bg-[#111111] p-6 text-[16px] leading-7 text-[#D7D7D7]">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
            <div className="max-w-[860px]">
              <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[46px]">
                Профессиональный подход
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              <p className="mt-8 text-[18px] leading-8 text-[#C9C9C9] md:text-[20px]">
                Работаю на стыке продюсирования, управления проектами и операционной координации. Сильнее всего
                проявляю себя там, где нужно собрать людей, выстроить процесс, удержать сроки и довести задачу до
                понятного результата.
              </p>
              <p className="mt-7 text-[18px] leading-8 text-[#A7A7A7] md:text-[20px]">
                Для меня важны прозрачная структура, сильная коммуникация внутри команды, контроль точек риска и
                предсказуемый результат. Я не просто закрываю задачи, а удерживаю проект в рабочем контуре от идеи
                до финальной сдачи.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {[
                ["Процессы", "Понятная структура, роли, контроль и движение проекта без хаоса."],
                ["Команда", "Подбираю людей под задачу и выстраиваю рабочую коммуникацию."],
                ["Контроль", "Слежу за сроками, согласованиями, качеством и точками риска."],
                ["Результат", "Фокус не только на контенте, но и на цели, ради которой он создаётся."],
              ].map(([title, text]) => (
                <div key={title} className="border border-white/10 bg-[#111111] p-6">
                  <div className="text-lg font-medium text-[#F3F3F3]">{title}</div>
                  <p className="mt-3 text-[15px] leading-7 text-[#A7A7A7]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-stretch xl:gap-14">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                <span className="h-2 w-2 bg-[#D62828]" />
                <span>Контакты</span>
              </div>

              <h2 className="max-w-[620px] text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[52px]">
                <span className="block">Открыт к предложениям</span>
                <span className="block">и новым задачам</span>
              </h2>

              <p className="mt-7 max-w-[660px] text-[18px] leading-[1.75] text-[#A7A7A7] md:text-[20px]">
                Если вам нужен человек на роли, связанные с координацией проектов, продакшном, операционным
                управлением или сборкой команды под результат — буду рад обсудить формат работы.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://t.me/Rovers1236"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-sm border border-[#D62828] bg-[#D62828] px-6 py-3 text-sm font-medium text-white transition hover:border-[#C51F1F] hover:bg-[#C51F1F]"
                >
                  Связаться в Telegram <span aria-hidden>→</span>
                </a>
                <a
                  href="mailto:anton6370@gmail.com"
                  className="inline-flex items-center gap-3 rounded-sm border border-white/10 bg-[#111111] px-6 py-3 text-sm font-medium text-[#F3F3F3] transition hover:border-white/20 hover:bg-[#161616]"
                >
                  Написать на почту <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="flex w-full max-w-[360px] flex-col border border-white/10 bg-[#111111] p-7 md:p-8">
                <div className="mb-6 text-xs uppercase tracking-[0.18em] text-white/45">Контакты</div>
                <div className="flex-1 space-y-6">
                  {contacts.map(([label, value, href], index) => (
                    <div key={label} className={index < contacts.length - 1 ? "border-b border-white/10 pb-6" : ""}>
                      <div className="text-sm text-[#7E7E7E]">{label}</div>
                      <a href={href} className="mt-2 inline-block text-[18px] text-[#F3F3F3] transition hover:text-[#D62828]">
                        {value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}