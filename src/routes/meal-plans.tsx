import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, Leaf, Wheat, Fish, ChevronDown } from "lucide-react";
import meal1 from "@/assets/meal-1.jpg";
import meal2 from "@/assets/meal-2.jpg";
import meal3 from "@/assets/meal-3.jpg";
import hero from "@/assets/hero-lunchbox.jpg";

export const Route = createFileRoute("/meal-plans")({
  head: () => ({
    meta: [
      { title: "Meal Plans — LunchBox" },
      { name: "description", content: "Browse this week's chef-crafted meals. Filter by diet, protein, and calories." },
    ],
  }),
  component: MealPlans,
});

const meals = [
  { name: "Wild Salmon Bowl", tag: "Signature", cal: 540, protein: 38, price: 14, img: hero, diet: "Pescatarian", desc: "Grilled wild salmon with quinoa, roasted vegetables, avocado." },
  { name: "Teriyaki Chicken", tag: "High Protein", cal: 580, protein: 45, price: 13, img: meal1, diet: "High Protein", desc: "Glazed chicken thigh with brown rice, broccoli, edamame." },
  { name: "Mediterranean Bowl", tag: "Vegetarian", cal: 490, protein: 22, price: 12, img: meal2, diet: "Vegetarian", desc: "Falafel, hummus, fresh greens, olives, warm pita." },
  { name: "Tuna Poke Bowl", tag: "Fresh", cal: 520, protein: 34, price: 15, img: meal3, diet: "Pescatarian", desc: "Sushi-grade tuna, mango, avocado, edamame, jasmine rice." },
  { name: "Wild Salmon Bowl", tag: "Signature", cal: 540, protein: 38, price: 14, img: hero, diet: "Pescatarian", desc: "Grilled wild salmon with quinoa, roasted vegetables, avocado." },
  { name: "Mediterranean Bowl", tag: "Vegetarian", cal: 490, protein: 22, price: 12, img: meal2, diet: "Vegetarian", desc: "Falafel, hummus, fresh greens, olives, warm pita." },
];

const filters = [
  { label: "All", icon: Flame },
  { label: "Vegetarian", icon: Leaf },
  { label: "High Protein", icon: Wheat },
  { label: "Pescatarian", icon: Fish },
];

function MealPlans() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? meals : meals.filter((m) => m.diet === active);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">This week's menu</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold">
            Fresh meals, <span className="text-gradient">picked by you.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Twenty new dishes every Monday. Filter by your goals and let us handle the rest.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = active === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setActive(f.label)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass hover:bg-primary/10"
                }`}
              >
                <f.icon className="w-4 h-4" />
                {f.label}
              </button>
            );
          })}
          <div className="ml-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm">
            Sort by: Popular <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((m, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-strong text-xs font-semibold">
                  {m.tag}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-background/70 backdrop-blur text-xs font-semibold">
                  ${m.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{m.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>{m.cal} kcal</span>
                    <span>•</span>
                    <span>{m.protein}g protein</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
