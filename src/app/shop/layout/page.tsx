export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
      bg-[var(--die-background)]

      text-black

      overflow-x-hidden

      min-h-screen
    "
    >
      {children}
    </main>
  );
}