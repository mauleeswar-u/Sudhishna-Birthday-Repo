
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Confetti from 'react-confetti';
import { Heart } from 'lucide-react';

const FireworksEnding = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [dimensions, setDimensions] = useState({ 
    width: 0,
    height: 0 
  });
  
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowConfetti(true);
      
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [inView]);

  return (
    <section 
      id="fireworks-ending" 
      ref={ref}
      className="scroll-section min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white"
    >
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.05}
        />
      )}
      
      <div className={`text-center z-10 transition-all duration-1000 delay-500 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}>
        <div className="flex justify-center mb-6">
          <Heart className="text-white fill-white animate-pulse" size={64} />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Hope This Made Your Day Special!</h2>
        <p className="text-xl md:text-2xl">
          Just like you make every day special for those around you.
        </p>
        
        <div className="mt-12 space-y-4">
          <p className="text-lg">With love,</p>
          <p className="text-xl font-dancing">Your Friend</p>
        </div>
      </div>
    </section>
  );
};

export default FireworksEnding;
