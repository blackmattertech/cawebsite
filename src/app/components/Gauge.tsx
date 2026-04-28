type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

const CX = 100;
const CY = 100;
const R_OUTER = 80;
const R_INNER = R_OUTER - 10;
const TICKS = 40;

/** Semicircle gauge: π → 2π, 40 ticks; active count = round(value/100 * 40). */
export default function Gauge({
  value,
  color = '#ef4d23',
  showLabels = false,
  min = '',
  max = '',
}: GaugeProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const activeCount = Math.round((clamped / 100) * TICKS);

  const ticks = Array.from({ length: TICKS }, (_, i) => {
    const t = i / (TICKS - 1);
    const angle = Math.PI + t * Math.PI;
    const x1 = CX + R_INNER * Math.cos(angle);
    const y1 = CY + R_INNER * Math.sin(angle);
    const x2 = CX + R_OUTER * Math.cos(angle);
    const y2 = CY + R_OUTER * Math.sin(angle);
    const active = i < activeCount;
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={active ? color : '#d4d4d8'}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="flex w-full max-w-[260px] flex-col items-center">
      <svg viewBox="0 0 200 120" className="w-full max-w-[260px]" aria-hidden>
        {ticks}
        <text
          x={CX}
          y={105}
          textAnchor="middle"
          fill="#171717"
          style={{ fontSize: 22, fontWeight: 600 }}
        >
          {Math.round(clamped)}%
        </text>
      </svg>
      {showLabels && (
        <div className="mt-1 flex w-full max-w-[260px] justify-between text-[11px] text-neutral-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
