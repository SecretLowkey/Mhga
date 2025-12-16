import React, { useState } from 'react';
import { memeGallery } from '../data/mock';
import { Heart, Download, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [likedMemes, setLikedMemes] = useState([]);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedMemes(prev => 
      prev.includes(id) 
        ? prev.filter(memeId => memeId !== id)
        : [...prev, id]
    );
  };

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
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 animate-float" style={{ animationDelay: '0s' }}>
        <div className="text-6xl">🎨</div>
      </div>
      <div className="absolute bottom-20 right-5 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-6xl">🖼️</div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-[#FF7373] px-6 py-2 rounded-full border-4 border-[#262626] shadow-[4px_4px_0_#262626] transform -rotate-2">
              <span className="marker-text text-white text-lg">Community Creations</span>
            </div>
          </div>
          <h2 className="comic-title text-[#E1D3C1] text-4xl sm:text-5xl lg:text-6xl mb-4">
            MEME <span className="text-[#F9C93A]">GALLERY</span>
          </h2>
          <p className="marker-text text-[#E1D3C1]/80 text-xl max-w-xl mx-auto">
            The finest collection of $MHGA memes. Made by holders, for holders.
          </p>
        </div>

        {/* Gallery Grid */}
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

                {/* Card Footer */}
                <div className="p-4 bg-[#E1D3C1]">
                  <h3 className="marker-text text-[#262626] text-lg truncate mb-2">
                    {meme.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => handleLike(meme.id, e)}
                      className="flex items-center gap-1 group/like"
                    >
                      <Heart
                        className={`w-5 h-5 transition-all ${
                          likedMemes.includes(meme.id)
                            ? 'fill-[#FF7373] text-[#FF7373] scale-110'
                            : 'text-[#353535] group-hover/like:text-[#FF7373]'
                        }`}
                      />
                      <span className="text-[#353535] text-sm">
                        {meme.likes + (likedMemes.includes(meme.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 hover:bg-[#F9C93A]/30 rounded-full transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-[#353535]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="cartoon-btn bg-[#353535] text-[#E1D3C1] px-8 py-4 text-xl border-[#F9C93A]">
            Load More Memes
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
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
              <div className="p-6">
                <h3 className="comic-title text-[#262626] text-2xl mb-4">{selectedMeme.title}</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleLike(selectedMeme.id, { stopPropagation: () => {} })}
                    className="cartoon-btn bg-[#FF7373] text-white px-6 py-2 flex items-center gap-2"
                  >
                    <Heart className={`w-5 h-5 ${likedMemes.includes(selectedMeme.id) ? 'fill-white' : ''}`} />
                    <span>{selectedMeme.likes + (likedMemes.includes(selectedMeme.id) ? 1 : 0)}</span>
                  </button>
                  <div className="flex gap-2">
                    <button className="cartoon-btn bg-[#43E7D3] text-[#262626] px-4 py-2 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      <span>Save</span>
                    </button>
                    <button className="cartoon-btn bg-[#A677E8] text-white px-4 py-2 flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemeGallery;
