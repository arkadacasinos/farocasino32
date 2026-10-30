export default function HomePage() {
  const REF_URL = 'https://combospark.top/aetf3u2q9u'

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0e12] text-[#e8eaed] overflow-x-hidden">
      {/* ========================================================
          MOBILE TOPBAR (Pure HTML, responsive, with burger link)
          ======================================================== */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#121319] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#fr9x-mobile-drawer"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gold-400 hover:text-white"
            aria-label="Открыть меню Faro Casino"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
          <a href={REF_URL} className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wider text-gold-400 flex items-center gap-1.5">
              <span className="inline-block text-gold-500 font-serif font-black text-2xl">M</span>
              <span>FARO</span>
            </span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href={REF_URL} className="fr9x-btn-dark !py-1.5 !px-3 text-xs">
            Вход
          </a>
          <a href={REF_URL} className="fr9x-btn-gold !py-1.5 !px-3.5 text-xs">
            Регистрация
          </a>
        </div>
      </header>

      {/* MOBILE DRAWER (Pure CSS :target) */}
      <div
        id="fr9x-mobile-drawer"
        className="hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-[#111218] border-r border-white/10 p-5 flex-col gap-4 shadow-2xl overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="text-lg font-black tracking-wider text-gold-400 flex items-center gap-1.5">
            <span className="text-gold-500 font-serif font-black text-xl">M</span>
            <span>FARO CASINO</span>
          </span>
          <a href="#!" className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5" aria-label="Закрыть меню">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>
        </div>

        <nav className="flex flex-col gap-1">
          <a href={REF_URL} className="fr9x-sidebar-link is-active">
            <span className="text-gold-400">⚡</span>
            <span>Бонусы</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>💰</span>
            <span>Магазин</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>🎯</span>
            <span>Миссии</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>🏆</span>
            <span>Гонка рефералов</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>🎁</span>
            <span>Сундуки</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>⚙️</span>
            <span>Умножение баланса</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>🎃</span>
            <span>Шабаш Хэллоуина</span>
          </a>
          <a href={REF_URL} className="fr9x-sidebar-link">
            <span>👥</span>
            <span>Реферальная программа</span>
          </a>
        </nav>

        <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
          <a href={REF_URL} className="fr9x-btn-gold text-center text-sm py-2.5">
            Регистрация в 1 клик
          </a>
          <a href={REF_URL} className="fr9x-btn-dark text-center text-sm py-2">
            Вход в Faro Casino
          </a>
        </div>
      </div>
      <a id="fr9x-scrim" href="#!" className="hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-xs" aria-hidden="true" />

      {/* ========================================================
          DESKTOP + TABLET MAIN VIEWPORT (SCREEN 2 REPLICA)
          ======================================================== */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
        <div className="flex gap-4 lg:gap-6 items-start">
          {/* LEFT SIDEBAR (Desktop rail - exact copy of screen 2) */}
          <aside className="hidden lg:flex flex-col w-56 shrink-0 gap-4">
            {/* Top row: Back button + Faro Casino brand logo */}
            <div className="flex items-center gap-3 px-1 py-1">
              <a
                href={REF_URL}
                className="w-9 h-9 rounded-xl bg-[#1c1d24] border border-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-gold-400/40 transition-all"
                aria-label="Назад"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <a href={REF_URL} className="flex items-center gap-2">
                <span className="font-serif font-black text-2xl text-gold-500 tracking-tight">M</span>
                <span className="font-extrabold text-xl tracking-widest text-white">FARO</span>
              </a>
            </div>

            {/* Roulette widget card */}
            <a
              href={REF_URL}
              className="relative p-3 rounded-2xl bg-[#15171e] border border-white/5 flex items-center justify-between overflow-hidden group hover:border-gold-400/40 transition-all shadow-lg"
            >
              <div className="flex flex-col z-10">
                <span className="text-xs font-bold text-white group-hover:text-gold-400 transition-colors">
                  Рулетка удачи
                </span>
                <span className="text-[11px] font-semibold text-gold-400 flex items-center gap-1 mt-1">
                  <svg className="w-3 h-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  02:13:20
                </span>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-gold-400/40 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/roulette-wheel.png"
                  alt="Faro Casino рулетка удачи"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 text-sm font-medium">
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">🎁</span>
                <span>Бонусы</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">💰</span>
                <span>Магазин</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">🎯</span>
                <span>Миссии</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">🏆</span>
                <span>Гонка рефералов</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">📦</span>
                <span>Сундуки</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">⚙️</span>
                <span>Умножение баланса</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">🎃</span>
                <span>Шабаш Хэллоуина</span>
              </a>
              <a href={REF_URL} className="fr9x-sidebar-link">
                <span className="text-gold-400 text-base">👥</span>
                <span className="truncate">Реферальная прог...</span>
              </a>
            </nav>

            {/* Language Selector */}
            <div className="mt-auto pt-4">
              <a
                href={REF_URL}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#15171e] border border-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">🇷🇺</span>
                  <span className="font-medium">Русский</span>
                </div>
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6 min-w-0">
            {/* DESKTOP TOP HEADER (Auth buttons) */}
            <div className="hidden lg:flex items-center justify-end gap-3 pb-1">
              <a href={REF_URL} className="fr9x-btn-dark text-sm !py-2.5 !px-6">
                Вход
              </a>
              <a href={REF_URL} className="fr9x-btn-gold text-sm !py-2.5 !px-7">
                Регистрация
              </a>
            </div>

            {/* HERO PROMOTIONAL BANNER (Exact replica of Screen 2: "Гонка Рефералов 3 000 000 Р") */}
            <section className="fr9x-card-gold-border p-5 sm:p-7 md:p-8 lg:p-10 overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between">
              {/* Decorative model backdrop visual */}
              <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-[55%] pointer-events-none overflow-hidden flex items-center justify-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/faro-hero.png"
                  alt="Faro Casino официальный сайт гонка рефералов"
                  className="w-full h-full object-contain sm:object-cover sm:object-right opacity-30 sm:opacity-95"
                />
              </div>

              {/* Text content */}
              <div className="relative z-10 max-w-xl flex flex-col items-start gap-2 sm:gap-3">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-400/90 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-400/20">
                  Акция Faro Casino
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight">
                  Гонка Рефералов
                  <span className="block text-gold-400 font-extrabold mt-1 sm:mt-2 text-3xl sm:text-4xl lg:text-5xl">
                    3 000 000 ₽
                  </span>
                </h1>
                <p className="text-zinc-300 text-sm sm:text-base max-w-md mt-1 font-normal leading-relaxed">
                  Приглашайте друзей и выиграйте путевку на Мальдивы на двоих в Faro Casino!
                </p>

                <div className="mt-4 sm:mt-6 flex items-center gap-3 flex-wrap">
                  <a href={REF_URL} className="fr9x-btn-gold text-sm sm:text-base !py-3 !px-8">
                    Участвовать
                  </a>
                  <a href={REF_URL} className="fr9x-btn-dark text-sm sm:text-base !py-3 !px-6">
                    Faro Casino играть
                  </a>
                </div>
              </div>

              {/* Slider dots (as seen in screenshot) */}
              <div className="relative z-10 flex items-center justify-center gap-1.5 pt-4 sm:pt-6">
                <a
                  href={REF_URL}
                  className="w-6 h-2 rounded-full bg-gold-400 transition-all hover:opacity-80"
                  aria-label="Слайд 1"
                />
                <a
                  href={REF_URL}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all hover:bg-gold-400"
                  aria-label="Слайд 2"
                />
                <a
                  href={REF_URL}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all hover:bg-gold-400"
                  aria-label="Слайд 3"
                />
                <a
                  href={REF_URL}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all hover:bg-gold-400"
                  aria-label="Слайд 4"
                />
              </div>
            </section>

            {/* THREE CARDS ROW (Exact replica of Screen 2: Депозитный стрик | Faro Casino App | Миссии) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {/* CARD 1: Депозитный стрик */}
              <div className="fr9x-card-dark p-5 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-white text-base lg:text-lg">Депозитный стрик</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Чем длиннее серия депозитов, тем ценнее призы
                    </p>
                  </div>
                  <div className="w-24 h-20 shrink-0 relative rounded-xl overflow-hidden bg-black/40 border border-gold-400/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/deposit-chest.png"
                      alt="Депозитный стрик Faro Casino"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 flex flex-col gap-3">
                  <a href={REF_URL} className="fr9x-btn-gold !py-2 text-xs font-bold text-center w-fit px-5">
                    Начать стрик
                  </a>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold overflow-x-auto pb-1">
                    <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-400/40 text-[10px]">
                      🎁
                    </span>
                    <span className="w-5 h-5 rounded-md bg-[#1f212a] flex items-center justify-center text-[11px] text-zinc-300">
                      4
                    </span>
                    <span className="w-5 h-5 rounded-md bg-[#1f212a] flex items-center justify-center text-[11px] text-zinc-300">
                      5
                    </span>
                    <span className="w-5 h-5 rounded-md bg-[#1f212a] flex items-center justify-center text-[11px] text-zinc-300">
                      6
                    </span>
                    <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-400/40 text-[10px]">
                      🎁
                    </span>
                    <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-400/40 text-[10px]">
                      🎁
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2: Faro Casino App */}
              <div className="fr9x-card-dark p-5 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-white text-base lg:text-lg">Faro Casino App</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-gold-400 font-semibold mt-2">
                      <svg className="w-3.5 h-3.5 fill-gold-400" viewBox="0 0 24 24">
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572a.416.416 0 00-.1523-.5676.416.416 0 00-.5676.1523l-2.0223 3.503C15.5902 8.4116 13.8533 8.125 12 8.125c-1.8533 0-3.5902.2866-5.1353.8269L4.8424 5.4489a.4161.4161 0 00-.5677-.1523.4157.4157 0 00-.1523.5676l1.9961 3.4572C2.6889 11.1867.3432 14.6589 0 18.7917h24c-.3432-4.1328-2.6889-7.605-6.1185-9.4703" />
                      </svg>
                      Доступно для Android &amp; iOS
                    </span>
                  </div>
                  <div className="w-24 h-20 shrink-0 relative rounded-xl overflow-hidden bg-black/40 border border-gold-400/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/mobile-app-model.png"
                      alt="Мобильное приложение Faro Casino"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3">
                  <a href={REF_URL} className="fr9x-btn-gold !py-2 text-xs font-bold text-center w-fit px-6">
                    Скачать
                  </a>
                </div>
              </div>

              {/* CARD 3: Миссии */}
              <div className="fr9x-card-dark p-5 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-white text-base lg:text-lg">Миссии</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                    </p>
                  </div>
                  <div className="w-24 h-20 shrink-0 relative rounded-xl overflow-hidden bg-black/40 border border-gold-400/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/target-missions.png"
                      alt="Миссии Faro Casino онлайн"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-300 font-medium">Завершите 3 депозита</span>
                    <span className="text-gold-400 font-bold flex items-center gap-1 bg-gold-400/10 px-2 py-0.5 rounded-full border border-gold-400/20">
                      💎 +12 Faro Coins
                    </span>
                  </div>
                  <a href={REF_URL} className="fr9x-btn-dark !py-2 text-xs font-semibold text-center w-full">
                    Начать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat / Support Button (as seen in Screen 2) */}
      <a
        href={REF_URL}
        className="fixed bottom-5 right-5 z-40 w-13 h-13 rounded-full bg-gradient-to-tr from-[#d48b14] to-[#ffd064] flex items-center justify-center text-black shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Поддержка Faro Casino"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          <circle cx="8" cy="10" r="1.5" />
          <circle cx="12" cy="10" r="1.5" />
          <circle cx="16" cy="10" r="1.5" />
        </svg>
      </a>

      {/* ========================================================
          SEO CONTENT SECTION (300-400 words with all keywords)
          Semantic HTML, reorderable flex column, pure HTML tags
          ======================================================== */}
      <article className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex flex-col gap-8">
        {/* Section 1 */}
        <section id="faro-casino-official" className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gold-400 tracking-tight">
            Faro Casino официальный сайт и лицензионные слоты
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Добро пожаловать в Faro Casino официальный сайт, где собраны лучшие лицензионные игровые автоматы от мировых
            провайдеров Pragmatic Play, NetEnt, Nolimit City и Evolution Gaming. Каждый новый игрок, выбравший faro casino
            играть на реальные деньги, получает эксклюзивный приветственный пакет бонусов до 300% на первые депозиты и
            бесплатные вращения. Faro Casino гарантирует мгновенные выплаты выигрышей на банковские карты Мир, Visa,
            Mastercard и криптовалютные кошельки без скрытых комиссий и долгих проверок.
          </p>
        </section>

        {/* Section 2 */}
        <section id="faro-casino-zerkalo" className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gold-400 tracking-tight">
            Фаро казино зеркало рабочее на сегодня
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Если основной ресурс временно недоступен из-за блокировок провайдеров, используйте актуальное фаро казино
            зеркало рабочее, обеспечивающее безопасный вход в личный кабинет 24/7. Наше официальное faro casino зеркало
            полностью дублирует баланс, историю ставок, активные бонусы и функционал кассы. Вы можете запустить faro casino
            официальный ресурс или перейти через зеркало с любого смартфона и ПК без необходимости настраивать VPN или
            прокси.
          </p>
        </section>

        {/* Section 3 */}
        <section id="faro-kazino-online" className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gold-400 tracking-tight">
            Фаро казино онлайн: честные выплаты и регистрация
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Современное фаро казино онлайн предлагает быстрый доступ к более чем 5000 сертифицированных азартных развлечений.
            Посетив фаро казино официальный сайт, вы сможете пройти моментальную регистрацию по номеру телефона или электронной
            почте всего за 10 секунд. Регулярные турниры, щедрый кэшбэк до 20% каждую неделю и программа лояльности делают
            faro казино выбором номер один для любителей честного гемблинга в России и странах СНГ.
          </p>
        </section>

        {/* Section 4 */}
        <section id="faro-kazino-play" className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gold-400 tracking-tight">
            Фаро казино играть на деньги и бесплатно в демо
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Для новичков доступен бесплатный режим без регистрации, позволяющий протестировать волатильность аппаратов.
            Когда вы будете готовы сорвать крупный джекпот, выбирайте режим фаро казино играть на реальные рубли, активируйте
            промокоды и участвуйте в турнирной Гонке Рефералов с призовым фондом 3 000 000 рублей. Надежное фаро казино
            зеркало гарантирует стабильное соединение во время каждого игрового раунда.
          </p>
        </section>

        {/* CTA Banner inside text */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171821] via-[#21232d] to-[#171821] border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 my-2">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-white font-extrabold text-lg sm:text-xl">Готовы испытать удачу в Faro Casino?</span>
            <span className="text-zinc-400 text-xs sm:text-sm">
              Получите приветственный бонус на депозит прямо сейчас на официальном сайте Faro!
            </span>
          </div>
          <a href={REF_URL} className="fr9x-btn-gold text-sm sm:text-base shrink-0 !py-3 !px-8">
            Начать играть сейчас
          </a>
        </div>
      </article>

      {/* ========================================================
          FOOTER WITH SEO HASHTAGS (Internal section anchor links)
          ======================================================== */}
      <footer className="mt-auto border-t border-white/10 bg-[#0a0b0e] py-10 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* Top footer row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-2xl text-gold-500">M</span>
              <span className="font-black text-xl text-white tracking-wider">FARO CASINO</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <a href={REF_URL} className="hover:text-gold-400 transition-colors">
                Правила и условия
              </a>
              <span>•</span>
              <a href={REF_URL} className="hover:text-gold-400 transition-colors">
                Ответственная игра
              </a>
              <span>•</span>
              <a href={REF_URL} className="hover:text-gold-400 transition-colors">
                Политика конфиденциальности
              </a>
              <span>•</span>
              <a href={REF_URL} className="hover:text-gold-400 transition-colors">
                Контакты
              </a>
            </div>
          </div>

          {/* SEO Hashtags as anchor links (user memory requirement) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Навигация по разделам:</span>
            <div className="flex flex-wrap gap-2">
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_casino
              </a>
              <a
                href="#faro-casino-zerkalo"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_casino_зеркало
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_casino_играть
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_casino_официальный
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_casino_официальный_сайт
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #faro_казино
              </a>
              <a
                href="#faro-kazino-online"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино
              </a>
              <a
                href="#faro-casino-zerkalo"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_зеркало
              </a>
              <a
                href="#faro-casino-zerkalo"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_зеркало_рабочее
              </a>
              <a
                href="#faro-kazino-play"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_играть
              </a>
              <a
                href="#faro-kazino-online"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_онлайн
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_официальный
              </a>
              <a
                href="#faro-casino-official"
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                #фаро_казино_официальный_сайт
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
            <p>© 2025 Faro Casino. Все права защищены. 18+ Играйте ответственно.</p>
            <p>Официальный адрес: https://farocasino32.vercel.app</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
