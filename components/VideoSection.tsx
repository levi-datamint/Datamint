import React, { useState, useRef } from 'react';
import { Upload, AlertCircle, Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Datamint: AI Debt Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how AI can eliminate the manual drudgery of collections and improve cash flow by 40%.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-2 md:p-4 shadow-2xl relative overflow-hidden max-w-5xl mx-auto ring-1 ring-gray-900/10 group">
          {/* Decorative background glow behind video */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mint-500/20 blur-[120px]"></div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800 shadow-inner flex items-center justify-center">
            
            {!videoError ? (
              <>
                <video 
                  ref={videoRef}
                  className="w-full h-full object-contain cursor-pointer"
                  playsInline
                  poster="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
                  onError={() => setVideoError(true)}
                  onClick={handlePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer"
                    onClick={handlePlay}
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Video File Missing</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  To display the video, please upload your file to the project root and name it <code className="bg-gray-800 px-2 py-1 rounded text-mint-400 font-mono text-sm">video.mp4</code>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-sm">
                  <AlertCircle size={16} />
                  <span>Waiting for file upload...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};