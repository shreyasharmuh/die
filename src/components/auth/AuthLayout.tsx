export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      className="
      min-h-screen

      bg-[#f7f4ef]

      overflow-x-hidden
    "
    >

      {/* subtle editorial grain */}

      <div
        className="
        absolute

        inset-0

        opacity-[0.03]

        pointer-events-none
      "
      />

      {/* content */}

      <div
        className="
        relative

        min-h-screen
      "
      >

        {children}

      </div>

    </div>

  );

}