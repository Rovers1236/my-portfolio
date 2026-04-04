"use client";

export default function Home() {
  const nav = [
    ["Обо мне", "#about"],
    ["Кейсы", "#cases"],
    ["Подход", "#approach"],
    ["Опыт", "#experience"],
    ["Контакты", "#contacts"],
  ];

  const heroMetrics = [
    ["1–1.1 млн ₽", "месячный вал"],
    ["до 30", "человек в команде"],
    ["2 млн ₽", "бюджеты проектов"],
    ["3000+", "единиц контента"],
  ];

  const focusCards = [
    {
      title: "Сборка структуры",
      text: "Цели, роли, этапы, зоны ответственности и понятный рабочий ритм.",
    },
    {
      title: "Координация людей",
      text: "Команда, подрядчики, коммуникация и удержание общего контекста проекта.",
    },
    {
      title: "Контроль результата",
      text: "Сроки, согласования, качество, финальная сдача и рабочая дисциплина.",
    },
    {
      title: "Системный подход",
      text: "CRM-логика, прозрачность статусов, точки контроля и цикл улучшений через PDCA.",
    },
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

  const approach = [
    {
      title: "CRM как логика порядка",
      text: "Для меня CRM — это не просто система учёта, а способ держать проект прозрачным: видеть статусы, узкие места, точки реакции и движение задач без потерь в хаосе.",
    },
    {
      title: "PDCA как рабочий цикл",
      text: "Я смотрю на проект как на цикл: спланировать, запустить, проверить результат, скорректировать систему и перейти к следующему этапу уже сильнее.",
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

  const contacts = [
    ["Telegram", "@Rovers1236", "https://t.me/Rovers1236"],
    ["Телефон", "+7 900 027-27-74", "tel:+79000272774"],
    ["Email", "anton6370@gmail.com", "mailto:anton6370@gmail.com"],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#D62828] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }

        .page-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .hero-radial {
          background:
            radial-gradient(circle at 74% 18%, rgba(214,40,40,0.10), transparent 24%),
            radial-gradient(circle at 14% 88%, rgba(255,255,255,0.03), transparent 22%);
        }

        .hero-photo {
          filter: grayscale(100%) contrast(1.04) brightness(0.90);
        }

        .bpmn-shell::before {
          content: "";
          position: absolute;
          inset: 9% 5% 12% 5%;
          border: 1px solid rgba(255,255,255,0.05);
          pointer-events: none;
        }

        .bpmn-shell::after {
          content: "";
          position: absolute;
          left: 5%;
          top: 9%;
          width: 34px;
          height: 79%;
          border-right: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.012);
          pointer-events: none;
        }

        .bpmn-lane-1,
        .bpmn-lane-2 {
          position: absolute;
          left: 5%;
          width: 90%;
          border-top: 1px solid rgba(255,255,255,0.045);
          pointer-events: none;
        }

        .bpmn-lane-1 { top: 34%; }
        .bpmn-lane-2 { top: 58%; }

        .bpmn-route-a,
        .bpmn-route-b,
        .bpmn-route-c {
          position: absolute;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .bpmn-route-red {
          position: absolute;
          background: rgba(214,40,40,0.35);
          pointer-events: none;
        }

        .bpmn-node,
        .bpmn-node-red {
          position: absolute;
          height: 30px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(2px);
          pointer-events: none;
        }

        .bpmn-node-red {
          border-color: rgba(214,40,40,0.32);
          background: rgba(214,40,40,0.05);
        }

        .bpmn-dot,
        .bpmn-dot-red {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.025);
          pointer-events: none;
        }

        .bpmn-dot-red {
          border-color: rgba(214,40,40,0.32);
          background: rgba(214,40,40,0.08);
        }

        .bpmn-tag {
          position: absolute;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.16);
          pointer-events: none;
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
        <section className="relative overflow-hidden hero-radial">
          <div className="absolute inset-0 page-grid opacity-40" />

          <div className="bpmn-shell absolute inset-0 hidden xl:block">
            <div className="bpmn-lane-1" />
            <div className="bpmn-lane-2" />

            <div className="bpmn-tag left-[8%] top-[12%]">Input / context</div>
            <div className="bpmn-tag left-[8%] top-[37%]">Flow / control</div>
            <div className="bpmn-tag left-[8%] top-[61%]">Delivery / iteration</div>
            <div className="bpmn-tag right-[12%] top-[14%]">Process map</div>

            <div className="bpmn-dot left-[14%] top-[28%]" />
            <div className="bpmn-route-a left-[15%] top-[28.8%] h-[1px] w-[12%]" />
            <div className="bpmn-node left-[27%] top-[26.7%] w-[110px]" />
            <div className="bpmn-route-b left-[35.2%] top-[28.8%] h-[1px] w-[10%]" />
            <div className="bpmn-node left-[45.2%] top-[26.7%] w-[96px]" />
            <div className="bpmn-route-red left-[52.5%] top-[28.8%] h-[1px] w-[10%]" />
            <div className="bpmn-node-red left-[62.5%] top-[26.7%] w-[118px]" />

            <div className="bpmn-route-c left-[31%] top-[42%] h-[11%] w-[1px]" />
            <div className="bpmn-route-c left-[31%] top-[53%] h-[1px] w-[14%]" />
            <div className="bpmn-node left-[45%] top-[51%] w-[108px]" />
            <div className="bpmn-route-red left-[53%] top-[53%] h-[1px] w-[12%]" />
            <div className="bpmn-node-red left-[65%] top-[51%] w-[124px]" />

            <div className="bpmn-route-c left-[71.2%] top-[65%] h-[10%] w-[1px]" />
            <div className="bpmn-route-c left-[56%] top-[74.5%] h-[1px] w-[15.2%]" />
            <div className="bpmn-node left-[40.5%] top-[72.4%] w-[110px]" />
            <div className="bpmn-route-red left-[32%] top-[74.5%] h-[1px] w-[8.5%]" />
            <div className="bpmn-dot-red left-[30.8%] top-[73.8%]" />

            <div className="absolute right-[6%] top-[16%] h-[56%] w-[27%] border border-white/6" />
          </div>

          <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 xl:px-16 xl:pb-24 xl:pt-20">
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1.12fr)_420px] xl:gap-14">
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

        <section id="about" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                <span className="h-2 w-2 bg-[#D62828]" />
                <span>Обо мне</span>
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((item) => (
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
        </section>

        <section id="cases" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
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
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Подход
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
            {approach.map((item) => (
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

        <section id="experience" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
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
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
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
                      className={index < contacts.length - 1 ? "border-b border-white/10 pb-6" : ""}
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
        </section>
      </main>
    </div>
  );
}