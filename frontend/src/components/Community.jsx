import React from 'react';
import { siteConfig } from '../data/mock';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Community = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (siteConfig.contractAddress !== 'Coming Soon') {
      navigator.clipboard.writeText(siteConfig.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="community" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl mb-4">
            CREATOR <span className="text-white">REWARDS</span>
          </h2>
          <p className="marker-text text-white text-xl">
            3-Phase Evolution
          </p>
        </div>

        {/* Creator Rewards Image */}
        <div className="flex justify-center mb-12">
          <div className="sketch-border-gold bg-[#262626] p-4 max-w-4xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_quackcoin/artifacts/rwdu9gji_image.png"
              alt="$MHGA Creator Rewards 3-Phase Evolution"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Contract Address Card */}
        <div className="sketch-border-gold bg-[#262626] p-8 mb-12 text-center max-w-3xl mx-auto">
          <h3 className="comic-title text-[#F9C93A] text-2xl mb-4">Contract Address</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-[#353535] px-6 py-4 rounded-lg border-2 border-[#F9C93A]/50 flex-1 max-w-2xl w-full">
              <code className="text-[#E1D3C1] text-lg sm:text-xl break-all">
                {siteConfig.contractAddress}
              </code>
            </div>
            {siteConfig.contractAddress !== 'Coming Soon' && (
              <button
                onClick={handleCopy}
                className="cartoon-btn bg-[#F9C93A] text-[#262626] px-6 py-4 flex items-center gap-2"
              >
                {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            )}
          </div>
          {siteConfig.contractAddress === 'Coming Soon' && (
            <p className="marker-text text-[#F9C93A] mt-4 text-lg animate-pulse">
              Launching Soon! Stay Tuned!
            </p>
          )}
        </div>

        {/* Buy CTA */}
        <div className="text-center">
          <div className="inline-block">
            <div className="sketch-border bg-[#F9C93A] p-8 transform hover:-rotate-1 transition-transform">
              <h3 className="comic-title-light text-[#262626] text-3xl sm:text-4xl mb-4">
                READY TO HODL?
              </h3>
              <p className="text-[#262626] mb-6 text-lg font-medium">
                Join thousands of diamond hands making holding great again.
              </p>
              <a
                href={siteConfig.buyLink}
                className="cartoon-btn bg-[#262626] text-[#F9C93A] px-10 py-4 text-2xl inline-flex items-center gap-3"
              >
                <span>BUY $MHGA NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
