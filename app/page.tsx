
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubjectCard from '@/components/SubjectCard';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Core Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the essential subjects that will shape your academic journey. 
              Each subject is designed with interactive content and engaging animations to make learning fun and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SubjectCard 
              title="Mathematics" 
              description="Master algebra, geometry, and problem-solving skills"
              icon="ri-calculator-line"
              color="bg-gradient-to-br from-blue-500 to-purple-600"
              href="/math"
              delay={0.1}
            />
            <SubjectCard 
              title="Science" 
              description="Explore physics, chemistry, and biology concepts"
              icon="ri-flask-line"
              color="bg-gradient-to-br from-green-500 to-blue-600"
              href="/science"
              delay={0.2}
            />
            <SubjectCard 
              title="English" 
              description="Improve reading, writing, and communication"
              icon="ri-book-line"
              color="bg-gradient-to-br from-pink-500 to-red-600"
              href="/english"
              delay={0.3}
            />
            <SubjectCard 
              title="History" 
              description="Journey through civilizations and historical events"
              icon="ri-ancient-gate-line"
              color="bg-gradient-to-br from-amber-500 to-orange-600"
              href="/history"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already mastering their core subjects with our interactive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              View Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
