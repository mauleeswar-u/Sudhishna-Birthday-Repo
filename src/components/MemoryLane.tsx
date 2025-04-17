
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Memory {
  id: number;
  image: string;
  caption: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: '/public/images/b1.jpg',
    caption: 'The smile that lights up every room ✨'
  },
  {
    id: 2,
    image: '/public/images/b2.jpg',
    caption: 'Catching memories, not just moments ❤️'
  },
  {
    id: 3,
    image: '/public/images/b3.jpg',
    caption: 'Laughing through life’s beautiful chaos 🤍'
  },
  {
    id: 4,
    image: '/public/images/b4.jpg',
     caption: 'Her joy is pure magic 🌸'
  },
  {
    id: 5,
    image: '/public/images/b5.jpg',
    caption: 'Golden hour glow, golden heart 🌞'
  },
  {
    id: 6,
    image: '/public/images/b6.jpg',
    caption: 'From silly faces to sweet grins — she owns them all 😄'
  }
];

const MemoryLane = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section 
      id="memory-lane" 
      ref={ref}
      className="scroll-section bg-white"
    >
      <h2 className={`section-title text-birthday-purple transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Memory Lane
      </h2>
      
      <div className={`w-full max-w-4xl mx-auto relative transition-all duration-1000 delay-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="rounded-lg shadow-xl">
          <Slider ref={sliderRef} {...settings}>
            {memories.map((memory) => (
              <div key={memory.id}>
                <div className="relative px-2">
                  <img 
                    src={memory.image} 
                    alt={`Memory ${memory.id}`} 
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-2 right-2 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <p className="text-lg">{memory.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default MemoryLane;
