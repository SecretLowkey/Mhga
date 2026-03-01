import React, { useState } from 'react';
import { siteConfig } from '../data/mock';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = ({ onOpenMemeGenerator }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#manifesto', label: 'Manifesto' },
    { href: '#memes', label: 'Memes' },
    { href: '#community', label: 'Community' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="max-w-7xl mx-auto">
        <div className="sketch-border bg-[#262626]/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={siteConfig.logo} 
              alt="$MHGA Logo" 
              className="w-12 h-12 animate-wobble group-hover:animate-glow transition-all"
            />
            <span className="comic-title text-[#F9C93A] text-2xl hidden sm:block">
              $MHGA
            </span>
          </a>

          {/* Listing Badges */}
          <div className="hidden lg:flex items-center gap-2">
            {/* CoinGecko Badge */}
            <a 
              href="https://www.coingecko.com/en/coins/make-holding-great-again" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-black px-4 py-2 rounded-lg border-2 border-[#8DC63F] hover:border-[#F9C93A] transition-colors"
              title="View on CoinGecko"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_quackcoin/artifacts/2uzbe55k_image.png"
                alt="CoinGecko"
                className="h-9 object-contain"
              />
            </a>
            {/* CoinMarketCap Badge - Placeholder for future */}
            {/* <a 
              href="COINMARKETCAP_URL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-[#0D1421] px-4 py-2 rounded-lg border-2 border-[#3861FB] hover:border-[#F9C93A] transition-colors"
              title="View on CoinMarketCap"
            >
              <img 
                src="COINMARKETCAP_LOGO"
                alt="CoinMarketCap"
                className="h-9 object-contain"
              />
            </a> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="marker-text text-[#E1D3C1] text-lg hover:text-[#F9C93A] transition-colors animate-pop"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenMemeGenerator}
              className="marker-text text-[#E1D3C1] text-lg hover:text-[#F9C93A] transition-colors animate-pop flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4" />
              Meme Gen
            </button>
          </div>

          {/* Social Links & Buy Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://x.com/i/communities/2001047013874393090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#353535] rounded-lg border-2 border-[#F9C93A] hover:bg-[#F9C93A]/20 transition-colors"
              title="X Community"
            >
              <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@mhga_sol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#353535] rounded-lg border-2 border-[#F9C93A] hover:bg-[#F9C93A]/20 transition-colors"
              title="TikTok"
            >
              <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#353535] rounded-lg border-2 border-[#F9C93A] hover:bg-[#F9C93A]/20 transition-colors"
              title="Telegram"
            >
              <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://linktr.ee/mhgaonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#353535] rounded-lg border-2 border-[#F9C93A] hover:bg-[#F9C93A]/20 transition-colors"
              title="Linktree"
            >
              <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.93 1.055.93h1.95v5.093c0 .93.769 1.698 1.698 1.698h.65c.93 0 1.698-.769 1.698-1.698v-5.093h1.95c.528 0 .975-.413 1.055-.93 0-.162 0-.323-.08-.486l-4.063-7.803c-.244-.405-.65-.567-1.055-.567s-.812.162-1.055.567l-4.063 7.803zm3.793-12.768h.65c.93 0 1.698.769 1.698 1.698v2.14h-4.046v-2.14c0-.93.769-1.698 1.698-1.698z"/>
              </svg>
            </a>
            <a
              href={siteConfig.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cartoon-btn bg-[#F9C93A] text-[#262626] px-6 py-2 text-lg"
            >
              BUY $MHGA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#F9C93A]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 sketch-border bg-[#262626]/95 backdrop-blur-sm p-4 animate-bounce-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="marker-text text-[#E1D3C1] text-xl hover:text-[#F9C93A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenMemeGenerator();
                }}
                className="marker-text text-[#E1D3C1] text-xl hover:text-[#F9C93A] transition-colors flex items-center gap-2 text-left"
              >
                <Sparkles className="w-5 h-5" />
                Meme Generator
              </button>
              <hr className="border-[#F9C93A]/30" />
              <div className="flex justify-center gap-3">
                <a
                  href="https://x.com/i/communities/2001047013874393090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#353535] rounded-lg border-2 border-[#F9C93A]"
                >
                  <svg className="w-6 h-6 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@mhga_sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#353535] rounded-lg border-2 border-[#F9C93A]"
                >
                  <svg className="w-6 h-6 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#353535] rounded-lg border-2 border-[#F9C93A]"
                >
                  <svg className="w-6 h-6 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/mhgaonsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#353535] rounded-lg border-2 border-[#F9C93A]"
                >
                  <svg className="w-6 h-6 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.93 1.055.93h1.95v5.093c0 .93.769 1.698 1.698 1.698h.65c.93 0 1.698-.769 1.698-1.698v-5.093h1.95c.528 0 .975-.413 1.055-.93 0-.162 0-.323-.08-.486l-4.063-7.803c-.244-.405-.65-.567-1.055-.567s-.812.162-1.055.567l-4.063 7.803zm3.793-12.768h.65c.93 0 1.698.769 1.698 1.698v2.14h-4.046v-2.14c0-.93.769-1.698 1.698-1.698z"/>
                  </svg>
                </a>
              </div>
              <a
                href={siteConfig.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cartoon-btn bg-[#F9C93A] text-[#262626] px-6 py-3 text-xl text-center"
              >
                BUY $MHGA
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
