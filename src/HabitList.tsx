import {eachDayOfInterval,startOfWeek,endOfWeek,isFuture,format,} from "date-fns";
import type { Habit } from "./App";
import Button from "./components/Button";

type HabitListProps = {
  habits: Habit[];
  deleteHabit: (id: string) => void;
};

type HabitItemProps = {
  habit: Habit;
  deleteHabit: (id: string) => void;
};

const visibleDates = eachDayOfInterval({
  start: startOfWeek(new Date(), { weekStartsOn: 1 }),
  end: endOfWeek(new Date(), { weekStartsOn: 1 }),
});

export function HabitList({habits,deleteHabit}: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="py-12 text-center text-zinc-500">
        No habits yet. Add one above!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

function HabitItem({habit,deleteHabit,}: HabitItemProps) {
  const { id, name } = habit;

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-zinc-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-amber-500">
            🔥 3
          </span>
        </div>

        <Button
          variant="danger"
          onClick={() => deleteHabit(id)}
        >
          Delete
        </Button>
      </div>

      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button
            key={format(date, "yyyy-MM-dd")}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm"
            disabled={isFuture(date)}
          >
            <span>{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}