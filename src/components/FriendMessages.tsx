
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Volume2, MessageSquare } from 'lucide-react';
import Confetti from 'react-confetti';

interface Message {
  id: number;
  text: string;
  sender: string;
  position: 'left' | 'right';
  hasAudio?: boolean;
  isSecret?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    text: "Happy birthday to the most amazing person I know! Hope your day is filled with joy and laughter.",
    sender: "Trisha",
    position: "left"
  },
  {
    id: 2,
    text: "Wishing you all the happiness in the world on your special day!",
    sender: "Vignesh",
    position: "right"
  },
  {
    id: 3,
    text: "Happy Birthday to someone who’s aging like fine wine!",
    sender: "Nishanthini",
    position: "left",
    hasAudio: true
  },
  {
    id: 4,
    text: "Don't worry, they are not gray hairs, they are wisdom highlights. You just happen to be extremely wise!",
    sender: "Monika",
    position: "right"
  },
  {
    id: 5,
    text: "Happy Birthday to my favorite partner in crime! Let's make this year even more epic.",
    sender: "Dharshana",
    position: "left",
    isSecret: true
  }
];

const FriendMessages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [revealedSecrets, setRevealedSecrets] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const revealSecret = (id: number) => {
    if (!revealedSecrets.includes(id)) {
      setRevealedSecrets([...revealedSecrets, id]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const toggleAudio = (id: number) => {
    if (playingAudio === id) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(id);
    }
  };

  return (
    <section id="friend-messages" ref={ref} className="scroll-section bg-gray-100">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      <h2 className={`section-title text-birthday-pink transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Messages From Friends
      </h2>
      
      <div className="w-full max-w-2xl mx-auto flex flex-col">
        {messages.map((message, index) => (
          <div 
            key={message.id}
            className={`flex ${message.position === 'right' ? 'justify-end' : 'justify-start'} transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className={`message-bubble ${message.position === 'right' ? 'message-right' : 'message-left'}`}>
              {message.isSecret && !revealedSecrets.includes(message.id) ? (
                <div 
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => revealSecret(message.id)}
                >
                  <MessageSquare className="mb-2" />
                  <p className="text-center font-semibold">Click to reveal a secret message</p>
                </div>
              ) : (
                <>
                  <p className="mb-2">{message.text}</p>
                  <p className="text-sm font-semibold mt-2">- {message.sender}</p>
                  
                  {message.hasAudio && (
                    <button 
                      onClick={() => toggleAudio(message.id)}
                      className="mt-3 flex items-center text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      <Volume2 size={18} className="mr-1" />
                      {playingAudio === message.id ? "Pause" : "Listen"}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendMessages;
