"use client";

export default function Home() {
  const nav = [
    ["Кейсы", "#cases"],
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
    "Операционка",
    "Медиапроекты",
  ];

  const featuredCases = [
    {
      id: "01",
      title: "Медиавыпускной",
      label: "700+ участников",
      description:
        "Главный организатор финального события с официальной частью, награждением и afterparty в полностью арендованном клубе.",
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
        "Подрядчик по фото- и видеопродакшну для корпоративных мероприятий: подбор команд, координация и итоговая сдача материалов.",
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

  const experience = [
    {
      company: "МГТУ им. Н. Э. Баумана",
      role: "Junior Specialist / Проектный офис",
      text: "BPMN-моделирование, оптимизация процессов, работа с внутренними актами, согласованиями и переводом сырых данных в понятные управленческие материалы.",
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

  const process = [
    ["01", "Идея", "Цели, формат, ограничения"],
    ["02", "Команда", "Подбор ролей и распределение задач"],
    ["03", "Продакшн", "Координация процессов и сроков"],
    ["04", "Контроль", "Качество, согласования, дедлайны"],
    ["05", "Результат", "Сдача проекта и анализ итогов"],
  ];

  const skills = [
    ["Управление проектами", ["планирование", "контроль сроков", "согласования", "координация команд"]],
    ["Медиапродакшн", ["фото и видео", "постановка ТЗ", "контроль качества", "финальная сдача"]],
    ["Операционка", ["подрядчики", "сметы и КП", "логистика", "документы и маршруты"]],
    ["Инструменты", ["BPMN", "Jira", "Google Sheets", "Yougile", "Notion", "SQL basics"]],
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
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-8 xl:px-16">
          <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-white/92">
            AG / ANTON GIZZATOV
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
        <section className="relative overflow-hidden soft-radial">
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 xl:px-16 xl:pb-24 xl:pt-20">
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1.15fr)_420px] xl:gap-14">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                  <span className="h-2 w-2 bg-[#D62828]" />
                  <span>Продюсер / Project Manager</span>
                </div>

                <h1 className="max-w-[860px] text-[40px] font-semibold leading-[0.9] tracking-[-0.06em] text-[#F3F3F3] sm:text-[62px] lg:text-[82px] xl:text-[96px]">
                  <span className="block">Собираю проекты,</span>
                  <span className="mt-1 block">команды и результат.</span>
                </h1>

                <p className="mt-6 max-w-[760px] text-[20px] leading-[1.35] tracking-[-0.03em] text-[#D9D9D9] sm:text-[24px] lg:text-[30px]">
                  Продюсер / Project Manager для медиапродакшна, событий и операционной координации.
                </p>

                <p className="mt-8 max-w-[760px] text-[16px] leading-[1.9] text-[#A7A7A7] md:text-[19px]">
                  Координирую людей, сроки, подрядчиков, логистику и качество контента. Работаю там, где важно не
                  просто закрыть задачи, а удержать проект в рабочем контуре от идеи до финальной сдачи.
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

              <div>
                <div className="overflow-hidden rounded-sm border border-white/10 bg-[#111111]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/AGE-4.jpg"
                      alt="Антон Гиззатов"
                      className="hero-photo h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.38)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Портрет</div>
                      <div className="mt-2 text-lg font-medium text-white">Антон Гиззатов</div>
                      <div className="mt-1 text-sm leading-6 text-[#B9B9B9]">Продюсер / Project Manager</div>
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

        <section id="cases" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Ключевые кейсы
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Проекты и рабочие ситуации, которые лучше всего показывают мой уровень координации, лидерства,
              управления командой и контроля результата.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCases.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{item.id}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#D62828]">{item.label}</div>
                </div>

                <div className="mb-5 h-[2px] w-10 bg-[#D62828] transition-all group-hover:w-16" />

                <div className="text-2xl font-medium tracking-[-0.03em] text-[#F3F3F3]">{item.title}</div>
                <p className="mt-4 text-[15px] leading-7 text-[#BDBDBD]">{item.description}</p>

                <ul className="mt-5 space-y-2 text-[15px] leading-7 text-[#D8D8D8]">
                  {item.bullets.map((line) => (
                    <li key={line}>— {line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Опыт
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Формальный и проектный опыт, который объединяет медиа, процессы, операционку и управление
                взаимодействием внутри команды.
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
          </div>
        </section>

        <section id="process" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                Как я работаю
              </h2>
              <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
            </div>
            <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
              Для меня проект — это не хаотичный набор задач, а управляемая цепочка с понятными этапами,
              ответственными и критериями качества.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {process.map(([n, title, text], idx) => (
              <div
                key={n}
                className={[
                  "group border bg-[#111111] p-6 transition",
                  idx === 2 ? "border-[#D62828]/70" : "border-white/10 hover:border-white/20",
                ].join(" ")}
              >
                <div className={idx === 2 ? "h-[2px] w-10 bg-[#D62828]" : "h-[2px] w-10 bg-white/12 group-hover:bg-white/20"} />
                <div className={idx === 2 ? "mt-5 text-[#D62828]" : "mt-5 text-white/35"}>{n}</div>
                <div className={idx === 2 ? "mt-3 text-[24px] font-semibold text-[#D62828]" : "mt-3 text-[24px] font-semibold text-[#F3F3F3]"}>
                  {title}
                </div>
                <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#A7A7A7]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-[#0E0E0E]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[48px]">
                  Навыки и инструменты
                </h2>
                <div className="mt-5 h-[2px] w-10 bg-[#D62828]" />
              </div>
              <p className="max-w-[760px] text-[15px] leading-8 text-[#8F8F8F]">
                Набор навыков, который помогает мне работать на пересечении продюсирования, project
                management и операционной координации.
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

        <section id="contacts" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 xl:px-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-stretch xl:gap-14">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-[#111111]/85 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8B8B8]">
                <span className="h-2 w-2 bg-[#D62828]" />
                <span>Контакты</span>
              </div>

              <h2 className="max-w-[680px] text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[56px]">
                <span className="block">Открыт к предложениям</span>
                <span className="block">и новым задачам</span>
              </h2>

              <p className="mt-7 max-w-[700px] text-[18px] leading-[1.75] text-[#A7A7A7] md:text-[20px]">
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