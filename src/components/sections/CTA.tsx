import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-border pt-16 text-center"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">— So,</div>
        <h2 className="mt-6 font-display text-5xl sm:text-8xl leading-[0.95] max-w-4xl mx-auto">
          What are you<br />
          <em className="italic text-primary">eating tomorrow?</em>
        </h2>
        <p className="mt-8 text-muted-foreground max-w-md mx-auto">
          First week's 30% off. Cancel after one box if it's not for you. No hard feelings.
        </p>
        <div className="mt-10 inline-flex flex-col sm:flex-row gap-2 p-2 rounded-full bg-card ring-1 ring-border">
          <input
            type="email"
            placeholder="you@email.com"
            className="px-5 py-3 rounded-full bg-transparent placeholder:text-muted-foreground/60 focus:outline-none min-w-64 text-sm"
          />
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors">
            Get my code
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
