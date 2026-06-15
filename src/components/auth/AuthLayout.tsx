export default function AuthLayout({ children }: any) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e9e9e9]">

      {/* BACKGROUND IMAGE LAYER */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/concrete-sky.jpg')",
        }}
      />

      {/* LIGHT ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 bg-white/30" />

      {/* CONTENT STAGE */}
      <div className="relative min-h-screen flex justify-center">

        {/* INNER WRAPPER */}
        <div className="w-full max-w-5xl px-6">

          {/* SPACER (NAVBAR SAFE ZONE) */}
          <div className="h-24 md:h-28 lg:h-32" />

          {/* MAIN CONTENT AREA */}
          <div className="flex justify-center">
            {children}
          </div>

          {/* BOTTOM BREATH SPACE (EDITORIAL BALANCE) */}
          <div className="h-16 md:h-24" />

        </div>
      </div>

    </div>
  );
}