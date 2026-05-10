import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Wait, what's actually in the box?", a: "One main dish, a side, and usually a small treat or pickled something. All in a single compostable container. Heat for 90 seconds, eat, recycle." },
  { q: "Fresh or frozen?", a: "Fresh. Always. Cooked between 5 and 10am the day it arrives. Nothing on this menu has ever seen a freezer." },
  { q: "Can you handle my weird diet?", a: "Probably. Vegan, gluten-free, halal, low-FODMAP, no-onion-because-you-just-don't-like-it — set your profile once and we filter automatically." },
  { q: "What if I won't be home?", a: "The bag keeps food cold for 6 hours. Or pause from the app in two taps. We don't charge cancellation fees, ever." },
  { q: "Is this actually worth it vs. cooking?", a: "Per meal it's around $9. About what a sad supermarket sandwich costs. We're betting ours tastes better. Most people seem to agree." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">— Frequently, honestly asked</div>
        <h2 className="mt-6 font-display text-5xl sm:text-7xl leading-[0.95]">
          Questions<br /><em className="italic text-primary">we hear a lot.</em>
        </h2>
      </motion.div>

      <div className="mt-14">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-baseline gap-6 py-6 text-left group"
              >
                <span className="font-mono text-xs text-muted-foreground shrink-0">0{i + 1}.</span>
                <span className="flex-1 font-display text-2xl group-hover:text-primary transition-colors">{f.q}</span>
                <span className={`font-mono text-2xl text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-10 pr-10 text-muted-foreground leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
