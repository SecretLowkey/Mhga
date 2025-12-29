import React from 'react';
import { Trophy } from 'lucide-react';

const winners = [
  {
    id: 1,
    title: "1st Place Winner",
    type: "image",
    src: "https://customer-assets.emergentagent.com/job_mhga-degens/artifacts/7vlnpcge_IMG_4651.jpeg"
  },
  {
    id: 2,
    title: "2nd Place Winner",
    type: "video",
    src: "https://customer-assets.emergentagent.com/job_mhga-degens/artifacts/i6z9sb93_-4433715872058725576.mp4"
  }
];

const Winners = () => {
  return (
    <section id="winners" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-[#F9C93A]" />
            <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl">
              MEME <span className="text-white">WINNERS</span>
            </h2>
            <Trophy className="w-10 h-10 text-[#F9C93A]" />
          </div>
          <p className="marker-text text-white text-xl">
            Meme Competition Champions
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {winners.map((winner) => (
            <div key={winner.id} className="sketch-card overflow-hidden">
              {/* Trophy Badge */}
              <div className="bg-[#F9C93A] py-3 px-4 flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-[#262626]" />
                <span className="comic-title-light text-[#262626] text-xl">{winner.title}</span>
              </div>
              
              {/* Media Container */}
              <div className="aspect-square bg-[#353535]">
                {winner.type === 'image' ? (
                  <img
                    src={winner.src}
                    alt={winner.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={winner.src}
                    controls
                    className="w-full h-full object-cover"
                    playsInline
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
