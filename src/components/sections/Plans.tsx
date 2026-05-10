import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "The Sampler",
    price: 49,
    line: "5 lunches a week",
    pitch: "If you're not sure yet. We get it. Try us out for a week and bail if it's not for you.",
    bullets: ["Pick from 8 weekly dishes", "Free delivery", "Skip any week"],
  },
  {
    name: "The Regular",
    price: 89,
    line: "10 lunches a week",
    pitch: "What most of our subscribers pick. Lunch handled, every weekday, for you and one other person.",
    bullets: ["Full menu access", "Priority delivery window", "Free coffee from our partners", "10% off add-ons"],
    featured: true,
  },
  {
    name: "The Household",
    price: 159,
    line: "20 lunches a week",
    pitch: "For families, small teams, or people who really, really like lunch. Four dietary profiles included.",
    bullets: ["4 dietary profiles", "Bigger portions option", "Free weekly dessert", "Concierge support"],
  },
];

export function Plans() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">— Plans &amp; pricing</div>
          <h2 className="mt-6 font-display text-5xl sm:text-7xl leading-[0.95]">
            Three plans.<br />
            <em className="italic text-primary">No tiers above this.</em>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          We don't have a "premium plus enterprise" plan. The good stuff is in every box.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden ring-1 ring-border">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative p-8 sm:p-10 flex flex-col ${
              plan.featured ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest">
                ★ most picked
              </div>
            )}
            <h3 className="font-display text-3xl">{plan.name}</h3>
            <div className={`mt-1 font-mono text-xs uppercase tracking-wider ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {plan.line}
            </div>

            <div className="mt-8 flex items-baseline gap-1">
              <span className="font-display text-6xl">${plan.price}</span>
              <span className={plan.featured ? "text-primary-foreground/70 text-sm" : "text-muted-foreground text-sm"}>/wk</span>
            </div>

            <p className={`mt-5 text-sm leading-relaxed ${plan.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              {plan.pitch}
            </p>

            <ul className="mt-8 space-y-2.5 text-sm">
              {plan.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className={`font-mono text-xs mt-0.5 ${plan.featured ? "text-primary-foreground/60" : "text-primary"}`}>+</span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              className={`mt-10 inline-flex items-center justify-between px-5 py-3.5 rounded-full text-sm font-medium transition-colors ${
                plan.featured
                  ? "bg-background text-foreground hover:bg-cream"
                  : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              }`}
              style={plan.featured ? { backgroundColor: "var(--cream)", color: "var(--background)" } : undefined}
            >
              <span>Start {plan.name.split(" ")[1]?.toLowerCase()}</span>
              <span className="font-mono">↗</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
