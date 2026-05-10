import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-lunchbox.jpg";
import meal1 from "@/assets/meal-1.jpg";
import meal2 from "@/assets/meal-2.jpg";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-20">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]"
        >
          <span>— Est. 2022, Brooklyn</span>
          <span className="hidden sm:inline">Week 19 / Spring menu</span>
          <span>Vol. 04</span>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight"
            >
              Lunch,<br />
              but <em className="italic text-primary">actually</em><br />
              <span className="text-muted-foreground/80">good.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl"
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                We cook the kind of lunch we'd actually want to eat — seasonal, a little weird, never boring.
                Then we drive it to your door before noon.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/meal-plans"
                  className="inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors"
                >
                  <span>See this week's menu</span>
                  <span className="font-mono">↗</span>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono">01.</span> How it works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 left-4 w-48 sm:w-56 origin-bottom-right"
            >
              <div className="rounded-sm overflow-hidden shadow-elegant ring-1 ring-border">
                <img src={meal1} alt="" width={768} height={768} className="w-full aspect-square object-cover" />
              </div>
              <div className="mt-2 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>No. 042</span>
                <span>Mon</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-16 right-0 w-56 sm:w-64 origin-top-left z-10"
            >
              <div className="rounded-sm overflow-hidden shadow-elegant ring-1 ring-border">
                <img src={heroImg} alt="Wild salmon lunchbox" width={1024} height={1024} className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="mt-2 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>No. 043 — Signature</span>
                <span>Tue</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-0 left-0 w-44 sm:w-52"
            >
              <div className="rounded-sm overflow-hidden shadow-elegant ring-1 ring-border">
                <img src={meal2} alt="" width={768} height={768} className="w-full aspect-square object-cover" />
              </div>
              <div className="mt-2 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>No. 044</span>
                <span>Wed</span>
              </div>
            </motion.div>

            {/* Handwritten-style sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-12 right-6 w-24 h-24 rounded-full bg-primary text-primary-foreground grid place-items-center text-center font-display italic leading-tight text-sm shadow-glow"
            >
              cooked<br />today,<br />
              <span className="not-italic font-sans text-[10px] uppercase tracking-wider">not last week</span>
            </motion.div>
          </div>
        </div>

        {/* Ticker / proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm"
        >
          {[
            ["12,408", "subscribers eating better"],
            ["6:42am", "today's chef start time"],
            ["28 cities", "and counting, slowly"],
            ["4.9 ★", "from 3,200 honest reviews"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl">{v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
