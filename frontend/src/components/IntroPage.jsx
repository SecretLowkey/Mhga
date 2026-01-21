import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward, Play } from 'lucide-react';

const IntroPage = ({ onComplete }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // If unmuted autoplay fails, play muted
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        });
      });
    }
  };

  useEffect(() => {
    // Try to autoplay muted first (most browsers allow this)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay failed - user needs to click
        console.log("Autoplay blocked");
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
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="max-w-full max-h-full object-contain"
          playsInline
          onEnded={handleVideoEnd}
          muted
        >
          <source src="https://customer-assets.emergentagent.com/job_mhga-degens/artifacts/l8witp89_3252345276707501898.mp4" type="video/mp4" />
        </video>

        {/* Play Button Overlay - shown if not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <button
              onClick={startVideo}
              className="cartoon-btn bg-[#F9C93A] text-[#262626] p-8 flex flex-col items-center gap-4"
            >
              <Play className="w-16 h-16" />
              <span className="comic-title-light text-2xl">TAP TO PLAY</span>
            </button>
          </div>
        )}

        {/* Controls Overlay - always show skip, show mute only when playing */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
          {/* Mute/Unmute Button - only when playing */}
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="cartoon-btn bg-[#F9C93A] text-[#262626] px-3 py-2 flex items-center gap-1 text-sm"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="comic-title-light text-sm">UNMUTE</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="comic-title-light text-sm">MUTE</span>
                </>
              )}
            </button>
          )}

          {/* Skip Button - always visible */}
          <button
            onClick={handleSkip}
            className="cartoon-btn bg-[#262626] text-[#F9C93A] px-3 py-2 flex items-center gap-1 border-2 border-[#F9C93A] text-sm"
          >
            <span className="comic-title-light text-sm">SKIP</span>
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Logo watermark */}
        <div className="absolute top-6 left-6">
          <span className="comic-title text-[#F9C93A] text-2xl">$MHGA</span>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
