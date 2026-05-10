import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Floating background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-float" />
      </div>

      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-28"
      >
        {children}
      </motion.main>
      <Footer />

      {/* Floating support button */}
      <button className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-primary shadow-glow grid place-items-center hover:scale-110 transition-transform animate-pulse-glow">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>
    </div>
  );
}
