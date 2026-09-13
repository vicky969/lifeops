"use client";

import { useState } from "react";

type HabitStatus = "Not started" | "In progress" | "Complete";

type Habit = {
  id: number;
  title: string;
  target: string;
  status: HabitStatus;
};

const initialHabits: Habit[] = [
  {
    id: 1,
    title: "Deep work",
    target: "90 minutes",
    status: "Not started",
  },
  {
    id: 2,
    title: "Exercise",
    target: "30 minutes",
    status: "In progress",
  },
  {
    id: 3,
    title: "Reading",
    target: "20 pages",
    status: "Complete",
  },
];

type HabitCardProps = {
  habit: Habit;
  onComplete: (id: number) => void;
};

function HabitCard({ habit, onComplete }: HabitCardProps) {
  const isComplete = habit.status === "Complete";

  return (
    <article className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">
        {habit.title}
      </h2>

      <p className="mt-2 text-slate-600">Target: {habit.target}</p>

      <p className="mt-4 font-medium text-indigo-600">{habit.status}</p>

      <button
        onClick={() => onComplete(habit.id)}
        disabled={isComplete}
        className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {isComplete ? "Completed" : "Mark complete"}
      </button>
    </article>
  );
}

export default function Home() {
  const [habits, setHabits] = useState(initialHabits);

  function completeHabit(id: number) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return { ...habit, status: "Complete" as HabitStatus };
      }

      return habit;
    });

    setHabits(updatedHabits);
  }

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
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onComplete={completeHabit}
            />
          ))}
        </div>
      </section>
    </main>
  );
}