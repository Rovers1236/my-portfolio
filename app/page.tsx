export default function Home() {
  const metrics = [
    { value: "12+", label: "проектов в работе и на запуске" },
    { value: "30", label: "человек в командах и подрядчиках" },
    { value: "2M ₽", label: "бюджет закупок и организации" },
    { value: "12 000+", label: "участников в крупных проектах" },
  ];

  const highlights = [
    "Проектное управление",
    "Продюсирование",
    "Операционка",
    "BPMN / PDCA",
    "CRM-логика",
    "Контроль качества",
  ];

  const roles = [
    "Project Manager",
    "Producer",
    "Operations Manager",
    "Production Lead",
  ];

  const contexts = [
    "Корпоративные мероприятия",
    "Университетские и образовательные проекты",
    "Медиа-команды и подрядчики",
    "Процессы, регламенты и контроль исполнения",
  ];

  const caseCards = [
    {
      id: "glowbyte",
      title: "GlowByte",
      desc: "Коммерческий продакшн под ТЗ клиента",
      metrics: ["6 фотографов", "2 видеографа", "3000+ фото"],
      image: "/cases/glowbyte-cover.jpg",
    },
    {
      id: "graduation",
      title: "Медиавыпускной",
      desc: "Продюсирование, сценарий и управление визуальной системой",
      metrics: ["сценарий", "тайминги", "дизайн / моушен"],
      image: "/cases/graduation-cover.jpg",
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
      metrics: ["5+ ролей", "документы", "SLA"],
      image: "/cases/bpmn-cover.png",
    },
  ];

  const process = [
    {
      step: "Plan",
      title: "Собираю вводные и убираю туман",
      text: "Перевожу абстрактную задачу в понятную систему: роли, этапы, дедлайны, риски, контрольные точки и результат на выходе.",
    },
    {
      step: "Do",
      title: "Запускаю работу без хаоса",
      text: "Собираю людей, распределяю зоны ответственности, ставлю понятные задачи и держу процесс в рабочем ритме.",
    },
    {
      step: "Check",
      title: "Смотрю не на ощущение, а на результат",
      text: "Проверяю сроки, качество, загрузку команды, слабые места процесса, узкие горлышки и то, где система начинает ломаться.",
    },
    {
      step: "Act",
      title: "Докручиваю систему до следующей версии",
      text: "Фиксирую выводы, меняю правила работы, корректирую логику взаимодействия и делаю следующий цикл сильнее предыдущего.",
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
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/20">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 mb-6 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 backdrop-blur sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Portfolio / Project & Production</div>
              <div className="mt-1 text-base font-semibold sm:text-lg">Антон Гиззатов</div>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-zinc-300">
              <a href="#cases" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/20 hover:bg-white/5">Кейсы</a>
              <a href="#process" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/20 hover:bg-white/5">Процесс</a>
              <a href="#tools" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/20 hover:bg-white/5">Инструменты</a>
              <a href="#contacts" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/20 hover:bg-white/5">Контакты</a>
            </nav>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
                Собираю хаос в работающую систему
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Проектный менеджер и продюсер,
                <span className="block text-zinc-400">который строит процесс, а не только закрывает задачи.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                Управляю продакшном, командами, логистикой и операционкой. Соединяю креатив, процессное мышление и контроль результата — от первой вводной до стабильной рабочей системы.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Подход</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-200">
                    Иду от задачи к системе: роли, процессы, контрольные точки, загрузка команды, качество и итоговый результат.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Что ищу</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-200">
                    Роли на стыке project management, production, operations и развития процессов.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cases"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.01]"
                >
                  Смотреть кейсы
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Связаться
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900">
              <div className="relative aspect-[4/4.7] bg-zinc-800">
                <img src="/AGE-4.jpg" alt="Антон Гиззатов" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Project / Production / Operations</div>
                  <div className="mt-2 text-2xl font-semibold">Антон Гиззатов</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Позиционирование</div>
                <div className="mt-3 text-2xl font-semibold leading-tight">Не просто делаю контент.</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Выстраиваю систему работы: люди, роли, процессы, контроль, качество, дедлайны, коммуникация и результат на выходе.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Какие роли рассматриваю</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {roles.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-zinc-900 p-5">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Контекст проектов</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Где мой опыт особенно силён</h2>
            <div className="mt-5 grid gap-3">
              {contexts.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Почему сайт должен работать на отклики</div>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Кто я</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">Проектный менеджер и продюсер с сильной операционной базой.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Что я сделал</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">Команды, большие события, бюджеты, контент и процессы — всё с цифрами.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Как я думаю</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">Через систему: PDCA, BPMN, контроль точек риска и управляемый результат.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="mt-16">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейсы</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Разные типы задач, которые я умею собирать в систему</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {caseCards.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900"
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-300 group-hover:scale-105 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                <div className="relative flex h-[340px] flex-col justify-end p-6">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-100">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="glowbyte" className="mt-16 rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 01</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">GlowByte — медиа-сопровождение корпоратива</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["6 фотографов", "2 видеографа", "2 видео", "20 reels", "3000+ фото"].map((item) => (
                  <span key={item} className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-300">
                Организовал фото- и видеапродакшн под корпоративное мероприятие с контентом для отчётности, внутренних коммуникаций и дальнейших публикаций.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/cases/glowbyte/photo-1.jpg" alt="GlowByte 1" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/glowbyte/photo-2.jpg" alt="GlowByte 2" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/glowbyte/photo-3.jpg" alt="GlowByte 3" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/glowbyte/photo-4.jpg" alt="GlowByte 4" className="h-full w-full rounded-[24px] object-cover" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Техническое задание</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Работа велась по формализованному ТЗ: отчётный фильм 5–10 минут, ролики для соцсетей, охват ключевых моментов и фиксация выступлений и активностей.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Как выстроил процесс</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Собрал команду, распределил зоны съёмки, зафиксировал требования к контенту, выстроил pipeline: съёмка → отбор → обработка → сдача.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Результат</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                3000+ уникальных фотографий без дублей, 2 итоговых видео, около 20 reels, структурированная выдача материалов в срок.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
              <img src="/cases/glowbyte/contract-1.png" alt="Фрагмент ТЗ GlowByte" className="w-full object-cover" />
            </div>
            <div className="grid gap-4">
              <img src="/cases/glowbyte/chat-1.png" alt="Управление командой GlowByte" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/glowbyte/chat-2.png" alt="Распределение зон GlowByte" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <a
                href="https://disk.yandex.ru/i/1dx0pO4zGBXWNQ"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[180px] w-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-white/20 hover:bg-black/40"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Video</div>
                  <div className="mt-2 text-lg font-semibold"><iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dvb1limg4&public_id=video_t7tuw6"
                className="w-full h-[260px] rounded-[24px] border border-white/10"
                allow="autoplay; fullscreen; encrypted-media"
              />
            </div>
          </div>
        </section>

        <section id="graduation" className="mt-16 rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 02</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">Медиавыпускной — продюсирование мероприятия</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["сценарий", "тайминги", "дизайн", "моушен", "смета", "команда"].map((item) => (
                  <span key={item} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-300">
                Организовал мероприятие с награждением, сценарием, таймингом, визуальной системой и несколькими направлениями работы, идущими параллельно.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/cases/graduation/photo-1.jpg" alt="Медиавыпускной 1" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/graduation/photo-2.jpg" alt="Медиавыпускной 2" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/graduation/photo-3.jpg" alt="Медиавыпускной 3" className="h-full w-full rounded-[24px] object-cover" />
              <img src="/cases/graduation/photo-4.jpg" alt="Медиавыпускной 4" className="h-full w-full rounded-[24px] object-cover" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Что собирал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Сценарий, логику блоков, взаимодействие направлений, тайминги, подготовку награждения и визуальные носители мероприятия.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Визуальная система</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Команда под моим управлением делала дизайн и моушен для сцены, анонсов, носителей и digital-материалов, встроенных в общий сценарий события.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Результат</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Собранная и синхронизированная система подготовки: сценарий, задачи, тайминги, смета, визуал и команда, работающая в одном ритме.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-4">
            <img src="/cases/graduation/design-poster.jpg" alt="Афиша" className="w-full rounded-[24px] border border-white/10 object-cover" />
            <img src="/cases/graduation/design-badge.png" alt="Бейдж" className="w-full rounded-[24px] border border-white/10 object-cover" />
            <img src="/cases/graduation/design-popsocket.png" alt="Попсокет" className="w-full rounded-[24px] border border-white/10 object-cover" />
            <img src="/cases/graduation/design-shopper.png" alt="Шоппер" className="w-full rounded-[24px] border border-white/10 object-cover" />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-4">
            <img src="/cases/graduation/design-notebook.png" alt="Блокнот" className="w-full rounded-[24px] border border-white/10 object-cover" />
            <img src="/cases/graduation/design-stickerpack.png" alt="Стикерпак" className="w-full rounded-[24px] border border-white/10 object-cover" />
            <a
              href="https://disk.yandex.ru/i/pcWcTOVF58Tc5g"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[220px] w-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-white/20 hover:bg-black/40"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Motion</div>
                <div className="mt-2 text-lg font-semibold"><iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dvb1limg4&public_id=motion-1_yehdvl"
              className="w-full h-[320px] rounded-[24px] border border-white/10"
              allow="autoplay; fullscreen; encrypted-media"
            />
            <a
              href="https://disk.yandex.ru/i/DdXi9Xxi6w3hyA"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[220px] w-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-white/20 hover:bg-black/40"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Motion</div>
                <div className="mt-2 text-lg font-semibold"><iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dvb1limg4&public_id=motion-2_njjnep"
              className="w-full h-[320px] rounded-[24px] border border-white/10"
              allow="autoplay; fullscreen; encrypted-media"
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/cases/graduation/script.png" alt="Сценарий" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/timings.png" alt="Тайминги" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/budget.png" alt="Смета" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/tasks.png" alt="Задачи" className="w-full rounded-[24px] border border-white/10 object-cover" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/cases/graduation/chat-1.png" alt="Созвоны и блоки" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/chat-2.png" alt="Общая инфа" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/chat-3.png" alt="Изменения и дедлайны" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/graduation/chat-4.png" alt="Вопросы по квесту" className="w-full rounded-[24px] border border-white/10 object-cover" />
            </div>
          </div>
        </section>

        <section id="gf" className="mt-16 rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 03</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">GF — выручка, вал и управленческие гипотезы</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["план / факт", "ежедневный контроль", "вал", "решения"].map((item) => (
                  <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-300">
                Систематизировал ежедневные показатели, сравнивал план и факт, отслеживал динамику по точкам и формировал гипотезы для улучшения операционной модели.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/cases/gf/gf-1.png" alt="Таблица GF 1" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/gf/gf-2.png" alt="Таблица GF 2" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/gf/chat-1.png" alt="Гипотезы 1" className="w-full rounded-[24px] border border-white/10 object-cover" />
              <img src="/cases/gf/chat-2.png" alt="Гипотезы 2" className="w-full rounded-[24px] border border-white/10 object-cover" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Что делал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Собирал и структурировал данные по выручке, визуализировал план / факт и отклонения, отслеживал динамику и выделял проблемные точки.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Как думал</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Не ограничивался цифрами: предлагал гипотезы по обучению, корпоративной культуре, сетям, адаптации новых сотрудников и упрощению регламентов.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Результат</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Появилась прозрачная система контроля, база для управленческих решений и более предметный разговор о росте, просадках и точках оптимизации.
              </p>
            </div>
          </div>
        </section>

        <section id="bpmn" className="mt-16 rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Кейс 04</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">Проектирование и оптимизация процессов (BPMN)</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["5+ ролей", "документооборот", "финансовые потоки", "SLA"].map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-300">
                Декомпозирую процессы, выделяю роли, точки решений, движение документов и контроль сроков, чтобы убрать хаос и повысить управляемость системы.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-semibold">Что сделал</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Разложил процесс на этапы, выделил роли, зафиксировал точки согласования и встроил контроль сроков и документов.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-semibold">Что это дало</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Прозрачный процесс, понятные зоны ответственности, снижение риска потерь задач и ускорение согласований.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
              <img src="/cases/bpmn/bpmn-1.png" alt="BPMN схема" className="w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="process" className="mt-16 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Подход</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">PDCA как рабочая логика, а не красивая аббревиатура</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Мне важен не только факт выполнения задачи, а то, как система работает в целом: где сыпется, где перегружает команду, где даёт лишние итерации и как это перевести в следующую, более устойчивую версию.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="rounded-[30px] border border-white/10 bg-zinc-900 p-6">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300">{item.step}</div>
                <div className="mt-3 text-xl font-semibold">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Инструменты</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">То, чем усиливаю управление и продакшн</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Я хорошо чувствую стык между контентом и операционкой: могу говорить и с креативной командой, и с теми, кому нужны порядок, сроки и прогнозируемый результат.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              {tools.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-16 mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-white text-zinc-950">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8 lg:p-10">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Контакты</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Готов подключаться к проектам, где важны система, темп и результат</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
                Интересны роли на стыке проектного управления, продакшна, операционки и развития процессов. Особенно там, где нужно не просто закрывать задачи, а собирать рабочую структуру из хаоса.
              </p>
            </div>

            <div className="grid gap-3 text-sm sm:min-w-[260px]">
              <a href="mailto:anton6370@gmail.com" className="rounded-2xl border border-zinc-200 px-4 py-3 transition hover:bg-zinc-50">
                anton6370@gmail.com
              </a>
              <a href="https://t.me/Rovers1236" className="rounded-2xl border border-zinc-200 px-4 py-3 transition hover:bg-zinc-50">
                Telegram — @Rovers1236
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
