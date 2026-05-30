import Button from "./Button";


export function Header() {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-zinc-400 text-sm"> 1/1 done today</span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span className="text-zinc-400 text-sm"> Apr 6 = Apr 12</span>
        <div className="flex items-center gap-3">
          <Button misc="bg-blue-500 text-white rounded"> Prev </Button>
          <Button misc="bg-red-500 text-white rounded"> Next </Button>
        </div>
      </div>
    </header>
  );
}
