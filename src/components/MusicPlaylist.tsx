
import { useInView } from 'react-intersection-observer';
import { Music, Heart, Sparkles } from 'lucide-react';

const MusicPlaylist = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Spotify playlist link
  const spotifyPlaylistLink = "https://open.spotify.com/playlist/0Hso8KVAmHzyxyH7vbsw9Z?si=Kz5duYf-QxuhL5jpzwTh3A&pi=SfIXICoaRtuBk";

  return (
    <section id="music-playlist" ref={ref} className="scroll-section bg-gradient-to-b from-white to-pink-50">
      <h2 className={`section-title text-birthday-blue transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <span className="relative inline-block">
          This Playlist Sounds Like Us
          <span className="absolute -top-6 -right-6">
            <Sparkles className="text-birthday-pink h-5 w-5" />
          </span>
        </span>
      </h2>
      
      <div className={`w-full max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-all duration-500">
          <div className="relative">
            <img 
              src="https://source.unsplash.com/random/800x600?music,concert,festival,pastel" 
              alt="Playlist Cover" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <div className="bg-pink-400 bg-opacity-70 backdrop-blur-sm p-2 rounded-full mr-3">
                  <Music size={22} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-shadow">Birthday Vibes</h3>
              </div>
              <p className="text-sm opacity-90 font-medium">A playlist curated just for you ✨</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 animate-pulse">
              <Heart size={24} className="text-pink-400 fill-pink-400" />
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-white to-pink-50">
            <p className="text-gray-600 mb-6 italic border-l-4 border-pink-300 pl-3 py-1">
              "I've put together songs that I thought you would like to listen";
            </p>
            
            <div className="space-y-3">
              <div className="rounded-xl bg-white p-4 flex justify-between items-center hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Rasavaachiye</h4>
                    <p className="text-sm text-gray-500">Sid Sriram</p>
                  </div>
                </div>
                <span className="text-sm text-pink-400 font-medium">3:23</span>
              </div>
              
              <div className="rounded-xl bg-white p-4 flex justify-between items-center hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Poraney Poraney</h4>
                    <p className="text-sm text-gray-500">Ghibran</p>
                  </div>
                </div>
                <span className="text-sm text-pink-400 font-medium">5:14</span>
              </div>
              
              <div className="rounded-xl bg-white p-4 flex justify-between items-center hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Muzhumathi</h4>
                    <p className="text-sm text-gray-500">A.R.Rahman</p>
                  </div>
                </div>
                <span className="text-sm text-pink-400 font-medium">5:12</span>
              </div>
              
              <div className="rounded-xl bg-white p-4 flex justify-between items-center hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-300 to-green-300 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Omana Penne</h4>
                    <p className="text-sm text-gray-500">A.R.Rahman</p>
                  </div>
                </div>
                <span className="text-sm text-pink-400 font-medium">5:32</span>
              </div>
              
              <div className="rounded-xl bg-white p-4 flex justify-between items-center hover:bg-pink-50 transition-colors border border-pink-100 shadow-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-300 to-pink-300 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Kadhalaada</h4>
                    <p className="text-sm text-gray-500">Anirudh</p>
                  </div>
                </div>
                <span className="text-sm text-pink-400 font-medium">4:15</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href={spotifyPlaylistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-green-400 to-green-500 text-white text-center rounded-xl font-medium hover:from-green-500 hover:to-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Open in Spotify
              </a>
              
              <p className="text-center text-xs text-gray-500 mt-3">
                <span className="inline-flex items-center">
                  <Heart size={12} className="mr-1 text-pink-400" />
                  Made with love for your Birthday
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlaylist;
