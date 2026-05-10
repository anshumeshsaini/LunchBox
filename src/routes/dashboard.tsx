import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { TrendingUp, Wallet, Package, Heart, Clock, MapPin, CheckCircle2, Truck, Home } from "lucide-react";
import meal1 from "@/assets/meal-1.jpg";
import meal2 from "@/assets/meal-2.jpg";
import meal3 from "@/assets/meal-3.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — LunchBox" },
      { name: "description", content: "Your meal subscription, delivery tracking, and order history." },
    ],
  }),
  component: Dashboard,
});

const widgets = [
  { label: "Active Plan", value: "Pro", sub: "10 meals / week", icon: Package, accent: "primary" },
  { label: "Wallet", value: "$48.20", sub: "+ $5 rewards", icon: Wallet, accent: "accent" },
  { label: "This Month", value: "32", sub: "meals delivered", icon: TrendingUp, accent: "primary" },
  { label: "Favorites", value: "12", sub: "saved meals", icon: Heart, accent: "accent" },
];

const timeline = [
  { icon: CheckCircle2, label: "Order confirmed", time: "8:00 AM", done: true },
  { icon: Package, label: "Chef prepared", time: "10:45 AM", done: true },
  { icon: Truck, label: "Out for delivery", time: "11:30 AM", done: true, active: true },
  { icon: Home, label: "Arriving soon", time: "12:15 PM", done: false },
];

const upcoming = [
  { day: "Today", name: "Wild Salmon Bowl", time: "12:15 PM", img: meal3 },
  { day: "Tomorrow", name: "Teriyaki Chicken", time: "12:30 PM", img: meal1 },
  { day: "Wed", name: "Mediterranean Bowl", time: "12:30 PM", img: meal2 },
];

const orders = [
  { id: "#LB-2841", date: "May 8", meal: "Wild Salmon Bowl", status: "Delivered", price: "$14" },
  { id: "#LB-2840", date: "May 7", meal: "Teriyaki Chicken", status: "Delivered", price: "$13" },
  { id: "#LB-2839", date: "May 6", meal: "Tuna Poke Bowl", status: "Delivered", price: "$15" },
  { id: "#LB-2838", date: "May 5", meal: "Mediterranean Bowl", status: "Delivered", price: "$12" },
];

function Dashboard() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Hey, <span className="text-gradient">Alex</span> 👋</h1>
        </motion.div>

        {/* Widgets */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {widgets.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-2xl grid place-items-center ${w.accent === "primary" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"}`}>
                  <w.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted-foreground">{w.label}</span>
              </div>
              <div className="mt-5 text-3xl font-bold">{w.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{w.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-5">
          {/* Delivery tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-strong rounded-3xl p-7"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Live Delivery</h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  124 Market St, Apt 3B
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient">12:15 PM</div>
                <div className="text-xs text-muted-foreground">Estimated arrival</div>
              </div>
            </div>

            <div className="mt-8 relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-border" />
              <div className="absolute left-5 top-5 w-0.5 h-[70%] bg-gradient-to-b from-primary to-accent" />
              <div className="space-y-5">
                {timeline.map((t, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full grid place-items-center transition-all ${
                        t.done ? "bg-gradient-primary shadow-glow" : "glass"
                      } ${t.active ? "animate-pulse-glow" : ""}`}
                    >
                      <t.icon className={`w-4 h-4 ${t.done ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className={`text-sm ${t.done ? "font-medium" : "text-muted-foreground"}`}>{t.label}</span>
                      <span className="text-xs text-muted-foreground">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming meals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-semibold text-lg">Upcoming Meals</h3>
            <div className="mt-5 space-y-3">
              {upcoming.map((u, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 transition-colors">
                  <img src={u.img} alt={u.name} loading="lazy" className="w-14 h-14 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-primary font-semibold">{u.day}</div>
                    <div className="text-sm font-medium truncate">{u.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {u.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Analytics chart placeholder + table */}
        <div className="mt-6 grid lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-semibold text-lg">Nutrition this week</h3>
            <p className="text-sm text-muted-foreground">Avg. macros per meal</p>
            <div className="mt-6 flex items-end gap-2 h-32">
              {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.6 }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-primary/80 to-accent/80"
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-7"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Recent Orders</h3>
              <button className="text-xs text-primary font-semibold hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground uppercase tracking-wider">
                    <th className="px-2 py-2 font-medium">Order</th>
                    <th className="px-2 py-2 font-medium">Date</th>
                    <th className="px-2 py-2 font-medium">Meal</th>
                    <th className="px-2 py-2 font-medium">Status</th>
                    <th className="px-2 py-2 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t border-border">
                      <td className="px-2 py-3 font-mono text-xs">{o.id}</td>
                      <td className="px-2 py-3 text-muted-foreground">{o.date}</td>
                      <td className="px-2 py-3">{o.meal}</td>
                      <td className="px-2 py-3">
                        <span className="inline-flex px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-medium">
                          {o.status}
                        </span>
                      </td>
                      <td className="px-2 py-3 text-right font-semibold">{o.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </SiteLayout>
  );
}
