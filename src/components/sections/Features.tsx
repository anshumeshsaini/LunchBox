import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "We don't do a thousand options.",
    body: "Eight new dishes a week. Each one signed off by a chef who'd serve it to their mom. If a dish doesn't earn a 4.5+ rating, it doesn't come back.",
  },
  {
    n: "02",
    title: "Cooked the morning of delivery.",
    body: "Kitchens light up at 5am. By 11, your meal is in an insulated bag on its way over. Nothing's frozen. Nothing sat in a warehouse for a week.",
  },
  {
    n: "03",
    title: "You can skip any week, no guilt.",
    body: "Going out of town? One tap. Want to pause for a month? Done. We won't email you a guilt trip — we'd rather you come back when you're hungry.",
  },
  {
    n: "04",
    title: "Packaging that won't make you cringe.",
    body: "Plant-based fibre boxes you can toss in the compost. We pay extra for it. It's worth it. The food deserves it.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          — A few things we care about
        </div>
        <h2 className="mt-6 font-display text-5xl sm:text-7xl leading-[0.95]">
          Most lunch is fine.<br />
          <em className="italic text-primary">Fine isn't enough.</em>
        </h2>
      </motion.div>

      <div className="mt-20 grid md:grid-cols-2 gap-x-12 gap-y-16">
        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="border-t border-border pt-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-primary">{item.n}</span>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight flex-1">{item.title}</h3>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed pl-10">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
