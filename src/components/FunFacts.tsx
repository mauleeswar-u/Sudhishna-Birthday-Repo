
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Star } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your favorite ice cream flavor?",
    options: ["Chocolate", "Vanilla", "Strawberry", "Mint Chocolate Chip"],
    correctAnswer: 3,
    funFact: "You've loved mint chocolate chip since you were 7 years old!"
  },
  {
    id: 2,
    question: "Which movie can you quote from start to finish?",
    options: ["The Princess Bride", "Star Wars", "The Avengers", "Harry Potter"],
    correctAnswer: 0,
    funFact: "You've watched The Princess Bride over 20 times!"
  },
  {
    id: 3,
    question: "What was your childhood dream job?",
    options: ["Astronaut", "Doctor", "Superhero", "Rock Star"],
    correctAnswer: 2,
    funFact: "You used to wear a cape to kindergarten every day for a month!"
  },
  {
    id: 4,
    question: "What's your go-to karaoke song?",
    options: ["Don't Stop Believin'", "Sweet Caroline", "Bohemian Rhapsody", "Dancing Queen"],
    correctAnswer: 2,
    funFact: "You once won a karaoke contest with your epic rendition of Bohemian Rhapsody!"
  },
  {
    id: 5,
    question: "What's your most used emoji?",
    options: ["😂", "❤️", "🙌", "🤔"],
    correctAnswer: 0,
    funFact: "You sent over 500 laughing emojis last month alone!"
  }
];

const FunFacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFact, setShowFact] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFact(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFact(false);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const isCompleted = currentQuestion === questions.length - 1 && selectedAnswer !== null;

  return (
    <section id="fun-facts" ref={ref} className="scroll-section bg-white">
      <h2 className={`section-title text-birthday-yellow transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Fun Facts Quiz
      </h2>
      
      <div className={`w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-all duration-1000 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-birthday-yellow h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-right text-sm mt-1 text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        
        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
        
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? index === question.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-birthday-yellow'
              } ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={() => selectedAnswer === null && handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
        
        {showFact && (
          <div className="bg-birthday-lavender rounded-lg p-4 animate-fade-in mb-6">
            <div className="flex items-start">
              <Star className="text-birthday-purple mr-2 flex-shrink-0 mt-1" size={20} />
              <p>{question.funFact}</p>
            </div>
            <p className="mt-2 font-medium">
              {isCorrect 
                ? "Wow, you know me so well! 🎉" 
                : "Haha, that's not quite right, but that's ok! 😊"}
            </p>
          </div>
        )}
        
        {selectedAnswer !== null && !isCompleted && (
          <button 
            onClick={nextQuestion}
            className="w-full py-3 px-4 bg-birthday-yellow text-white rounded-lg font-semibold flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            Next Question <ArrowRight size={18} className="ml-2" />
          </button>
        )}
        
        {isCompleted && (
          <button 
            onClick={resetQuiz}
            className="w-full py-3 px-4 bg-birthday-blue text-white rounded-lg font-semibold flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            Start Over
          </button>
        )}
      </div>
    </section>
  );
};

export default FunFacts;
