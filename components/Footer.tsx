
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              EduCore
            </h3>
            <p className="text-gray-400">
              Empowering junior high students with interactive learning experiences across core subjects.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2">
              <li><Link href="/mathematics" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mathematics</Link></li>
              <li><Link href="/science" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Science</Link></li>
              <li><Link href="/english" className="text-gray-400 hover:text-white transition-colors cursor-pointer">English</Link></li>
              <li><Link href="/history" className="text-gray-400 hover:text-white transition-colors cursor-pointer">History</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><Link href="/quiz" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Interactive Quiz</Link></li>
              <li><span className="text-gray-400">Progress Tracking</span></li>
              <li><span className="text-gray-400">Animated Lessons</span></li>
              <li><span className="text-gray-400">Study Materials</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Help Center</span></li>
              <li><span className="text-gray-400">Contact Us</span></li>
              <li><span className="text-gray-400">Study Tips</span></li>
              <li><span className="text-gray-400">FAQ</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EduCore. All rights reserved. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  );
}
