import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { ChefHat, Leaf, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LunchBox" },
      { name: "description", content: "A team of chefs, nutritionists, and engineers reimagining everyday meals." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ChefHat, title: "Chef-led", desc: "Every recipe is built and signed off by Michelin-trained chefs." },
  { icon: Leaf, title: "Sustainable", desc: "Compostable packaging and zero-waste kitchens, by default." },
  { icon: Award, title: "Quality first", desc: "We taste, measure, and ship — only the best leaves our kitchen." },
  { icon: Users, title: "Community", desc: "Our subscribers shape the menu through ratings and feedback." },
];

function About() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our story</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-bold">
            We make eating well<br /><span className="text-gradient">effortless.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            LunchBox started in a tiny kitchen in 2022 with a simple idea: most people want to eat better,
            but life gets in the way. Today, our chefs prepare over 200 unique meals each week for tens of
            thousands of subscribers across 28 cities.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 grid place-items-center">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-5 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
