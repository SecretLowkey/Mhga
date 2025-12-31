import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward } from 'lucide-react';

const IntroPage = ({ onComplete }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to play with sound
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay with sound fails, mute and try again
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play();
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsEnded(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#262626] flex items-center justify-center">
      {/* Video Container */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src="https://customer-assets.emergentagent.com/job_mhga-degens/artifacts/l8witp89_3252345276707501898.mp4"
          className="w-full h-full object-contain bg-black"
          playsInline
          onEnded={handleVideoEnd}
        />

        {/* Controls Overlay */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6">
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="cartoon-btn bg-[#F9C93A] text-[#262626] p-4 flex items-center gap-2"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-6 h-6" />
                <span className="comic-title-light text-lg">UNMUTE</span>
              </>
            ) : (
              <>
                <Volume2 className="w-6 h-6" />
                <span className="comic-title-light text-lg">MUTE</span>
              </>
            )}
          </button>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="cartoon-btn bg-[#262626] text-[#F9C93A] p-4 flex items-center gap-2 border-2 border-[#F9C93A]"
          >
            <span className="comic-title-light text-lg">SKIP</span>
            <SkipForward className="w-6 h-6" />
          </button>
        </div>

        {/* Logo watermark */}
        <div className="absolute top-6 left-6">
          <span className="comic-title text-[#F9C93A] text-2xl">$MHGA</span>
        </div>
      </div>

      {/* Fade out overlay when video ends */}
      {isEnded && (
        <div className="absolute inset-0 bg-[#262626] animate-pulse" />
      )}
    </div>
  );
};

export default IntroPage;
