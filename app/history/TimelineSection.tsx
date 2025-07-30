
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.timeline-item', 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0,
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

  const timelineEvents = [
    {
      year: "3500 BCE",
      title: "Ancient Civilizations Begin",
      description: "The first civilizations emerge in Mesopotamia and Egypt",
      color: "from-yellow-500 to-orange-500",
      image: "https://readdy.ai/api/search-image?query=ancient%20Mesopotamian%20civilization%20with%20ziggurats%2C%20cuneiform%20writing%2C%20and%20early%20settlements%20along%20rivers%20with%20golden%20sunlight%2C%20educational%20ancient%20history%20for%20students&width=300&height=200&seq=ancient-civilizations&orientation=landscape"
    },
    {
      year: "800 BCE",
      title: "Classical Antiquity",
      description: "Greek city-states and Roman Empire flourish",
      color: "from-blue-500 to-purple-500",
      image: "https://readdy.ai/api/search-image?query=ancient%20Greek%20and%20Roman%20architecture%20with%20columns%2C%20marble%20statues%2C%20and%20classical%20buildings%20in%20Mediterranean%20setting%2C%20educational%20classical%20history%20for%20students&width=300&height=200&seq=classical-antiquity&orientation=landscape"
    },
    {
      year: "500 CE",
      title: "Medieval Period",
      description: "Feudalism, knights, and medieval kingdoms",
      color: "from-green-500 to-teal-500",
      image: "https://readdy.ai/api/search-image?query=medieval%20castle%20with%20knights%2C%20feudal%20system%2C%20and%20medieval%20village%20life%20in%20European%20countryside%2C%20educational%20medieval%20history%20for%20students&width=300&height=200&seq=medieval-period&orientation=landscape"
    },
    {
      year: "1400 CE",
      title: "Renaissance",
      description: "Art, science, and culture flourish in Europe",
      color: "from-pink-500 to-red-500",
      image: "https://readdy.ai/api/search-image?query=Renaissance%20art%20and%20architecture%20with%20Italian%20buildings%2C%20scientific%20instruments%2C%20and%20cultural%20renaissance%20in%20European%20cities%2C%20educational%20Renaissance%20history%20for%20students&width=300&height=200&seq=renaissance&orientation=landscape"
    },
    {
      year: "1776 CE",
      title: "Age of Revolutions",
      description: "American and French revolutions reshape the world",
      color: "from-indigo-500 to-blue-500",
      image: "https://readdy.ai/api/search-image?query=American%20Revolution%20with%20colonial%20architecture%2C%20founding%20fathers%2C%20and%20revolutionary%20war%20scenes%20in%2018th%20century%20America%2C%20educational%20revolution%20history%20for%20students&width=300&height=200&seq=age-revolutions&orientation=landscape"
    },
    {
      year: "1900 CE",
      title: "Modern Era",
      description: "Industrial revolution and technological advancement",
      color: "from-gray-500 to-slate-500",
      image: "https://readdy.ai/api/search-image?query=industrial%20revolution%20with%20factories%2C%20steam%20engines%2C%20and%20early%2020th%20century%20technological%20advancement%2C%20educational%20modern%20history%20for%20students&width=300&height=200&seq=modern-era&orientation=landscape"
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Historical Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel through time and explore the major periods and events that shaped human civilization
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-300 h-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-amber-500">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm mb-4`}>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
