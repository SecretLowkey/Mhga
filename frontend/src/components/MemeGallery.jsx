import React, { useState } from 'react';
import { memeGallery } from '../data/mock';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  const navigateMeme = (direction) => {
    const currentIndex = memeGallery.findIndex(m => m.id === selectedMeme.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % memeGallery.length;
    } else {
      newIndex = currentIndex === 0 ? memeGallery.length - 1 : currentIndex - 1;
    }
    setSelectedMeme(memeGallery[newIndex]);
  };

  return (
    <section id="memes" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-[#FF7373] px-6 py-2 rounded-full border-4 border-[#262626] shadow-[4px_4px_0_#262626] transform -rotate-2">
              <span className="marker-text text-white text-lg">Community Creations</span>
            </div>
          </div>
          <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl mb-4">
            MEME <span className="text-white">GALLERY</span>
          </h2>
          <p className="marker-text text-white text-xl max-w-xl mx-auto">
            The finest collection of $MHGA memes. Made by holders, for holders.
          </p>
        </div>

        {/* Gallery Grid - Simple image display */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memeGallery.map((meme, index) => (
            <div
              key={meme.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMeme(meme)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="sketch-card overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#262626]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="comic-title text-[#F9C93A] text-xl">VIEW</span>
                  </div>
                </div>

                {/* Card Footer - Just title */}
                <div className="p-4 bg-[#E1D3C1]">
                  <h3 className="marker-text text-[#262626] text-lg truncate text-center">
                    {meme.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Simple view */}
      {selectedMeme && (
        <div
          className="fixed inset-0 z-50 bg-[#262626]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMeme(null)}
        >
          <div className="relative max-w-4xl w-full animate-bounce-in" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedMeme(null)}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-[#FF7373] rounded-full border-4 border-[#262626] flex items-center justify-center hover:rotate-90 transition-transform"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={() => navigateMeme('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#F9C93A] rounded-full border-4 border-[#262626] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-[#262626]" />
            </button>
            <button
              onClick={() => navigateMeme('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#F9C93A] rounded-full border-4 border-[#262626] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-[#262626]" />
            </button>

            <div className="sketch-border bg-[#E1D3C1] overflow-hidden">
              <img
                src={selectedMeme.image}
                alt={selectedMeme.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="comic-title text-[#262626] text-2xl">{selectedMeme.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemeGallery;
