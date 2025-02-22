import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 relative">
      {/* Logo */}
      <div className="text-2xl font-boutegard italic">by Sara</div>

      {/* Navigation */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-12 text-lg font-avantn">
        <Link href="/" className="hover:underline">
          portfolio
        </Link>
        <Link href="/about" className="hover:underline">
          about me
        </Link>
        <Link href="/contact" className="hover:underline">
          contact
        </Link>
      </nav>

      {/* Søgefelt */}
      <div>
        <input type="text" placeholder="search ......." className="border-b-2 border-black bg-transparent focus:outline-none text-lg font-avantn" />
      </div>
    </header>
  );
}
