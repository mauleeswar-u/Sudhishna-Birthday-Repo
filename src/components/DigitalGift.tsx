
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Gift, Download, ArrowRight } from 'lucide-react';
import Confetti from 'react-confetti';

const DigitalGift = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleUnwrap = () => {
    setIsUnwrapped(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <section id="digital-gift" ref={ref} className="scroll-section bg-gray-100">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      <h2 className={`section-title text-birthday-teal transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Your Digital Gift
      </h2>
      
      <div className={`w-full max-w-xl mx-auto transition-all duration-1000 delay-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {!isUnwrapped ? (
          <div className="relative">
            <div 
              className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center justify-center cursor-pointer transform transition-all hover:scale-105 active:scale-95"
              onClick={handleUnwrap}
            >
              <div className="w-32 h-32 rounded-full bg-birthday-lavender flex items-center justify-center mb-6 animate-float">
                <Gift size={64} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-center">Your Special Gift Awaits!</h3>
              <p className="text-gray-600 text-center mb-6">Click to unwrap your birthday surprise</p>
              
              <button className="py-3 px-6 bg-birthday-pink text-white rounded-full font-semibold flex items-center hover:bg-opacity-90 transition-colors">
                Unwrap Now <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-birthday-yellow animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-birthday-blue animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 -right-8 w-10 h-10 rounded-full bg-birthday-orange animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-xl p-8 animate-scale-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Your Gift Has Been Revealed!</h3>
              <p className="text-gray-600 mb-6">
                I've created a custom playlist and a digital photo album of our favorite memories together.
                Click below to download and enjoy!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a 
                  href="#"
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-birthday-blue flex items-center justify-center mb-4">
                      <Download size={28} className="text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">Digital Photo Album</h4>
                    <p className="text-sm text-gray-500">7MB PDF</p>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-birthday-orange flex items-center justify-center mb-4">
                      <Gift size={28} className="text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">Gift Card</h4>
                    <p className="text-sm text-gray-500">For your favorite store</p>
                  </div>
                </a>
              </div>
              
              <p className="mt-8 text-sm text-gray-500">
                Check your email for more surprises coming your way!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DigitalGift;
