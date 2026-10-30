import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <meta name="yandex-verification" content="0e7cf21d55234a9b" />
        <meta charSet="utf-8" />
        <title>Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт и рабочее зеркало фаро казино онлайн. Быстрый вход, регистрация за 10 секунд, моментальные выплаты и бонус до 3 000 000 рублей на слоты прямо сейчас!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0d0e12" />
        <link rel="canonical" href="https://farocasino32.vercel.app" />
        <link rel="icon" href="/app/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://farocasino32.vercel.app" />
        <meta property="og:title" content="Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее" />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт и актуальное рабочее зеркало фаро казино. Вход, регистрация, слоты, бонусы и мобильное приложение."
        />
        <meta property="og:image" content="https://farocasino32.vercel.app/images/faro-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее" />
        <meta
          name="twitter:description"
          content="Faro Casino официальный сайт и актуальное рабочее зеркало фаро казино онлайн. Вход, слоты, промокоды и мгновенный вывод."
        />
        <meta name="twitter:image" content="https://farocasino32.vercel.app/images/faro-hero.png" />
      </head>
      <body className="antialiased bg-[#0e0f12] text-slate-100 font-sans selection:bg-[#f5a623] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
