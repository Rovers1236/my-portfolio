"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <img
          src="/AGE-4.jpg"
          alt="Антон"
          className="w-[220px] h-[220px] object-cover rounded-full mb-6 border border-white/20"
        />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Антон Гиззатов
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-70">
          Продюсер / Project Manager
        </p>

        <div className="mt-6 text-sm opacity-60">
          <p>Telegram: @Rovers1236</p>
          <p>Email: anton6370@gmail.com</p>
        </div>
      </section>

    </div>
  );
}