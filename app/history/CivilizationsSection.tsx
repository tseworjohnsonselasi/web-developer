
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CivilizationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.civilization-card', 
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

  const civilizations = [
    {
      name: "Ancient Egypt",
      period: "3100 - 30 BCE",
      achievements: "Pyramids, hieroglyphics, mummification",
      color: "from-yellow-500 to-orange-600",
      icon: "ri-pyramid-line",
      image: "https://readdy.ai/api/search-image?query=ancient%20Egyptian%20pyramids%20with%20sphinx%2C%20pharaohs%2C%20and%20hieroglyphic%20writing%20on%20papyrus%20with%20golden%20desert%20sunset%2C%20educational%20ancient%20Egypt%20for%20students&width=400&height=300&seq=ancient-egypt&orientation=landscape"
    },
    {
      name: "Ancient Greece",
      period: "800 - 146 BCE",
      achievements: "Democracy, philosophy, Olympic Games",
      color: "from-blue-500 to-indigo-600",
      icon: "ri-building-line",
      image: "https://readdy.ai/api/search-image?query=ancient%20Greek%20Parthenon%20with%20marble%20columns%2C%20Greek%20philosophers%2C%20and%20Olympic%20athletes%20in%20classical%20Mediterranean%20setting%2C%20educational%20ancient%20Greece%20for%20students&width=400&height=300&seq=ancient-greece&orientation=landscape"
    },
    {
      name: "Roman Empire",
      period: "27 BCE - 476 CE",
      achievements: "Law, engineering, vast empire",
      color: "from-red-500 to-purple-600",
      icon: "ri-shield-line",
      image: "https://readdy.ai/api/search-image?query=Roman%20Colosseum%20with%20gladiators%2C%20Roman%20legions%2C%20and%20ancient%20Roman%20architecture%20in%20imperial%20setting%2C%20educational%20Roman%20Empire%20for%20students&width=400&height=300&seq=roman-empire&orientation=landscape"
    },
    {
      name: "Maya Civilization",
      period: "2000 BCE - 1500 CE",
      achievements: "Calendar, astronomy, pyramids",
      color: "from-green-500 to-teal-600",
      icon: "ri-ancient-gate-line",
      image: "https://readdy.ai/api/search-image?query=Maya%20pyramids%20with%20astronomical%20observations%2C%20Maya%20calendar%2C%20and%20jungle%20temples%20in%20Mesoamerican%20setting%2C%20educational%20Maya%20civilization%20for%20students&width=400&height=300&seq=maya-civilization&orientation=landscape"
    },
    {
      name: "Chinese Dynasties",
      period: "2070 BCE - 1912 CE",
      achievements: "Great Wall, gunpowder, silk",
      color: "from-amber-500 to-red-600",
      icon: "ri-ancient-pavilion-line",
      image: "https://readdy.ai/api/search-image?query=Great%20Wall%20of%20China%20with%20traditional%20Chinese%20architecture%2C%20emperors%2C%20and%20ancient%20Chinese%20inventions%20in%20mountainous%20landscape%2C%20educational%20Chinese%20history%20for%20students&width=400&height=300&seq=chinese-dynasties&orientation=landscape"
    },
    {
      name: "Islamic Golden Age",
      period: "8th - 13th Century",
      achievements: "Mathematics, medicine, literature",
      color: "from-emerald-500 to-blue-600",
      icon: "ri-book-line",
      image: "https://readdy.ai/api/search-image?query=Islamic%20golden%20age%20with%20Baghdad%20House%20of%20Wisdom%2C%20Islamic%20scholars%2C%20and%20geometric%20patterns%20in%20Middle%20Eastern%20architecture%2C%20educational%20Islamic%20history%20for%20students&width=400&height=300&seq=islamic-golden-age&orientation=landscape"
    }
  ];

  return (
    <section id="civilizations" ref={sectionRef} className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Great Civilizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the remarkable achievements and lasting legacies of history's greatest civilizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {civilizations.map((civilization, index) => (
            <div key={index} className="civilization-card group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={civilization.image} 
                    alt={civilization.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${civilization.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${civilization.icon} text-2xl text-gray-700`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{civilization.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{civilization.period}</p>
                  <p className="text-gray-600 mb-4">{civilization.achievements}</p>
                  
                  <button className={`w-full bg-gradient-to-r ${civilization.color} text-white py-3 rounded-full font-medium hover:shadow-lg transition-shadow cursor-pointer whitespace-nowrap`}>
                    Explore Civilization
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
