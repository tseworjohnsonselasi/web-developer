
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PracticeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.practice-item', 
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

  const problems = [
    {
      id: 1,
      question: "Solve for x: 2x + 5 = 13",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correct: 1,
      explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4"
    },
    {
      id: 2,
      question: "What is the area of a circle with radius 5?",
      options: ["25π", "10π", "15π", "20π"],
      correct: 0,
      explanation: "Area = πr² = π(5)² = 25π"
    },
    {
      id: 3,
      question: "Find the slope of the line passing through (2,3) and (4,7)",
      options: ["1", "2", "3", "4"],
      correct: 1,
      explanation: "Slope = (y₂-y₁)/(x₂-x₁) = (7-3)/(4-2) = 4/2 = 2"
    }
  ];

  return (
    <section id="practice" ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Practice Problems</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your understanding with interactive math problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={problem.id} className="practice-item">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Problem {problem.id}: {problem.question}
                  </h3>
                  
                  <div className="space-y-3">
                    {problem.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => setSelectedProblem(problem.id)}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-all cursor-pointer whitespace-nowrap ${
                          selectedProblem === problem.id && optionIndex === problem.correct
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {selectedProblem === problem.id && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center mb-2">
                        <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                        <span className="text-green-700 font-medium">Correct!</span>
                      </div>
                      <p className="text-green-600 text-sm">{problem.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="practice-item">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Practice Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Problems Solved</span>
                  <span className="font-bold">127</span>
                </div>
                <div className="w-full bg-blue-400 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-3/4"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Accuracy Rate</span>
                  <span className="font-bold">89%</span>
                </div>
                <div className="w-full bg-purple-400 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-4/5"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Current Streak</span>
                  <span className="font-bold">12 days</span>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-semibold mt-6 hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                View Full Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
