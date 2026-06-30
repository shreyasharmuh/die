"use client";

import { motion } from "framer-motion";

export default function FinalStatement() {
  return (
    <section className="relative w-full min-h-[110vh] flex items-center justify-center bg-black overflow-hidden">
      
      {/* Atmospheric light field */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8),black)]" />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')]" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        
        {/* Archive label */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="uppercase tracking-[0.55em] text-[10px] text-white/50 mb-10"
        >
          Collaboration Archive · Volume I
        </motion.p>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-white font-extralight leading-[1.1] text-4xl md:text-6xl lg:text-7xl"
        >
          A disciplined collision of <span className="text-white/70">velocity</span>,{" "}
          <span className="text-white/70">material precision</span>, and{" "}
          <span className="text-white/70">aerodynamic silence</span>
        </motion.h2>

        {/* Editorial body */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="mt-12 text-white/60 text-sm md:text-base leading-relaxed tracking-wide max-w-3xl mx-auto"
        >
          This is not a collaboration defined by branding, but by structural intent. In
partnership with{" "}
<span className="text-white">
  Aston Martin
</span>{" "}
and its Formula One division{" "}
<span className="text-white">
  Aston Martin Aramco F1 Team
</span>
          , the project dissolves the boundary between engineering and editorial fashion
          language — translating torque, restraint, and combustion into visual grammar.
        </motion.p>

        {/* Secondary editorial block */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="mt-8 text-white/55 text-sm md:text-base leading-relaxed tracking-wide max-w-3xl mx-auto"
        >
          Every surface is treated as a statement of intent. Carbon fiber becomes couture.
          Wind tunnel geometry becomes silhouette. The machine is no longer an object of
          speed — it becomes an object of perception, calibrated for stillness even at
          extreme velocity.
        </motion.p>

        {/* Quote line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-14 flex items-center justify-center"
        >
          <div className="h-[1px] w-32 bg-white/30" />
        </motion.div>

        {/* Footer micro statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 text-white/40 text-[11px] uppercase tracking-[0.35em]"
        >
          Engineered in silence. Designed for impact.
        </motion.p>

      </div>
    </section>
  );
}