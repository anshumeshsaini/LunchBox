import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — LunchBox" },
      { name: "description", content: "Sign in to manage your meal subscription." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="flex flex-col p-8 lg:p-14">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>

        <div className="flex-1 grid place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Lunch<span className="text-gradient">Box</span></span>
            </div>

            <h1 className="text-3xl font-bold">Welcome back.</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to manage your meals and deliveries.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="you@email.com" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs text-muted-foreground">Password</label>
                  <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
                </div>
                <input type="password" className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="••••••••" />
              </div>
              <button className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">
                Sign In
              </button>
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-xs"><span className="px-2 bg-background text-muted-foreground">or</span></div>
              </div>
              <button type="button" className="w-full py-3 rounded-xl glass-strong font-semibold hover:bg-primary/10 transition-colors">
                Continue with Google
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-muted-foreground">
              New here? <Link to="/dashboard" className="text-primary font-semibold hover:underline">Create an account</Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right side visual */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-6 rounded-[2rem] glass-strong overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative h-full flex flex-col justify-end p-10">
            <blockquote className="text-3xl font-display font-semibold leading-tight">
              "It's not just a meal — it's the part of my day I actually look forward to."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <div className="text-sm font-semibold">Sarah K.</div>
                <div className="text-xs text-muted-foreground">Pro plan, 18 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
