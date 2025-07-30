
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperimentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.experiment-item', 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.6,
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

  const experiments = [
    {
      id: 1,
      title: "Volcano Eruption",
      description: "Create a chemical reaction that simulates a volcanic eruption using safe household materials.",
      difficulty: "Beginner",
      time: "15 minutes",
      materials: ["Baking soda", "Vinegar", "Food coloring", "Dish soap"],
      image: "https://readdy.ai/api/search-image?query=volcano%20eruption%20experiment%20with%20baking%20soda%20and%20vinegar%20reaction%2C%20educational%20science%20experiment%20setup%20with%20colorful%20foam%20eruption%20on%20clean%20background&width=400&height=300&seq=volcano-experiment&orientation=landscape"
    },
    {
      id: 2,
      title: "Rainbow in a Glass",
      description: "Explore density by creating colorful layers using liquids of different densities.",
      difficulty: "Intermediate",
      time: "20 minutes",
      materials: ["Honey", "Dish soap", "Water", "Vegetable oil", "Food coloring"],
      image: "https://readdy.ai/api/search-image?query=rainbow%20layers%20in%20glass%20with%20different%20colored%20liquids%20showing%20density%20experiment%2C%20educational%20science%20demonstration%20with%20colorful%20liquid%20layers&width=400&height=300&seq=rainbow-experiment&orientation=landscape"
    },
    {
      id: 3,
      title: "Growing Crystals",
      description: "Learn about crystallization by growing your own salt or sugar crystals over time.",
      difficulty: "Advanced",
      time: "1 week",
      materials: ["Salt or sugar", "Hot water", "String", "Food coloring"],
      image: "https://readdy.ai/api/search-image?query=crystal%20growing%20experiment%20with%20salt%20crystals%20forming%20on%20string%2C%20educational%20science%20project%20showing%20crystallization%20process%20with%20clear%20crystals&width=400&height=300&seq=crystal-experiment&orientation=landscape"
    }
  ];

  return (
    <section id="experiments" ref={sectionRef} className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hands-On Experiments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conduct safe and exciting experiments to understand scientific principles
          </p>
        </div>

        <div className="space-y-8">
          {experiments.map((experiment, index) => (
            <div key={experiment.id} className="experiment-item">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={experiment.image} 
                      alt={experiment.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        experiment.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        experiment.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {experiment.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {experiment.time}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{experiment.title}</h3>
                    <p className="text-gray-600 mb-6">{experiment.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Materials Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiment.materials.map((material, materialIndex) => (
                          <span key={materialIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setActiveExperiment(activeExperiment === experiment.id ? null : experiment.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {activeExperiment === experiment.id ? 'Hide Instructions' : 'View Instructions'}
                      </button>
                      <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap">
                        Save to Favorites
                      </button>
                    </div>
                    
                    {activeExperiment === experiment.id && (
                      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2">Step-by-step Instructions:</h5>
                        <ol className="text-green-700 text-sm space-y-1">
                          <li>1. Gather all materials in a safe, well-ventilated area</li>
                          <li>2. Follow safety precautions and wear protective equipment</li>
                          <li>3. Proceed with the experiment as demonstrated</li>
                          <li>4. Record your observations and results</li>
                          <li>5. Clean up properly and dispose of materials safely</li>
                        </ol>
                      </div>
                    )}
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
