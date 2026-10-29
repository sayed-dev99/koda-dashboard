// import React from 'react'

// function App() {
//   return (
//     <login/>
//   )
// }

// export default App



import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const cards = [
    { title: "Total Products", value: "120", label: "Products available" },
    { title: "Total Orders", value: "85", label: "Orders received" },
    { title: "Customers", value: "240", label: "Registered customers" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-600">NexCart</span> Dashboard
          </h1>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            Test Page
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <section>
          <p className="mb-2 text-sm font-semibold text-cyan-600">
            GROUP 6 — FRONTEND TEAM
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Welcome to your dashboard
          </h2>

          <p className="mt-3 text-slate-500">
            Sample data for testing React and Tailwind CSS.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-cyan-500 bg-white p-6 shadow-sm"
            >
              <h3 className="font-medium text-slate-500">
                {card.title}
              </h3>

              <p className="my-3 text-4xl font-bold">{card.value}</p>

              <p className="text-sm text-slate-500">{card.label}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">Test React Interaction</h2>

          <p className="mt-2 text-slate-500">
            Click the button to check that React state updates correctly.
          </p>

          <p
            aria-live="polite"
            className="my-6 text-5xl font-bold text-cyan-600"
          >
            {count}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCount((previous) => previous + 1)}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Increase Counter
            </button>

            <button
              type="button"
              onClick={() => setCount(0)}
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Reset
            </button>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500">
          NexCart Dashboard · React + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}