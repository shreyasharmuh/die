export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f7f5f2]">

      {/* navbar safe zone */}

      <div className="pt-20">

        <div className="min-h-[calc(100vh-80px)]">

          {children}

        </div>

      </div>

    </div>
  );
}