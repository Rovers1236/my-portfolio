"use client";

export default function Home() {
  const nav = [
    ["Кейсы", "#cases"],
    ["Подход", "#approach"],
    ["Опыт", "#experience"],
    ["Процесс", "#process"],
    ["Навыки", "#skills"],
    ["Контакты", "#contacts"],
  ];

  const heroMetrics = [
    ["1–1.1 млн ₽", "месячный вал"],
    ["до 30", "человек в команде"],
    ["2 млн ₽", "бюджеты проектов"],
    ["3000+", "единиц контента"],
  ];

  const heroTags = [
    "Продюсирование",
    "Project Management",
    "CRM-мышление",
    "PDCA-подход",
    "Операционка",
    "Медиапроекты",
  ];

  const featuredCases = [
    {
      id: "01",
      title: "Медиавыпускной",
      label: "700+ участников",
      description:
        "Собрал рабочую систему для финального события с официальной частью, награждением и afterparty в полностью арендованном клубе.",
      bullets: [
        "бюджет 2 млн ₽ под моим контролем",
        "команда 30 человек, из них 5 ответственных лидов",
        "рост оргкоманды примерно на 40%",
      ],
    },
    {
      id: "02",
      title: "Glowbyte",
      label: "12 человек в команде",
      description:
        "Подрядчик по фото- и видеопродакшну для корпоративных мероприятий: подбор команд, координация процессов и итоговая сдача материалов.",
      bullets: [
        "7 фотографов и 5 видеографов",
        "3000+ уникальных фотографий",
        "2 итоговых видео и 20+ reels",
      ],
    },
    {
      id: "03",
      title: "Growth кейс",
      label: "рост вала до 1–1.1 млн ₽",
      description:
        "Через управление командой, мотивацией и пересборку рабочих подходов помог вывести точку на новый уровень выручки.",
      bullets: [
        "до подключения — 560k ₽",
        "появились дни с кассой 100k ₽",
        "рост через мотивацию и новые рабочие схемы",
      ],
    },
  ];

  const ownership = [
    {
      title: "Сборка структуры проекта",
      text: "Цели, роли, этапы, зоны ответственности и рабочий ритм команды.",
    },
    {
      title: "Координация людей и коммуникации",
      text: "Связка команды, подрядчиков, заказчика и внутренних процессов без потери контекста.",
    },
    {
      title: "Контроль сроков и результата",
      text: "Дедлайны, согласования, качество материалов, финальная сдача и управляемый темп работы.",
    },
    {
      title: "CRM-логика процессов",
      text: "Статусы, этапы, точки контроля и прозрачность движения проекта без потерь в хаосе.",
    },
  ];

  const strengths = [
    "сложные проекты с большим количеством вводных",
    "координация людей с разными ролями и уровнем ответственности",
    "медиапродакшн и проекты, где важны и визуал, и система",
    "выстраивание рабочего контура от идеи до финальной сдачи",
    "CRM-логика, контроль статусов и прозрачность процессов",
    "переход от хаоса к управляемому циклу через PDCA-мышление",
  ];

  const approachCards = [
    {
      title: "CRM как логика порядка",
      text: "Мне близок CRM-подход как способ держать под контролем не только клиентов, но и саму структуру работы: кто на каком этапе, где узкое место, что требует реакции и где теряется темп. Это мышление про прозрачность, управляемость и контроль движения проекта.",
    },
    {
      title: "PDCA как рабочий цикл",
      text: "Я воспринимаю проект как цикл: спланировать, запустить, проверить результат, скорректировать систему и перейти к следующему этапу уже сильнее. Так я смотрю и на процессы, и на команды, и на медиапродакшн.",
    },
  ];

  const experience = [
    {
      company: "МГТУ им. Н. Э. Баумана",
      role: "Junior Specialist / Проектный офис",
      text: "BPMN-моделирование, оптимизация процессов, работа с внутренними актами, согласованиями и переводом сырых данных в понятные управленческие материалы.",
    },
    {
      company: "MediaBMSTU",
      role: "Организатор и продюсер внутренних медиапроектов",
      text: "Организация крупных мероприятий, управление оргкомандами, работа с бюджетами, техподдержкой, медиаблоками, дедлайнами и участниками.",
    },
    {
      company: "Glowbyte",
      role: "Подрядчик по фото- и видеопродакшну",
      text: "Подбор и координация фото- и видеокоманд для мероприятий, контроль качества контента и долгосрочное взаимодействие с клиентом.",
    },
  ];

  const process = [
    ["01", "Идея", "Цели, формат, ограничения"],
    ["02", "Команда", "Подбор ролей и распределение задач"],
    ["03", "Продакшн", "Координация процессов и сроков"],
    ["04", "Контроль", "Качество, согласования, дедлайны"],
    ["05", "Результат", "Сдача проекта и анализ итогов"],
  ] as const;

  const pdca = [
    ["Plan", "Определяю цель, ограничения, формат, ресурсы, роли и точки контроля."],
    ["Do", "Запускаю рабочий процесс: команда, коммуникация, подрядчики, продакшн и сроки."],
    ["Check", "Смотрю на результат через качество, дедлайны, отклонения, узкие места и обратную связь."],
    ["Act", "Корректирую систему, перераспределяю фокус и усиливаю следующий цикл работы."],
  ] as const;

  const skills: [string, string[]][] = [
    [
      "Управление проектами",
      ["планирование", "контроль сроков", "согласования", "координация команд"],
    ],
    [
      "Медиапродакшн",
      ["фото и видео", "постановка ТЗ", "контроль качества", "финальная сдача"],
    ],
    [
      "Операционка",
      ["подрядчики", "сметы и КП", "логистика", "документы и маршруты"],
    ],
    [
      "Инструменты",
      ["BPMN", "Jira", "Google Sheets", "Yougile", "Notion", "SQL basics", "CRM-подход"],
    ],
  ];

  const contacts = [
    ["Telegram", "@Rovers1236", "https://t.me/Rovers1236"],
    ["Телефон", "+7 900 027-27-74", "tel:+79000272774"],
    ["Email", "anton6370@gmail.com", "mailto:anton6370@gmail.com"],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#D62828] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .soft-radial {
          background:
            radial-gradient(circle at 76% 18%, rgba(214,40,40,0.10), transparent 24%),
            radial-gradient(circle at 14% 88%, rgba(255,255,255,0.03), transparent 22%);
        }

        .hero-photo {
          filter: grayscale(100%) contrast(1.04) brightness(0.90);
        }

        .bpmn-line {
          position: absolute;
          background: rgba(255,255,255,0.06);
        }

        .bpmn-line-red {
          position: absolute;
          background: rgba(214,40,40,0.35);
        }

        .bpmn-node {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(2px);
        }

        .bpmn-node-red {
          position: absolute;
          border: 1px solid rgba(214,40,40,0.35);
          background: rgba(214,40,40,0.05);
          backdrop-filter: blur(2px);
        }

        .bpmn-pool {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.01);
        }

        .bpmn-lane {
          position: absolute;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .bpmn-event {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.02);
        }

        .bpmn-gateway {
          position: absolute;
          width: 18px;
          height: 18px;
          transform: rotate(45deg);
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.02);
        }

        .bpmn-label {
          position: absolute;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          user-select: none;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-8 xl:px-16">
          <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-white/92">
            AG / ANTON GIZZATOV
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#A7A7A7] transition hover:text-[#F3F3F3]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden soft-radial">
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <div className="bpmn-pool left-[4%] top-[10%] h-[72%] w-[88%]" />

            <div className="absolute left-[4%] top-[10%] h-[72%] w-[36px] border-r border-white/6 bg-white/[0.012]" />

            <div className="bpmn-lane left-[4%] top-[28%] w-[88%]" />
            <div className="bpmn-lane left-[4%] top-[46%] w-[88%]" />
            <div className="bpmn-lane left-[4%] top-[64%] w-[88%]" />

            <div className="bpmn-label left-[6.2%] top-[12%]">Pool</div>
            <div className="bpmn-label left-[8%] top-[12%]">INPUT / CONTEXT</div>
            <div className="bpmn-label left-[8%] top-[30%]">TEAM / FLOW</div>
            <div className="bpmn-label left-[8%] top-[48%]">CONTROL / DELIVERY</div>
            <div className="bpmn-label left-[8%] top-[66%]">RESULT / ITERATION</div>

            <div className="bpmn-event left-[12%] top-[23%] h-5 w-5" />

            <div className="bpmn-line left-[14%] top-[24.1%] h-[1px] w-[10%]" />
            <div className="bpmn-line left-[32%] top-[24.1%] h-[1px] w-[8%]" />
            <div className="bpmn-line left-[48%] top-[24.1%] h-[1px] w-[10%]" />
            <div className="bpmn-line-red left-[66%] top-[24.1%] h-[1px] w-[8%]" />

            <div className="bpmn-node left-[24%] top-[20%] h-[34px] w-[110px]" />
            <div className="bpmn-node left-[40%] top-[20%] h-[34px] w-[92px]" />
            <div className="bpmn-node left-[58%] top-[20%] h-[34px] w-[104px]" />
            <div className="bpmn-node-red left-[74%] top-[20%] h-[34px] w-[118px]" />

            <div className="bpmn-gateway left-[29.6%] top-[41%]" />

            <div className="bpmn-line left-[30.2%] top-[33.5%] h-[8.5%] w-[1px]" />
            <div className="bpmn-line left-[30.2%] top-[42.3%] h-[1px] w-[11%]" />
            <div className="bpmn-line left-[41.2%] top-[42.3%] h-[1px] w-[9%]" />
            <div className="bpmn-line-red left-[50.2%] top-[42.3%] h-[1px] w-[10%]" />

            <div className="bpmn-node left-[41.5%] top-[38%] h-[34px] w-[98px]" />
            <div className="bpmn-node left-[55.5%] top-[38%] h-[34px] w-[110px]" />
            <div className="bpmn-node-red left-[70.5%] top-[38%] h-[34px] w-[124px]" />

            <div className="bpmn-line left-[76.5%] top-[54%] h-[10%] w-[1px]" />
            <div className="bpmn-gateway left-[75.9%] top-[63.2%]" />

            <div className="bpmn-line left-[60%] top-[66.6%] h-[1px] w-[16%]" />
            <div className="bpmn-line left-[44%] top-[66.6%] h-[1px] w-[10%]" />
            <div className="bpmn-line-red left-[27%] top-[66.6%] h-[1px] w-[11%]" />

            <div className="bpmn-node left-[20%] top-[62%] h-[34px] w-[98px]" />
            <div className="bpmn-node-red left-[38%] top-[62%] h-[34px] w-[108px]" />
            <div className="bpmn-node left-[54%] top-[62%] h-[34px] w-[118px]" />

            <div className="bpmn-event left-[77.5%] top-[65.2%] h-5 w-5" />

            <div className="absolute right-[6%] top-[14%] h-[62%] w-[28%] border border-white/6" />
            <div className="absolute right-[9%] top-[18%] h-[54%] w-[22%] border border-white/5" />

            <div className="bpmn-label right-[20%] top-[16%]">PROCESS MAP</div>
            <div className="bpmn-label right-[12%] top-[72%]">SYSTEM / CONTROL</div>
          </div>

          <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 xl:px-16 xl:pb-24 xl:pt-20">
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1.15fr)_420px] xl:gap-14">
              <div className="order-2 xl:order-1">
                <div className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                  <span className="h-2 w-2 bg-[#D62828]" />
                  <span>Продюсер / Project Manager / Операционная координация</span>
                </div>

                <h1 className="max-w-[860px] text-[40px] font-semibold leading-[0.9] tracking-[-0.06em] text-[#F3F3F3] sm:text-[62px] lg:text-[82px] xl:text-[96px]">
                  <span className="block">Собираю хаос</span>
                  <span className="mt-1 block">в работающую систему.</span>
                </h1>

                <p className="mt-6 max-w-[760px] text-[20px] leading-[1.35] tracking-[-0.03em] text-[#D9D9D9] sm:text-[24px] lg:text-[30px]">
                  Продюсер и Project Manager для медиапродакшна, событий, команд и процессов.
                </p>

                <p className="mt-8 max-w-[760px] text-[16px] leading-[1.9] text-[#A7A7A7] md:text-[19px]">
                  Работаю на стыке продюсирования, операционки и управления проектами:
                  собираю людей, роли, сроки, подрядчиков, контент и коммуникацию в
                  понятную рабочую систему с контролируемым результатом.
                </p>

                <div className="mt-8 flex max-w-[760px] flex-wrap gap-3">
                  {heroTags.map((item) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-[#111111]/85 px-3 py-2 text-[12px] uppercase tracking-[0.14em] text-[#B6B6B6]"
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
                    href="#cases"
                    className="inline-flex items-center gap-3 rounded-sm border border-white/10 bg-[#111111] px-6 py-3 text-sm font-medium text-[#F3F3F3] transition hover:border-white/20 hover:bg-[#161616]"
                  >
                    Смотреть кейсы <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <div className="order-1 xl:order-2 xl:justify-self-end">
                <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-sm border border-white/10 bg-[#111111] xl:ml-auto">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/AGE-4.jpg"
                      alt="Антон Гиззатов"
                      className="hero-photo h-full w-full object-cover object-[68%_center]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.38)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                        Портрет
                      </div>
                      <div className="mt-2 text-lg font-medium text-white">
                        Антон Гиззатов
                      </div>
                      <div className="mt-1 text-sm leading-6 text-[#B9B9B9]">
                        Продюсер / Project Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map(([value, label]) => (
                <div key={label} className="border border-white/10 bg-[#111111] p-6">
                  <div className="mb-4 h-[2px] w-10 bg-[#D62828]" />
                  <div className="text-[30px] font-semibold tracking-[-0.05em] text-[#F3F3F3] md:text-[38px]">
                    {value}
                  </div>
                  <div className="mt-2 text-[15px] leading-7 text-[#8C8C8C]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                <span className="h-2 w-2 bg-[#D62828]" />
                <span>Кто я</span>
              </div>
              <h2 className="max-w-[620px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[52px]">
                Не просто веду проекты — собираю их в систему
              </h2>
            </div>

            <div className="space-y-6">
              <p className="max-w-[760px] text-[18px] leading-[1.9] text-[#C9C9C9] md:text-[20px]">
                Мне ближе роль человека, который берёт на себя не отдельную задачу, а
                весь рабочий контур проекта. Я умею соединять креативную среду, сроки,
                коммуникацию, подрядчиков, внутреннюю команду и требования к результату
                в одну управляемую конструкцию.
              </p>
              <p className="max-w-[760px] text-[16px] leading-[1.95] text-[#8F8F8F] md:text-[18px]">
                Поэтому я органично работаю там, где проекту нужен не только менеджмент,
                но и чувство ритма, логики, нагрузки и реального продакшна.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Что я беру на себя
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Не отдельные куски задачи, а рабочую систему проекта: структуру,
                людей, коммуникацию, точки контроля и финальный результат.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {ownership.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-[#111111] p-6 transition hover:border-white/20"
                >
                  <div className="mb-5 h-[2px] w-10 bg-[#D62828]" />
                  <div className="text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-[#F3F3F3]">
                    {item.title}
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-[#AFAFAF]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Как я вижу управление проектом
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Для меня проект — это не набор задач в вакууме. Это система, в которой
              важны логика движения, прозрачность статусов, контроль точек провала и
              постоянное улучшение рабочего контура.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {approachCards.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-[#111111] p-7 md:p-8"
              >
                <div className="mb-5 h-[2px] w-10 bg-[#D62828]" />
                <div className="text-[26px] font-semibold tracking-[-0.03em] text-[#F3F3F3]">
                  {item.title}
                </div>
                <p className="mt-5 max-w-[700px] text-[16px] leading-[1.95] text-[#B4B4B4]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Мой PDCA-подход
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Так я смотрю и на медиапроекты, и на процессы, и на развитие команд:
                не как на хаос, а как на систему, которую можно собирать, контролировать
                и усиливать.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pdca.map(([title, text], idx) => (
                <article
                  key={title}
                  className={[
                    "border bg-[#111111] p-6 transition",
                    idx === 1 ? "border-[#D62828]/70" : "border-white/10 hover:border-white/20",
                  ].join(" ")}
                >
                  <div className={idx === 1 ? "h-[2px] w-10 bg-[#D62828]" : "h-[2px] w-10 bg-white/12"} />
                  <div className={idx === 1 ? "mt-5 text-[#D62828]" : "mt-5 text-white/35"}>
                    0{idx + 1}
                  </div>
                  <div
                    className={
                      idx === 1
                        ? "mt-3 text-[26px] font-semibold text-[#D62828]"
                        : "mt-3 text-[26px] font-semibold text-[#F3F3F3]"
                    }
                  >
                    {title}
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-[#A7A7A7]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Ключевые кейсы
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Проекты и рабочие ситуации, которые лучше всего показывают мой уровень
              координации, лидерства, управления командой и контроля результата.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCases.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {item.id}
                  </div>
                  <div className="text-right text-[11px] uppercase tracking-[0.18em] text-[#D62828]">
                    {item.label}
                  </div>
                </div>

                <div className="mb-5 h-[2px] w-10 bg-[#D62828] transition-all group-hover:w-16" />

                <div className="text-2xl font-medium tracking-[-0.03em] text-[#F3F3F3]">
                  {item.title}
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[#BDBDBD]">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-2 text-[15px] leading-7 text-[#D8D8D8]">
                  {item.bullets.map((line) => (
                    <li key={line}>— {line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Где я особенно силён
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Лучше всего проявляю себя там, где проекту нужна не только креативная
                энергия, но и структура, логика движения и управляемый рабочий контур.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-[#111111] px-6 py-5 text-[15px] leading-7 text-[#D8D8D8]"
                >
                  — {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Опыт
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Формальный и проектный опыт, который объединяет медиа, процессы,
              операционку и управление взаимодействием внутри команды.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.company + item.role}
                className="border border-white/10 bg-[#111111] p-6"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                  Опыт
                </div>
                <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#F3F3F3]">
                  {item.company}
                </div>
                <div className="mt-2 text-sm text-[#A7A7A7]">{item.role}</div>
                <p className="mt-5 text-[15px] leading-8 text-[#BDBDBD]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Как я работаю
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Для меня проект — это не хаотичный набор задач, а управляемая цепочка
                с понятными этапами, ответственными и критериями качества.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {process.map(([n, title, text], idx) => (
                <div
                  key={n}
                  className={[
                    "group border bg-[#111111] p-6 transition",
                    idx === 2
                      ? "border-[#D62828]/70"
                      : "border-white/10 hover:border-white/20",
                  ].join(" ")}
                >
                  <div
                    className={
                      idx === 2
                        ? "h-[2px] w-10 bg-[#D62828]"
                        : "h-[2px] w-10 bg-white/12 group-hover:bg-white/20"
                    }
                  />
                  <div className={idx === 2 ? "mt-5 text-[#D62828]" : "mt-5 text-white/35"}>
                    {n}
                  </div>
                  <div
                    className={
                      idx === 2
                        ? "mt-3 text-[24px] font-semibold text-[#D62828]"
                        : "mt-3 text-[24px] font-semibold text-[#F3F3F3]"
                    }
                  >
                    {title}
                  </div>
                  <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#A7A7A7]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Навыки и инструменты
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Набор навыков, который помогает мне работать на пересечении
              продюсирования, project management и операционной координации.
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
        </section>

        <section id="contacts" className="border-t border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-stretch xl:gap-14">
              <div>
                <div className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                  <span className="h-2 w-2 bg-[#D62828]" />
                  <span>Контакты</span>
                </div>

                <h2 className="max-w-[760px] text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[56px]">
                  <span className="block">Если вам нужен человек,</span>
                  <span className="block">который умеет собирать хаос в систему</span>
                </h2>

                <p className="mt-7 max-w-[760px] text-[18px] leading-[1.75] text-[#A7A7A7] md:text-[20px]">
                  В медиапродакшне, событиях, командах или операционных процессах —
                  буду рад обсудить задачи, формат сотрудничества и то, как выстроить
                  рабочий контур под результат.
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
                  <div className="mb-6 text-xs uppercase tracking-[0.18em] text-white/45">
                    Контакты
                  </div>
                  <div className="flex-1 space-y-6">
                    {contacts.map(([label, value, href], index) => (
                      <div
                        key={label}
                        className={
                          index < contacts.length - 1 ? "border-b border-white/10 pb-6" : ""
                        }
                      >
                        <div className="text-sm text-[#7E7E7E]">{label}</div>
                        <a
                          href={href}
                          className="mt-2 inline-block text-[18px] text-[#F3F3F3] transition hover:text-[#D62828]"
                        >
                          {value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}