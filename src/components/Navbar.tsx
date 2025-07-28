"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-lg font-bold">User App</div>
        
        <div className="space-x-4 hidden md:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <Link href="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
