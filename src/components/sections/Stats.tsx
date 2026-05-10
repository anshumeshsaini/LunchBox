import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Meals Delivered", value: 850000, suffix: "+" },
  { label: "Happy Subscribers", value: 12000, suffix: "+" },
  { label: "Chef Partners", value: 45, suffix: "" },
  { label: "Cities Served", value: 28, suffix: "" },
];

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return val;
}

function StatCard({ stat, active, delay }: { stat: typeof stats[number]; active: boolean; delay: number }) {
  const value = useCounter(stat.value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors"
    >
      <div className="text-4xl sm:text-5xl font-bold text-gradient">
        {value.toLocaleString()}{stat.suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} active={active} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
