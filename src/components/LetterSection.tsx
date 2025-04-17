
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const LetterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [text, setText] = useState('');
  const fullText = `Dear Friend,

I wanted to take a moment on your special day to tell you how much you mean to me. Your friendship has been one of the greatest gifts in my life.

Through all the ups and downs, you've been there with your infectious laugh, your shoulder to lean on, and your incredible way of making even the most ordinary days feel special.

You have this amazing ability to light up any room you walk into, and your kindness touches everyone around you.

As you celebrate another trip around the sun, I hope you feel the love that surrounds you – not just today, but every day. You deserve all the happiness in the world.

Thank you for being you. Thank you for being my friend. Here's to many more birthdays together!`;

  useEffect(() => {
    if (inView) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < fullText.length) {
          setText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 30);
      
      return () => {
        clearInterval(typing);
      };
    }
  }, [inView]);

  return (
    <section 
      id="letter-section" 
      ref={ref}
      className="scroll-section bg-white"
    >
      <h2 className={`section-title text-birthday-pink transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        A Letter For You
      </h2>
      
      <div className={`w-full max-w-2xl mx-auto transition-all duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-[#fffdf7] p-8 rounded-lg shadow-lg relative border border-gray-200">
          {/* Paper texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-10 rounded-lg"></div>
          
          <div className="relative z-10">
            <pre className="font-montserrat whitespace-pre-wrap text-gray-800 leading-relaxed">{text}</pre>
            
            {text === fullText && (
              <div className="flex items-center justify-center mt-8 animate-bounce-in">
                <Heart className="text-birthday-pink fill-birthday-pink" size={32} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
