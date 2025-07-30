
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.progress-card', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const achievements = [
    { title: "First Problem Solved", icon: "ri-star-line", earned: true },
    { title: "10 Day Streak", icon: "ri-fire-line", earned: true },
    { title: "Algebra Master", icon: "ri-trophy-line", earned: true },
    { title: "Geometry Explorer", icon: "ri-compass-line", earned: false },
    { title: "100 Problems", icon: "ri-medal-line", earned: false },
    { title: "Perfect Week", icon: "ri-award-line", earned: false }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Track Your Progress</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your learning journey and celebrate achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="progress-card lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Progress</h3>
              
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium w-20">{day}</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.max(20, (index + 1) * 12)}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 text-sm w-12">{Math.max(2, (index + 1) * 1.5).toFixed(0)}h</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8.5</div>
                  <div className="text-sm text-gray-500">Hours This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24</div>
                  <div className="text-sm text-gray-500">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="progress-card">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-lg transition-all ${
                    achievement.earned 
                      ? 'bg-yellow-50 border border-yellow-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}>
                      <i className={`${achievement.icon} text-white text-lg`}></i>
                    </div>
                    <div className="ml-3 flex-1">
                      <div className={`font-medium ${
                        achievement.earned ? 'text-yellow-700' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </div>
                    </div>
                    {achievement.earned && (
                      <i className="ri-check-line text-yellow-600"></i>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
