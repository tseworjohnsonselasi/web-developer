
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      );
    }
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            <span style={{ fontFamily: '"Pacifico", serif' }}>EduHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/math" className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              Math
            </Link>
            <Link href="/science" className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              Science
            </Link>
            <Link href="/english" className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              English
            </Link>
            <Link href="/history" className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              History
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Login
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
