
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function MathHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.math-title', { opacity: 0, y: 50, duration: 1 })
        .from('.math-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.math-stats', { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.math-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20mathematical%20formulas%20and%20geometric%20shapes%20floating%20in%20space%20with%20algebraic%20equations%2C%20calculus%20symbols%2C%20and%20geometric%20figures%20creating%20a%20modern%20educational%20background%20with%20deep%20blue%20and%20purple%20gradients%2C%20mathematical%20concepts%20visualization%20for%20students&width=1920&height=1080&seq=math-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="math-title text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Master Mathematics
        </h1>
        <p className="math-subtitle text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Explore the fascinating world of numbers, equations, and problem-solving. From basic arithmetic to advanced algebra and geometry.
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="math-stats text-center">
            <div className="text-3xl font-bold text-blue-300">15+</div>
            <div className="text-sm text-blue-200">Topics</div>
          </div>
          <div className="math-stats text-center">
            <div className="text-3xl font-bold text-purple-300">200+</div>
            <div className="text-sm text-purple-200">Practice Problems</div>
          </div>
          <div className="math-stats text-center">
            <div className="text-3xl font-bold text-indigo-300">50+</div>
            <div className="text-sm text-indigo-200">Video Lessons</div>
          </div>
        </div>

        <div className="math-cta flex justify-center space-x-6">
          <Link href="#topics" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Start Learning
          </Link>
          <Link href="#practice" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
            Practice Now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
