interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--line)] p-8 flex flex-col items-center justify-center">
      <div
        className="font-['Fraunces'] text-[56px] text-[var(--red)] mb-2"
        style={{ fontWeight: 300, letterSpacing: '-0.03em' }}
      >
        {number}
      </div>
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] text-center">
        {label}
      </div>
    </div>
  );
}
