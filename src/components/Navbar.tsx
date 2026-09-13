"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    ["hero", "about", "projects", "skills", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="/images/Kaesybau.jpg"
                alt="Kaes"
                width={40}
                height={40}
                className="rounded-full border-2 border-white/20 relative z-10"
              />
            </div>
            <span className="text-white text-xl font-bold">Cesya Apridita</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className={`transition-colors ${
                activeSection === "hero"
                  ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                activeSection === "about"
                  ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                activeSection === "projects"
                  ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`transition-colors ${
                activeSection === "skills"
                  ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                activeSection === "contact"
                  ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#hero"
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
