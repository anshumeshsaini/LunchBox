import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LunchBox — Lunch, but actually good." },
      { name: "description", content: "Chef-cooked lunches delivered fresh the morning of. Eight new dishes a week. Skip anytime." },
      { property: "og:title", content: "LunchBox — Lunch, but actually good." },
      { property: "og:description", content: "Chef-cooked lunches delivered fresh the morning of." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}
