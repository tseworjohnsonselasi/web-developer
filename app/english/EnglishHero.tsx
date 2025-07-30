
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function EnglishHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.english-title', { opacity: 0, y: 50, duration: 1 })
        .from('.english-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.english-stats', { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.english-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=literary%20elements%20with%20open%20books%2C%20vintage%20typewriter%2C%20floating%20letters%20and%20words%2C%20quill%20pen%2C%20and%20classic%20literature%20symbols%20in%20elegant%20composition%20with%20rose%20and%20purple%20gradients%2C%20educational%20English%20literature%20background&width=1920&height=1080&seq=english-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-purple-900/80"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="english-title text-6xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
          Master English
        </h1>
        <p className="english-subtitle text-xl mb-8 max-w-3xl mx-auto text-rose-100">
          Enhance your reading, writing, and communication skills through engaging literature and interactive lessons.
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="english-stats text-center">
            <div className="text-3xl font-bold text-rose-300">20+</div>
            <div className="text-sm text-rose-200">Literature Pieces</div>
          </div>
          <div className="english-stats text-center">
            <div className="text-3xl font-bold text-purple-300">15+</div>
            <div className="text-sm text-purple-200">Writing Exercises</div>
          </div>
          <div className="english-stats text-center">
            <div className="text-3xl font-bold text-pink-300">30+</div>
            <div className="text-sm text-pink-200">Grammar Lessons</div>
          </div>
        </div>

        <div className="english-cta flex justify-center space-x-6">
          <Link href="#skills" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Start Reading
          </Link>
          <Link href="#writing" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap">
            Practice Writing
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
