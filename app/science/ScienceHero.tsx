
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function ScienceHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.science-title', { opacity: 0, y: 50, duration: 1 })
        .from('.science-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.science-stats', { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.science-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=scientific%20laboratory%20with%20test%20tubes%2C%20microscopes%2C%20DNA%20helixes%2C%20periodic%20table%20elements%2C%20and%20molecular%20structures%20floating%20in%20space%20with%20green%20and%20blue%20gradients%2C%20educational%20science%20background%20for%20students&width=1920&height=1080&seq=science-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="science-title text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
          Explore Science
        </h1>
        <p className="science-subtitle text-xl mb-8 max-w-3xl mx-auto text-green-100">
          Discover the wonders of physics, chemistry, and biology through interactive experiments and engaging lessons.
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="science-stats text-center">
            <div className="text-3xl font-bold text-green-300">12+</div>
            <div className="text-sm text-green-200">Experiments</div>
          </div>
          <div className="science-stats text-center">
            <div className="text-3xl font-bold text-blue-300">25+</div>
            <div className="text-sm text-blue-200">Concepts</div>
          </div>
          <div className="science-stats text-center">
            <div className="text-3xl font-bold text-teal-300">8+</div>
            <div className="text-sm text-teal-200">Virtual Labs</div>
          </div>
        </div>

        <div className="science-cta flex justify-center space-x-6">
          <Link href="#concepts" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Start Exploring
          </Link>
          <Link href="#experiments" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">
            Try Experiments
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
