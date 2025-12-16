import React from 'react';
import { siteConfig } from '../data/mock';
import { Copy, Check, ExternalLink } from 'lucide-react';
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

  const socials = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      link: siteConfig.socials.twitter,
      color: 'bg-[#353535] hover:bg-[#1DA1F2]',
      description: 'Follow for memes & updates'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      link: siteConfig.socials.telegram,
      color: 'bg-[#353535] hover:bg-[#0088cc]',
      description: 'Join the conversation'
    },
    {
      name: 'Discord',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      ),
      link: siteConfig.socials.discord,
      color: 'bg-[#353535] hover:bg-[#5865F2]',
      description: 'Hang with diamond hands'
    }
  ];

  return (
    <section id="community" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[#262626]/30" />
      
      {/* Animated coins */}
      <div className="absolute top-10 left-1/4 animate-float opacity-30" style={{ animationDelay: '0s' }}>
        <img src={siteConfig.logo} alt="" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <img src={siteConfig.logo} alt="" className="w-12 h-12" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="comic-title text-[#E1D3C1] text-4xl sm:text-5xl lg:text-6xl mb-4">
            JOIN THE <span className="text-[#F9C93A]">MOVEMENT</span>
          </h2>
          <p className="marker-text text-[#E1D3C1]/80 text-xl">
            Connect with fellow diamond hands
          </p>
        </div>

        {/* Contract Address Card */}
        <div className="sketch-border-gold bg-[#262626] p-8 mb-12 text-center">
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
              🚀 Launching Soon! Stay Tuned!
            </p>
          )}
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`sketch-card p-6 text-center group hover:-translate-y-2 transition-all duration-300 ${social.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E1D3C1] flex items-center justify-center text-[#262626] group-hover:animate-wobble">
                {social.icon}
              </div>
              <h3 className="comic-title text-[#E1D3C1] text-xl mb-2">{social.name}</h3>
              <p className="text-[#E1D3C1]/70 text-sm">{social.description}</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-[#F9C93A]">
                <span className="marker-text">Join Now</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Buy CTA */}
        <div className="text-center">
          <div className="inline-block">
            <div className="sketch-border bg-[#F9C93A] p-8 transform hover:-rotate-1 transition-transform">
              <h3 className="comic-title text-[#262626] text-3xl sm:text-4xl mb-4">
                READY TO HODL?
              </h3>
              <p className="text-[#262626]/80 mb-6 text-lg">
                Join thousands of diamond hands making holding great again.
              </p>
              <a
                href={siteConfig.buyLink}
                className="cartoon-btn bg-[#262626] text-[#F9C93A] px-10 py-4 text-2xl inline-flex items-center gap-3"
              >
                <span>BUY $MHGA NOW</span>
                <span className="animate-bounce">🚀</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
