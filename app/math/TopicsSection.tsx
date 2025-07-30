
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TopicsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.topic-card', 
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

  const topics = [
    {
      title: 'Algebra',
      description: 'Master variables, equations, and linear functions',
      icon: 'ri-function-line',
      color: 'from-blue-500 to-blue-600',
      lessons: 12,
      image: 'https://readdy.ai/api/search-image?query=algebraic%20equations%20and%20variables%20with%20x%20and%20y%20symbols%2C%20mathematical%20formulas%20on%20a%20clean%20white%20background%20with%20blue%20accents%2C%20educational%20algebra%20concept%20for%20students&width=400&height=300&seq=algebra-topic&orientation=landscape'
    },
    {
      title: 'Geometry',
      description: 'Explore shapes, angles, and spatial relationships',
      icon: 'ri-shape-line',
      color: 'from-purple-500 to-purple-600',
      lessons: 10,
      image: 'https://readdy.ai/api/search-image?query=geometric%20shapes%20including%20triangles%2C%20circles%2C%20and%20polygons%20with%20angle%20measurements%20and%20geometric%20formulas%20on%20a%20clean%20background%20with%20purple%20accents%2C%20educational%20geometry%20concepts&width=400&height=300&seq=geometry-topic&orientation=landscape'
    },
    {
      title: 'Statistics',
      description: 'Analyze data, graphs, and probability',
      icon: 'ri-bar-chart-line',
      color: 'from-green-500 to-green-600',
      lessons: 8,
      image: 'https://readdy.ai/api/search-image?query=statistical%20charts%20and%20graphs%20with%20bar%20charts%2C%20pie%20charts%2C%20and%20data%20visualization%20elements%20on%20a%20clean%20background%20with%20green%20accents%2C%20educational%20statistics%20concepts%20for%20students&width=400&height=300&seq=statistics-topic&orientation=landscape'
    },
    {
      title: 'Number Theory',
      description: 'Understand integers, fractions, and decimals',
      icon: 'ri-numbers-line',
      color: 'from-orange-500 to-orange-600',
      lessons: 9,
      image: 'https://readdy.ai/api/search-image?query=number%20sequences%20and%20mathematical%20patterns%20with%20integers%2C%20fractions%2C%20and%20decimal%20numbers%20arranged%20in%20educational%20format%20on%20clean%20background%20with%20orange%20accents&width=400&height=300&seq=number-theory-topic&orientation=landscape'
    },
    {
      title: 'Trigonometry',
      description: 'Study triangles, sine, cosine, and tangent',
      icon: 'ri-triangle-line',
      color: 'from-red-500 to-red-600',
      lessons: 11,
      image: 'https://readdy.ai/api/search-image?query=trigonometric%20functions%20with%20sine%2C%20cosine%2C%20and%20tangent%20waves%2C%20unit%20circle%20and%20triangle%20relationships%20on%20clean%20background%20with%20red%20accents%2C%20educational%20trigonometry%20concepts&width=400&height=300&seq=trigonometry-topic&orientation=landscape'
    },
    {
      title: 'Calculus Basics',
      description: 'Introduction to derivatives and limits',
      icon: 'ri-line-chart-line',
      color: 'from-indigo-500 to-indigo-600',
      lessons: 7,
      image: 'https://readdy.ai/api/search-image?query=calculus%20concepts%20with%20derivative%20graphs%2C%20limit%20notation%2C%20and%20mathematical%20curves%20on%20clean%20background%20with%20indigo%20accents%2C%20educational%20calculus%20introduction%20for%20students&width=400&height=300&seq=calculus-topic&orientation=landscape'
    }
  ];

  return (
    <section id="topics" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mathematics Topics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of junior high mathematics curriculum with interactive lessons and practice problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${topic.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${topic.icon} text-2xl text-gray-700`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{topic.lessons} lessons</span>
                    <button className={`bg-gradient-to-r ${topic.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow cursor-pointer whitespace-nowrap`}>
                      Start Learning
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
