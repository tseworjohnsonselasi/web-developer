
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LiteratureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.literature-item', 
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

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic Fiction",
      description: "A powerful story about racial injustice and moral growth in the American South.",
      themes: ["Justice", "Prejudice", "Moral courage", "Coming of age"],
      image: "https://readdy.ai/api/search-image?query=classic%20American%20literature%20with%20courthouse%20and%20oak%20trees%2C%20representing%20To%20Kill%20a%20Mockingbird%20themes%20of%20justice%20and%20moral%20courage%2C%20educational%20literature%20for%20students&width=300&height=400&seq=mockingbird-book&orientation=portrait"
    },
    {
      id: 2,
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      genre: "Drama",
      description: "The timeless tragedy of young love and family conflict in Renaissance Italy.",
      themes: ["Love", "Fate", "Family conflict", "Youth vs. age"],
      image: "https://readdy.ai/api/search-image?query=Shakespeare%20Romeo%20and%20Juliet%20with%20romantic%20balcony%20scene%20and%20Renaissance%20Italian%20architecture%2C%20classic%20literature%20educational%20content%20for%20students&width=300&height=400&seq=romeo-juliet-book&orientation=portrait"
    },
    {
      id: 3,
      title: "The Outsiders",
      author: "S.E. Hinton",
      genre: "Young Adult",
      description: "A coming-of-age story about friendship, loyalty, and social class divisions.",
      themes: ["Friendship", "Social class", "Identity", "Family bonds"],
      image: "https://readdy.ai/api/search-image?query=young%20adult%20literature%20with%20teenage%20characters%20and%20urban%20setting%2C%20representing%20The%20Outsiders%20themes%20of%20friendship%20and%20social%20class%2C%20educational%20literature%20for%20students&width=300&height=400&seq=outsiders-book&orientation=portrait"
    }
  ];

  return (
    <section id="literature" ref={sectionRef} className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Literature Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore classic and contemporary works to understand themes, characters, and literary techniques
          </p>
        </div>

        <div className="space-y-8">
          {books.map((book, index) => (
            <div key={book.id} className="literature-item">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                        {book.genre}
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">by {book.author}</p>
                    <p className="text-gray-600 mb-6">{book.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Themes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {book.themes.map((theme, themeIndex) => (
                          <span key={themeIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
                        className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {selectedBook === book.id ? 'Hide Study Guide' : 'View Study Guide'}
                      </button>
                      <button className="border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors cursor-pointer whitespace-nowrap">
                        Read Excerpt
                      </button>
                    </div>
                    
                    {selectedBook === book.id && (
                      <div className="mt-6 p-4 bg-rose-50 rounded-lg border border-rose-200">
                        <h5 className="font-semibold text-rose-800 mb-2">Study Guide Topics:</h5>
                        <ul className="text-rose-700 text-sm space-y-1">
                          <li>• Character analysis and development</li>
                          <li>• Plot structure and narrative techniques</li>
                          <li>• Historical and cultural context</li>
                          <li>• Symbolism and literary devices</li>
                          <li>• Discussion questions and essay prompts</li>
                        </ul>
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
