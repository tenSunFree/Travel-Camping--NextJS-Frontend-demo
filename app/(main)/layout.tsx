import { Navbar, Footer } from '@/components/layout'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}
