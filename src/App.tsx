import { useState } from "react";
import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";

import { HabitList } from "./HabitList";

export type Habit = {
  id: string;
  name: string;
  done: boolean;
};

export type HabitItemProps = {
  habit: Habit;
};

export default function App() {

  const habitsData: Habit[] = [
    // { id: 1, name: "Drink water", done: true },
    // { id: 2, name: "Exercise", done: true },
    // { id: 3, name: "Read a book", done: true },
  ];

  const [habits,setHabits] = useState<Habit[]>([]);
  
  function addHabit(name: string) {
    console.log("Adding habit:", name);
    
    setHabits((prevHabits) => [
      ...prevHabits,
      { id: crypto.randomUUID(), name, done: false },
    ]);    
  }

  function deleteHabit(id: string) {
    setHabits((prevHabits) => prevHabits.filter(h => h.id !== id));
  }
  
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits}  deleteHabit={deleteHabit}/>
    </div>
  );
}

