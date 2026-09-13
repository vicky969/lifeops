type HabitCardProps = {
  title: string;
  target: string;
  status: string;
};

function HabitCard({ title, target, status }: HabitCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">Target: {target}</p>
      <p className="mt-4 font-medium text-indigo-600">{status}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-bold tracking-widest text-indigo-600">
          LIFEOPS
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Welcome to your personal dashboard
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Track habits, goals, and the progress that matters to you.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <HabitCard
            title="Deep work"
            target="90 minutes"
            status="Not started"
          />
          <HabitCard
            title="Exercise"
            target="30 minutes"
            status="In progress"
          />
          <HabitCard
            title="Reading"
            target="20 pages"
            status="Complete"
          />
        </div>
      </section>
    </main>
  );
}