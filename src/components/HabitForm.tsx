import { useState, type SubmitEvent } from "react";
import Button from "./Button";

export type HabitFormProps = {
  addHabit: (name: string) => void;  
};

export function HabitForm({addHabit}: HabitFormProps) {
  
  const [name, setName] = useState("");
  
  function handleSubmit(e: SubmitEvent) { 
    e.preventDefault();
    if (name.trim() === "" || name.length <= 3) return;
    // Handle form submission logic here
    console.log("New Habit:", name);
    addHabit(name);
  }
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" placeholder="New Habit..." 
        className="flex-1 rounded-lg bg-zinc-800 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 px-4 py-2" 
      />
      <Button 
        disabled={name.trim() === "" || name.length <= 3}
        className="rounded-lg px-4 py-2 font-medium"
      > Add Habit </Button>
    </form>
  );
}
  