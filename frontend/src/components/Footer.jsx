import React from 'react';
import { siteConfig } from '../data/mock';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[#262626] border-t-4 border-[#F9C93A]">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src={siteConfig.logo}
                alt="$MHGA"
                className="w-16 h-16 animate-wobble"
              />
              <span className="comic-title text-[#F9C93A] text-3xl">$MHGA</span>
            </div>
            <p className="marker-text text-white text-lg">
              Make Holding Great Again
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: '#about', label: 'About' },
              { href: '#manifesto', label: 'Manifesto' },
              { href: '#memes', label: 'Memes' },
              { href: '#community', label: 'Community' }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="marker-text text-white hover:text-[#F9C93A] transition-colors text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
            >
              <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
            >
              <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
            >
              <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#F9C93A]/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/70 text-sm">
            © 2025 $MHGA. This is not financial advice. DYOR.
          </p>
          <p className="flex items-center gap-2 text-white/70 text-sm">
            Made with <Heart className="w-4 h-4 text-[#FF7373] animate-pulse" /> by diamond hands
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-xs max-w-2xl mx-auto leading-relaxed">
            $MHGA is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
