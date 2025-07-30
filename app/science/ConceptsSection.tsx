
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConceptsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.concept-card', 
        { opacity: 0, y: 60, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
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

  const concepts = [
    {
      title: 'Physics',
      description: 'Motion, forces, energy, and waves',
      icon: 'ri-rocket-line',
      color: 'from-blue-500 to-blue-600',
      topics: 15,
      image: 'https://readdy.ai/api/search-image?query=physics%20concepts%20with%20pendulum%2C%20waves%2C%20energy%20diagrams%2C%20and%20motion%20illustrations%20on%20clean%20background%20with%20blue%20accents%2C%20educational%20physics%20for%20students&width=400&height=300&seq=physics-concept&orientation=landscape'
    },
    {
      title: 'Chemistry',
      description: 'Atoms, molecules, and chemical reactions',
      icon: 'ri-flask-line',
      color: 'from-green-500 to-green-600',
      topics: 12,
      image: 'https://readdy.ai/api/search-image?query=chemistry%20concepts%20with%20molecular%20structures%2C%20periodic%20table%20elements%2C%20and%20chemical%20bonds%20on%20clean%20background%20with%20green%20accents%2C%20educational%20chemistry%20for%20students&width=400&height=300&seq=chemistry-concept&orientation=landscape'
    },
    {
      title: 'Biology',
      description: 'Living organisms and life processes',
      icon: 'ri-leaf-line',
      color: 'from-emerald-500 to-emerald-600',
      topics: 18,
      image: 'https://readdy.ai/api/search-image?query=biology%20concepts%20with%20DNA%20double%20helix%2C%20cell%20structures%2C%20and%20plant%20diagrams%20on%20clean%20background%20with%20emerald%20accents%2C%20educational%20biology%20for%20students&width=400&height=300&seq=biology-concept&orientation=landscape'
    },
    {
      title: 'Earth Science',
      description: 'Geology, weather, and space exploration',
      icon: 'ri-earth-line',
      color: 'from-amber-500 to-amber-600',
      topics: 10,
      image: 'https://readdy.ai/api/search-image?query=earth%20science%20with%20geological%20layers%2C%20weather%20patterns%2C%20and%20planetary%20systems%20on%20clean%20background%20with%20amber%20accents%2C%20educational%20earth%20science%20for%20students&width=400&height=300&seq=earth-science-concept&orientation=landscape'
    },
    {
      title: 'Environmental Science',
      description: 'Ecosystems and environmental protection',
      icon: 'ri-plant-line',
      color: 'from-teal-500 to-teal-600',
      topics: 8,
      image: 'https://readdy.ai/api/search-image?query=environmental%20science%20with%20ecosystems%2C%20renewable%20energy%2C%20and%20conservation%20concepts%20on%20clean%20background%20with%20teal%20accents%2C%20educational%20environmental%20science%20for%20students&width=400&height=300&seq=environmental-concept&orientation=landscape'
    },
    {
      title: 'Scientific Method',
      description: 'Research, hypothesis, and experimentation',
      icon: 'ri-search-line',
      color: 'from-purple-500 to-purple-600',
      topics: 6,
      image: 'https://readdy.ai/api/search-image?query=scientific%20method%20with%20hypothesis%20formation%2C%20experimentation%20process%2C%20and%20data%20analysis%20on%20clean%20background%20with%20purple%20accents%2C%20educational%20scientific%20method%20for%20students&width=400&height=300&seq=scientific-method-concept&orientation=landscape'
    }
  ];

  return (
    <section id="concepts" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Science Concepts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore fundamental scientific principles through interactive lessons and visual demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-card group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={concept.image} 
                    alt={concept.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${concept.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${concept.icon} text-2xl text-gray-700`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{concept.title}</h3>
                  <p className="text-gray-600 mb-4">{concept.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{concept.topics} topics</span>
                    <button className={`bg-gradient-to-r ${concept.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow cursor-pointer whitespace-nowrap`}>
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
