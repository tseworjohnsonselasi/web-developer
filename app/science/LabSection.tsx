
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LabSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.lab-card', 
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

  const labs = [
    {
      title: "Virtual Microscope",
      description: "Explore cellular structures and microorganisms",
      icon: "ri-microscope-line",
      color: "from-blue-500 to-blue-600",
      image: "https://readdy.ai/api/search-image?query=microscope%20view%20of%20cells%20and%20microorganisms%20with%20detailed%20cellular%20structures%2C%20educational%20biology%20microscopy%20for%20students%20with%20blue%20accents&width=300&height=200&seq=microscope-lab&orientation=landscape"
    },
    {
      title: "Chemistry Simulator",
      description: "Mix chemicals safely in a virtual environment",
      icon: "ri-test-tube-line",
      color: "from-green-500 to-green-600",
      image: "https://readdy.ai/api/search-image?query=chemistry%20laboratory%20with%20test%20tubes%20and%20chemical%20reactions%2C%20virtual%20chemistry%20simulation%20for%20students%20with%20green%20accents%20and%20molecular%20structures&width=300&height=200&seq=chemistry-lab&orientation=landscape"
    },
    {
      title: "Physics Playground",
      description: "Experiment with forces, motion, and energy",
      icon: "ri-flashlight-line",
      color: "from-purple-500 to-purple-600",
      image: "https://readdy.ai/api/search-image?query=physics%20laboratory%20with%20pendulums%2C%20springs%2C%20and%20motion%20experiments%2C%20educational%20physics%20simulation%20for%20students%20with%20purple%20accents&width=300&height=200&seq=physics-lab&orientation=landscape"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Virtual Laboratory</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access state-of-the-art virtual labs to conduct experiments safely from anywhere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <div key={index} className="lab-card">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={lab.image} 
                    alt={lab.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${lab.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${lab.icon} text-2xl text-gray-700`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lab.title}</h3>
                  <p className="text-gray-600 mb-6">{lab.description}</p>
                  
                  <button className={`w-full bg-gradient-to-r ${lab.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow cursor-pointer whitespace-nowrap`}>
                    Launch Lab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Scientific Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of students exploring the wonders of science through interactive learning
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap">
            Begin Exploration
          </button>
        </div>
      </div>
    </section>
  );
}
