
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.event-card', 
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

  const events = [
    {
      id: 1,
      title: "The Fall of Rome",
      year: "476 CE",
      description: "The Western Roman Empire collapses, marking the end of ancient Rome and the beginning of the Middle Ages.",
      impact: "Led to the rise of feudalism and the formation of medieval European kingdoms.",
      image: "https://readdy.ai/api/search-image?query=fall%20of%20Roman%20Empire%20with%20crumbling%20Roman%20architecture%2C%20barbarian%20invasions%2C%20and%20the%20end%20of%20ancient%20Rome%20in%20dramatic%20historical%20scene%2C%20educational%20history%20for%20students&width=400&height=300&seq=fall-of-rome&orientation=landscape"
    },
    {
      id: 2,
      title: "The Black Death",
      year: "1347-1351",
      description: "A devastating pandemic that swept through Europe, killing an estimated 30-60% of the population.",
      impact: "Fundamentally changed European society, economy, and culture for centuries.",
      image: "https://readdy.ai/api/search-image?query=medieval%20European%20cities%20during%20Black%20Death%20pandemic%20with%20empty%20streets%20and%20medieval%20medical%20practices%2C%20educational%20medieval%20history%20for%20students&width=400&height=300&seq=black-death&orientation=landscape"
    },
    {
      id: 3,
      title: "Discovery of America",
      year: "1492",
      description: "Christopher Columbus reaches the Americas, initiating widespread European exploration and colonization.",
      impact: "Connected the Old and New Worlds, leading to the Columbian Exchange and profound global changes.",
      image: "https://readdy.ai/api/search-image?query=Christopher%20Columbus%20ships%20arriving%20in%20Americas%20with%20sailing%20vessels%20and%20New%20World%20discovery%20scene%2C%20educational%20exploration%20history%20for%20students&width=400&height=300&seq=discovery-america&orientation=landscape"
    }
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Historical Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore pivotal moments that changed the course of human history
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="event-card">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {selectedEvent === event.id ? 'Hide Impact' : 'View Impact'}
                      </button>
                      <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
                        Interactive Map
                      </button>
                    </div>
                    
                    {selectedEvent === event.id && (
                      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h5 className="font-semibold text-amber-800 mb-2">Historical Impact:</h5>
                        <p className="text-amber-700 text-sm">{event.impact}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore History?</h3>
          <p className="text-lg mb-6 opacity-90">
            Dive deeper into the stories that shaped our world and discover your place in history
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
