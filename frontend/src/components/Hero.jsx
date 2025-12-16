import React, { useState } from 'react';
import { siteConfig } from '../data/mock';
import { ArrowDown, Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(siteConfig.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen relative overflow-hidden pt-32 sm:pt-36 pb-12 flex items-center">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Comic-style speech bubble */}
            <div className="inline-block mb-6 animate-bounce-in">
              <div className="relative bg-[#F9C93A] px-6 py-2 rounded-full border-4 border-[#262626] shadow-[4px_4px_0_#262626]">
                <span className="marker-text text-[#262626] text-lg">The OG Holder Duck</span>
                <div className="absolute -bottom-3 left-8 w-4 h-4 bg-[#F9C93A] border-b-4 border-r-4 border-[#262626] transform rotate-45" />
              </div>
            </div>

            <h1 className="comic-title text-[#F9C93A] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
              MAKE<br />
              <span className="text-white">HOLDING</span><br />
              GREAT AGAIN
            </h1>

            <p className="marker-text text-white text-xl sm:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Diamond hands only. Paper hands need not apply. 
              We're not here to flip — we're here to <span className="text-[#F9C93A] font-bold">HODL</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={siteConfig.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cartoon-btn bg-[#F9C93A] text-[#262626] px-8 py-4 text-2xl inline-flex items-center justify-center gap-2"
              >
                <span>BUY $MHGA</span>
              </a>
            </div>

            {/* Join X Community */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="https://x.com/i/communities/2001047013874393090"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-border-gold bg-[#262626] px-8 py-4 inline-flex items-center gap-4 hover:bg-[#353535] transition-colors"
              >
                <svg className="w-8 h-8 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="comic-title text-[#F9C93A] text-xl sm:text-2xl">JOIN X COMMUNITY</span>
              </a>
            </div>

            {/* Contract Address */}
            <div className="mt-6 sketch-border-gold bg-[#262626] px-6 py-4 max-w-xl mx-auto lg:mx-0">
              <p className="comic-title text-[#F9C93A] text-lg mb-2 text-center lg:text-left">Contract Address</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-[#353535] px-4 py-3 rounded-lg border-2 border-[#F9C93A]/50">
                  <code className="text-white text-base sm:text-lg break-all block text-center lg:text-left">
                    {siteConfig.contractAddress}
                  </code>
                </div>
                <button
                  onClick={handleCopyCA}
                  className="cartoon-btn bg-[#F9C93A] text-[#262626] p-3 flex-shrink-0"
                >
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                </button>
              </div>
              {copied && (
                <p className="marker-text text-[#43E7D3] mt-2 text-sm text-center lg:text-left">
                  Copied to clipboard!
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Holders', value: '???', sub: 'and counting' },
                { label: 'Diamond', value: '100%', sub: 'hands only' },
                { label: 'Rugs', value: '0', sub: 'forever' }
              ].map((stat, i) => (
                <div key={i} className="sketch-card p-4 text-center" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="comic-title-light text-[#D2A31E] text-2xl sm:text-3xl">{stat.value}</div>
                  <div className="marker-text text-[#262626] text-sm">{stat.label}</div>
                  <div className="text-[#353535] text-xs font-medium">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image with Frame */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-radial from-[#F9C93A]/30 to-transparent rounded-full blur-3xl" />
            
            {/* Main character image with decorative frame */}
            <div className="relative animate-float">
              {/* Outer gold frame */}
              <div className="relative p-3 sm:p-4 bg-gradient-to-br from-[#F9C93A] via-[#D2A31E] to-[#F9C93A] rounded-lg shadow-[8px_8px_0_#262626] border-4 border-[#262626]">
                {/* Inner dark frame border */}
                <div className="p-2 bg-[#262626] rounded-md">
                  {/* Image container with cream mat */}
                  <div className="p-2 sm:p-3 bg-[#E1D3C1] rounded-sm">
                    <img
                      src={siteConfig.heroImage}
                      alt="MHGA Duck"
                      className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-sm"
                    />
                  </div>
                </div>
                
                {/* Frame corner decorations */}
                <div className="absolute top-1 left-1 w-6 h-6 border-t-4 border-l-4 border-[#262626] rounded-tl-lg" />
                <div className="absolute top-1 right-1 w-6 h-6 border-t-4 border-r-4 border-[#262626] rounded-tr-lg" />
                <div className="absolute bottom-1 left-1 w-6 h-6 border-b-4 border-l-4 border-[#262626] rounded-bl-lg" />
                <div className="absolute bottom-1 right-1 w-6 h-6 border-b-4 border-r-4 border-[#262626] rounded-br-lg" />
              </div>
              
              {/* Comic-style action lines */}
              <svg className="absolute -top-10 -left-10 w-24 h-24" viewBox="0 0 100 100">
                <line x1="50" y1="10" x2="50" y2="40" stroke="#F9C93A" strokeWidth="4" strokeLinecap="round" />
                <line x1="20" y1="30" x2="40" y2="45" stroke="#F9C93A" strokeWidth="4" strokeLinecap="round" />
                <line x1="80" y1="30" x2="60" y2="45" stroke="#F9C93A" strokeWidth="4" strokeLinecap="round" />
              </svg>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 animate-wobble">
                <div className="bg-[#FF7373] px-4 py-2 rounded-full border-4 border-[#262626] shadow-[3px_3px_0_#262626] transform rotate-12">
                  <span className="comic-title text-white text-lg">HODL!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="marker-text text-white text-sm">Scroll Down</span>
          <ArrowDown className="w-6 h-6 text-[#F9C93A]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
