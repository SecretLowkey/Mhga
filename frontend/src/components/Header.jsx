import React, { useState } from 'react';
import { siteConfig } from '../data/mock';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
          </div>

          {/* Join X & Buy Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://x.com/i/communities/2001047013874393090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#353535] px-4 py-2 rounded-lg border-2 border-[#F9C93A] hover:bg-[#F9C93A]/20 transition-colors"
            >
              <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="marker-text text-[#F9C93A] text-sm">JOIN X</span>
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
              <hr className="border-[#F9C93A]/30" />
              <a
                href="https://x.com/i/communities/2001047013874393090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#353535] px-4 py-3 rounded-lg border-2 border-[#F9C93A]"
              >
                <svg className="w-5 h-5 text-[#F9C93A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="marker-text text-[#F9C93A]">JOIN X COMMUNITY</span>
              </a>
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
