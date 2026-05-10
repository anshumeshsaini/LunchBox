import { motion } from "framer-motion";

const quotes = [
  {
    text: "I cancelled three meal kits to keep this one. The salmon bowl ruined other lunches for me.",
    name: "Sarah K.",
    role: "Designer · 18 months in",
    initial: "S",
  },
  {
    text: "Honestly? I expected it to fall off after a month. It's been a year and the menu is still surprising.",
    name: "Marcus T.",
    role: "Engineer · 12 months in",
    initial: "M",
  },
  {
    text: "Cried a little when they brought back the miso eggplant. That's a normal review, right?",
    name: "Priya R.",
    role: "Marketing · 8 months in",
    initial: "P",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {quotes.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={i === 1 ? "md:mt-12" : ""}
          >
            <span className="font-display text-7xl text-primary leading-none">"</span>
            <blockquote className="-mt-6 font-display text-2xl leading-snug">
              {q.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 grid place-items-center font-display text-lg text-primary">
                {q.initial}
              </div>
              <div>
                <div className="text-sm font-medium">{q.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{q.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
