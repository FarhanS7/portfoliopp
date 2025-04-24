import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t text-center text-sm text-gray-500 bg-white mt-12">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
