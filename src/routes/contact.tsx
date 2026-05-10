import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LunchBox" },
      { name: "description", content: "Get in touch with the LunchBox team. We reply within hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold">Let's <span className="text-gradient">talk.</span></h1>
          <p className="mt-4 text-muted-foreground">We typically reply within an hour.</p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@lunchbox.app" },
              { icon: Phone, label: "Phone", value: "+1 (415) 555-0182" },
              { icon: MapPin, label: "Office", value: "124 Market St, San Francisco" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-items-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground">Name</label>
                <input className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Subject</label>
              <input className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </SiteLayout>
  );
}
