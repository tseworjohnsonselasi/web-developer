
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HistoryHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.history-title', { opacity: 0, y: 50, duration: 1 })
        .from('.history-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.history-stats', { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.history-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=ancient%20historical%20artifacts%20with%20scrolls%2C%20ancient%20maps%2C%20historical%20monuments%20like%20pyramids%20and%20colosseum%2C%20vintage%20compass%20and%20old%20manuscripts%20with%20amber%20and%20orange%20gradients%2C%20educational%20history%20background&width=1920&height=1080&seq=history-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-red-900/80"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="history-title text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
          Journey Through History
        </h1>
        <p className="history-subtitle text-xl mb-8 max-w-3xl mx-auto text-amber-100">
          Explore the fascinating stories of human civilization, from ancient empires to modern times.
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="history-stats text-center">
            <div className="text-3xl font-bold text-amber-300">50+</div>
            <div className="text-sm text-amber-200">Historical Events</div>
          </div>
          <div className="history-stats text-center">
            <div className="text-3xl font-bold text-orange-300">15+</div>
            <div className="text-sm text-orange-200">Civilizations</div>
          </div>
          <div className="history-stats text-center">
            <div className="text-3xl font-bold text-red-300">25+</div>
            <div className="text-sm text-red-200">Interactive Maps</div>
          </div>
        </div>

        <div className="history-cta flex justify-center space-x-6">
          <Link href="#timeline" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Explore Timeline
          </Link>
          <Link href="#civilizations" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
            Discover Civilizations
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
