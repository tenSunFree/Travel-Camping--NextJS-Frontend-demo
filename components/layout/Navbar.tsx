import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button, BUTTON_VARIANTS } from '../ui'

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 bg-blue-600 py-5">
      <Link href="/about">
        <img
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          style={{ width: 'auto', height: 'auto' }}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant={BUTTON_VARIANTS.DARK_GREEN} />
      </div>
      <img
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        style={{ width: 'auto', height: 'auto' }}
      />
    </nav>
  )
}

export default Navbar
