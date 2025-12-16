import React from 'react';
import { manifesto } from '../data/mock';
import { Quote, Star } from 'lucide-react';

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 px-4 relative overflow-hidden">
      {/* Hand-drawn background pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5" preserveAspectRatio="none">
          <pattern id="scribble" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q25 30 50 50 T100 50" fill="none" stroke="#F9C93A" strokeWidth="2" />
            <circle cx="80" cy="20" r="5" fill="none" stroke="#FF7373" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#scribble)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-[#F9C93A] animate-wobble" />
            <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl">
              THE <span className="text-white">MANIFESTO</span>
            </h2>
            <Star className="w-8 h-8 text-[#F9C93A] animate-wobble" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Main Manifesto Card */}
        <div className="sketch-border bg-[#262626]/95 backdrop-blur-sm p-8 sm:p-12 relative">
          {/* Decorative quote mark */}
          <Quote className="absolute -top-6 -left-6 w-16 h-16 text-[#F9C93A] transform -rotate-12" />

          {/* Title */}
          <h3 className="comic-title text-[#F9C93A] text-3xl sm:text-4xl text-center mb-8">
            {manifesto.subtitle}
          </h3>

          {/* Intro */}
          <div className="mb-8">
            <p className="marker-text text-white text-lg sm:text-xl whitespace-pre-line leading-relaxed">
              {manifesto.intro}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#F9C93A]/50 to-transparent" />
            <div className="mx-4 text-[#F9C93A] text-3xl">🦆</div>
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#F9C93A]/50 to-transparent" />
          </div>

          {/* Body */}
          <div className="mb-8">
            <p className="text-white text-lg whitespace-pre-line leading-relaxed">
              {manifesto.body}
            </p>
          </div>

          {/* Holding is... */}
          <div className="my-10 text-center">
            <p className="comic-title text-[#F9C93A] text-2xl mb-2">Holding is a skill.</p>
            <p className="comic-title text-[#F9C93A] text-2xl mb-2">Holding is a statement.</p>
            <p className="comic-title text-[#F9C93A] text-2xl">Holding is power.</p>
          </div>

          {/* Principles */}
          <div className="my-10">
            <h4 className="marker-text text-white text-xl text-center mb-6">
              $MHGA stands for:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {manifesto.principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#353535]/50 px-4 py-3 rounded-lg border-2 border-[#F9C93A]/30 hover:border-[#F9C93A] transition-colors group"
                >
                  <div className="w-8 h-8 bg-[#F9C93A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-wobble">
                    <span className="comic-title text-[#262626] text-sm">{index + 1}</span>
                  </div>
                  <span className="marker-text text-white text-lg">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="text-center">
            <p className="text-white text-lg whitespace-pre-line leading-relaxed mb-8">
              {manifesto.closing}
            </p>

            {/* Signature style closing */}
            <div className="inline-block">
              <div className="bg-[#F9C93A] px-8 py-4 rounded-lg border-4 border-[#262626] shadow-[6px_6px_0_#000] transform -rotate-2 hover:rotate-0 transition-transform">
                <span className="comic-title text-[#262626] text-2xl sm:text-3xl">
                  Make Holding Great Again.
                </span>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute bottom-4 right-4">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M5 35 L35 35 L35 5" fill="none" stroke="#F9C93A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-[#F9C93A]"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
