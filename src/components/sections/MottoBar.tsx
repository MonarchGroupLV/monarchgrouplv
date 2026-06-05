const items = ["Privacy", "Prestige", "Performance", "Rare Isn't Luck — It's Access"];

export default function MottoBar() {
  return (
    <div className="bg-gold py-4 px-6">
      <div className="max-w-content mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-6">
            <span className="font-cinzel text-obsidian text-[10px] uppercase tracking-[0.28em]">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="text-obsidian opacity-40 text-[8px]">◆</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
