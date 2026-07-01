"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden flex items-center justify-center py-28">

      {/* Subtle cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')]" />

      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="uppercase tracking-[0.6em] text-[10px] text-white/40"
        >
          Aston Martin Aramco F1 Team · Collaboration Archive
        </motion.p>

        {/* Main mark */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-white font-extralight text-4xl md:text-6xl leading-[1.05]"
        >
          Engineered for velocity.
          <br />
          Composed for silence.
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <div className="h-[1px] w-28 bg-white/25 origin-center" />
        </motion.div>

        {/* Editorial micro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
        >
 This is not a collaboration defined by branding, but by structural intent. In{" "}
          partnership with{" "}
          <span className="text-white">
            Aston Martin
          </span>{" "}
          and its Formula One division{" "}
<span className="text-white">
</span>
          , where performance is not represented — it is distilled into form,
          proportion, and controlled aggression.
        </motion.p>

        {/* Bottom seal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 uppercase tracking-[0.5em] text-[10px] text-white/30"
        >
          END OF CHAPTER
        </motion.p>

      </div>
    </footer>
  );
}