export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative overflow-hidden">{children}</main>
    </>
  )
}
