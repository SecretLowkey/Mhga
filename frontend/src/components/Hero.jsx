import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/mock';
import { ArrowDown, Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [liveData, setLiveData] = useState({
    marketCap: null,
    priceChange24h: null,
    volume24h: null,
    loading: true
  });

  // Fetch live data from DexScreener every 5 seconds
  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/D6okWxJpbBvtyZA1vedAWGvpE9yUZpUQYYFXsXVyUwkE');
        const data = await response.json();
        if (data.pair) {
          setLiveData({
            marketCap: data.pair.marketCap,
            priceChange24h: data.pair.priceChange?.h24,
            volume24h: data.pair.volume?.h24,
            loading: false
          });
        }
      } catch (error) {
        console.error('Error fetching live data:', error);
        setLiveData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLiveData();
    const interval = setInterval(fetchLiveData, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '---';
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
    return `$${num.toFixed(0)}`;
  };

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
            <h1 className="comic-title text-[#F9C93A] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
              MAKE<br />
              <span className="text-white">HOLDING</span><br />
              GREAT AGAIN
            </h1>

            <p className="marker-text text-white text-2xl sm:text-3xl mb-8">
              JUST HODL
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

            {/* Social Icons Row - matching Footer style */}
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <a
                href="https://x.com/i/communities/2001047013874393090"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
                title="X Community"
              >
                <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@mhga_sol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
                title="TikTok"
              >
                <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://t.me/mhgaportal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
                title="Telegram"
              >
                <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://linktr.ee/mhgaonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#353535] rounded-full border-2 border-[#F9C93A] flex items-center justify-center hover:bg-[#F9C93A] group transition-colors"
                title="Linktree"
              >
                <svg className="w-6 h-6 text-[#F9C93A] group-hover:text-[#262626] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.93 1.055.93h1.95v5.093c0 .93.769 1.698 1.698 1.698h.65c.93 0 1.698-.769 1.698-1.698v-5.093h1.95c.528 0 .975-.413 1.055-.93 0-.162 0-.323-.08-.486l-4.063-7.803c-.244-.405-.65-.567-1.055-.567s-.812.162-1.055.567l-4.063 7.803zm3.793-12.768h.65c.93 0 1.698.769 1.698 1.698v2.14h-4.046v-2.14c0-.93.769-1.698 1.698-1.698z"/>
                </svg>
              </a>
            </div>

            {/* CoinSniper Vote Banner */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="https://coinsniper.net/coin/88852"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white px-6 py-3 rounded-xl border-2 border-red-500 hover:bg-red-50 transition-all shadow-lg hover:shadow-red-500/30 hover:scale-105"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_quackcoin/artifacts/b3c8x1uw_image.png"
                  alt="CoinSniper"
                  className="h-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-red-600 font-bold text-sm">VOTE FOR $MHGA</span>
                  <span className="text-red-400 text-xs">Help us moon!</span>
                </div>
                <svg className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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

            {/* Live Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { 
                  label: 'Market Cap', 
                  value: liveData.loading ? '...' : formatNumber(liveData.marketCap), 
                  sub: 'LIVE' 
                },
                { 
                  label: '24h Change', 
                  value: liveData.loading ? '...' : (liveData.priceChange24h !== null ? `${liveData.priceChange24h > 0 ? '+' : ''}${liveData.priceChange24h?.toFixed(2)}%` : '---'), 
                  sub: liveData.priceChange24h > 0 ? 'PUMPING' : liveData.priceChange24h < 0 ? 'DIP BUY' : 'LIVE',
                  isPositive: liveData.priceChange24h > 0
                },
                { 
                  label: '24h Volume', 
                  value: liveData.loading ? '...' : formatNumber(liveData.volume24h), 
                  sub: 'LIVE' 
                }
              ].map((stat, i) => (
                <div key={i} className="sketch-card p-4 text-center relative overflow-hidden" style={{ animationDelay: `${i * 0.2}s` }}>
                  {/* Live indicator pulse */}
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <div className={`comic-title-light text-2xl sm:text-3xl ${stat.isPositive !== undefined ? (stat.isPositive ? 'text-green-500' : 'text-red-500') : 'text-[#D2A31E]'}`}>
                    {stat.value}
                  </div>
                  <div className="marker-text text-[#262626] text-sm">{stat.label}</div>
                  <div className={`text-xs font-bold ${stat.isPositive !== undefined ? (stat.isPositive ? 'text-green-600' : 'text-red-600') : 'text-[#353535]'}`}>
                    {stat.sub}
                  </div>
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
