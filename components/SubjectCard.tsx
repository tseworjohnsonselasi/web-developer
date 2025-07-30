
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface SubjectCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  delay?: number;
}

export default function SubjectCard({ title, description, icon, color, href, delay = 0 }: SubjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          delay: delay,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [delay]);

  return (
    <Link href={href}>
      <div ref={cardRef} className="group cursor-pointer">
        <div className={`${color} rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <i className={`${icon} text-3xl`}></i>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="ri-arrow-right-line text-lg"></i>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-white/90 mb-6">{description}</p>
          
          <div className="flex items-center text-sm text-white/80">
            <i className="ri-time-line mr-2"></i>
            <span>Interactive lessons</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
