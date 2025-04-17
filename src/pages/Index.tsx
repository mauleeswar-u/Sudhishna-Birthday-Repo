
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MemoryLane from '@/components/MemoryLane';
import FriendMessages from '@/components/FriendMessages';
import MusicPlaylist from '@/components/MusicPlaylist';
import LetterSection from '@/components/LetterSection';
import FireworksEnding from '@/components/FireworksEnding';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Customize the birthday person's name here
  const [name, setName] = useState('Sudhishna');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load fonts and assets before showing content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Smooth scroll to top on load
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => clearTimeout(timer);
  }, []);

  // You can customize the birthday person's name here
  const birthdayPersonName = name;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
        <div className="text-center text-white">
          <div className="text-5xl font-dancing mb-8 animate-pulse">
            Preparing a special celebration...
          </div>
          
          {/* Birthday cake loading animation */}
          <div className="w-24 h-32 mx-auto mb-8 relative">
            <div className="absolute w-24 h-20 bottom-0 bg-birthday-purple rounded-lg"></div>
            <div className="absolute w-20 h-16 bottom-16 left-2 bg-birthday-pink rounded-t-full"></div>
            
            {/* Candles */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute" style={{ left: `${6 + i * 4}px`, bottom: '32px' }}>
                <div className="w-1 h-8 bg-white"></div>
                <div 
                  className="w-2 h-2 rounded-full bg-birthday-yellow animate-pulse"
                  style={{ 
                    marginLeft: '-2px',
                    marginTop: '-3px',
                    boxShadow: '0 0 10px rgba(255, 209, 102, 0.8), 0 0 20px rgba(255, 209, 102, 0.6)',
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          <div className="text-2xl mt-6">
            Get ready for a wonderful surprise!
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-4 rounded-full bg-white animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth">
      <HeroSection name={birthdayPersonName} />
      <MemoryLane />
      <FriendMessages />
      <MusicPlaylist />
      <LetterSection />
      <FireworksEnding />
      <ScrollToTop />
    </div>
  );
};

export default Index;
