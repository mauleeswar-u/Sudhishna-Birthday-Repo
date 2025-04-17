
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const LetterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [text, setText] = useState('');
  const fullText = `Dear Sudhishna,

Just taking a moment today to celebrate the incredible person you are. Your presence brings so much light, laughter, and calm into the lives of the people around you — and that’s something truly special.

Through the highs, the lows, and everything in between, your energy stays true: kind, loyal, and always real. It’s rare to find someone who can make even ordinary days feel a little brighter just by being themselves.

You have a way of making others feel seen and appreciated — not with grand gestures, but in the small, quiet ways that matter most. That’s a gift, and it doesn’t go unnoticed.

On your birthday, may you feel all the love, joy, and warmth you so naturally give to others. You deserve every bit of it and more.

Here’s to more memories, more laughter, and another great year ahead.

With love, always — your friend.`;

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
