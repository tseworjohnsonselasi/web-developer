
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.skill-card', 
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

  const skills = [
    {
      title: 'Reading Comprehension',
      description: 'Improve understanding of texts and literary analysis',
      icon: 'ri-book-open-line',
      color: 'from-blue-500 to-blue-600',
      exercises: 25,
      image: 'https://readdy.ai/api/search-image?query=reading%20comprehension%20with%20open%20book%20and%20highlighted%20text%20passages%2C%20educational%20reading%20skills%20for%20students%20with%20blue%20accents%20and%20literary%20elements&width=400&height=300&seq=reading-skill&orientation=landscape'
    },
    {
      title: 'Creative Writing',
      description: 'Express ideas through stories, poems, and essays',
      icon: 'ri-quill-pen-line',
      color: 'from-purple-500 to-purple-600',
      exercises: 20,
      image: 'https://readdy.ai/api/search-image?query=creative%20writing%20with%20vintage%20quill%20pen%2C%20ink%2C%20and%20handwritten%20manuscripts%2C%20educational%20writing%20skills%20for%20students%20with%20purple%20accents%20and%20literary%20inspiration&width=400&height=300&seq=writing-skill&orientation=landscape'
    },
    {
      title: 'Grammar & Usage',
      description: 'Master sentence structure and language rules',
      icon: 'ri-text',
      color: 'from-green-500 to-green-600',
      exercises: 30,
      image: 'https://readdy.ai/api/search-image?query=grammar%20concepts%20with%20sentence%20diagrams%2C%20punctuation%20marks%2C%20and%20language%20rules%20illustrated%20on%20clean%20background%20with%20green%20accents%2C%20educational%20grammar%20for%20students&width=400&height=300&seq=grammar-skill&orientation=landscape'
    },
    {
      title: 'Vocabulary Building',
      description: 'Expand word knowledge and usage skills',
      icon: 'ri-bookmark-line',
      color: 'from-orange-500 to-orange-600',
      exercises: 18,
      image: 'https://readdy.ai/api/search-image?query=vocabulary%20building%20with%20dictionary%20pages%2C%20word%20clouds%2C%20and%20literary%20terms%20on%20clean%20background%20with%20orange%20accents%2C%20educational%20vocabulary%20for%20students&width=400&height=300&seq=vocabulary-skill&orientation=landscape'
    },
    {
      title: 'Public Speaking',
      description: 'Develop confidence in oral communication',
      icon: 'ri-mic-line',
      color: 'from-red-500 to-red-600',
      exercises: 15,
      image: 'https://readdy.ai/api/search-image?query=public%20speaking%20with%20microphone%20and%20presentation%20setup%2C%20educational%20communication%20skills%20for%20students%20with%20red%20accents%20and%20speech%20elements&width=400&height=300&seq=speaking-skill&orientation=landscape'
    },
    {
      title: 'Literature Analysis',
      description: 'Analyze themes, characters, and literary devices',
      icon: 'ri-search-line',
      color: 'from-indigo-500 to-indigo-600',
      exercises: 22,
      image: 'https://readdy.ai/api/search-image?query=literature%20analysis%20with%20classic%20books%2C%20magnifying%20glass%2C%20and%20literary%20themes%20illustration%20on%20clean%20background%20with%20indigo%20accents%2C%20educational%20literature%20study&width=400&height=300&seq=analysis-skill&orientation=landscape'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">English Language Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Develop comprehensive English skills through interactive lessons and practice exercises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${skill.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <i className={`${skill.icon} text-2xl text-gray-700`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{skill.exercises} exercises</span>
                    <button className={`bg-gradient-to-r ${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow cursor-pointer whitespace-nowrap`}>
                      Practice
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
