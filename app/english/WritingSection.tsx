
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WritingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePrompt, setActivePrompt] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.writing-card', 
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

  const prompts = [
    {
      id: 1,
      type: "Narrative",
      title: "A Day That Changed Everything",
      description: "Write about a specific day that had a significant impact on your life or a character's life.",
      tips: ["Use descriptive language", "Show, don't tell", "Include dialogue", "Create a clear timeline"]
    },
    {
      id: 2,
      type: "Persuasive",
      title: "Technology in Education",
      description: "Argue for or against the increased use of technology in junior high classrooms.",
      tips: ["State your position clearly", "Use evidence and examples", "Address counterarguments", "Include a strong conclusion"]
    },
    {
      id: 3,
      type: "Descriptive",
      title: "Your Perfect Day",
      description: "Describe in detail what your perfect day would look like from morning to night.",
      tips: ["Use sensory details", "Organize chronologically", "Vary sentence structure", "Create vivid imagery"]
    }
  ];

  return (
    <section id="writing" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Writing Workshop</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Develop your writing skills through guided prompts and structured exercises
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {prompts.map((prompt, index) => (
              <div key={prompt.id} className="writing-card">
                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-rose-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{prompt.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      prompt.type === 'Narrative' ? 'bg-blue-100 text-blue-700' :
                      prompt.type === 'Persuasive' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {prompt.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{prompt.description}</p>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setActivePrompt(activePrompt === prompt.id ? null : prompt.id)}
                      className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {activePrompt === prompt.id ? 'Hide Tips' : 'Writing Tips'}
                    </button>
                    <button className="border-2 border-rose-600 text-rose-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-50 transition-colors cursor-pointer whitespace-nowrap">
                      Start Writing
                    </button>
                  </div>
                  
                  {activePrompt === prompt.id && (
                    <div className="mt-4 p-4 bg-rose-50 rounded-lg border border-rose-200">
                      <h5 className="font-semibold text-rose-800 mb-2">Writing Tips:</h5>
                      <ul className="text-rose-700 text-sm space-y-1">
                        {prompt.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="writing-card">
            <div className="bg-gradient-to-br from-rose-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Writing Progress</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Essays Completed</span>
                    <span className="font-bold">8/12</span>
                  </div>
                  <div className="w-full bg-rose-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Vocabulary Score</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full bg-purple-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Grammar Accuracy</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="w-full bg-pink-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Recent Achievement</h4>
                <div className="flex items-center">
                  <i className="ri-trophy-line text-yellow-300 mr-2"></i>
                  <span className="text-sm">Completed first persuasive essay!</span>
                </div>
              </div>

              <button className="w-full bg-white text-rose-600 px-6 py-3 rounded-full font-semibold mt-6 hover:bg-rose-50 transition-colors cursor-pointer whitespace-nowrap">
                View All Assignments
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
