
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo(buttonRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.3"
    );
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20environment%20with%20diverse%20junior%20high%20school%20students%20engaged%20in%20learning%2C%20bright%20classroom%20with%20natural%20lighting%2C%20books%20and%20digital%20devices%2C%20vibrant%20colors%2C%20inspirational%20atmosphere%2C%20contemporary%20design%20elements%2C%20clean%20minimalist%20background%20that%20blends%20seamlessly%20with%20blue%20tones&width=1920&height=1080&seq=hero-education&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-blue-900/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Master Your Core Subjects
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Interactive learning platform designed specifically for junior high students. 
          Explore Mathematics, Science, English, and History with engaging animations and quizzes.
        </p>
        <div ref={buttonRef} className="hero-cta flex justify-center space-x-6">
          <Link href="/math" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Get Started
          </Link>
          <Link href="/science" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
            View Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
