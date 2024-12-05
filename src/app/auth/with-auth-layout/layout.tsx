export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h2>Inner layout</h2>

      {children}
    </div>
  );
}
