import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MemeGenerator = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a2e]">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-[#262626]/95 backdrop-blur-sm border-b-4 border-[#F9C93A] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 cartoon-btn bg-[#F9C93A] text-[#262626] px-4 py-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="comic-title-light text-lg">BACK TO $MHGA</span>
          </button>
          <span className="comic-title text-[#F9C93A] text-2xl">MEME GENERATOR</span>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Iframe Container */}
      <iframe
        src="https://fatmemes.org/generator?app_id=MHGA"
        className="w-full h-full pt-16"
        style={{ border: 'none', height: 'calc(100vh)' }}
        allow="clipboard-write"
        title="MHGA Meme Generator"
      />
    </div>
  );
};

export default MemeGenerator;
