import React, { useState } from 'react';

const WalletCard = ({ title, subtitle, address, network, type, link, icon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (addr) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden border border-[#F9C93A]/30 hover:border-[#F9C93A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,201,58,0.3)]">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9C93A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Header with Solscan branding */}
        <div className="bg-gradient-to-r from-[#9945FF] to-[#14F195] p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#9945FF"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wider">SOLSCAN</p>
              <p className="text-white/70 text-xs">Click to view live wallet</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 relative z-10">
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="comic-title text-[#F9C93A] text-xl">{title}</h3>
              <p className="text-white/60 text-sm">{subtitle}</p>
            </div>
          </div>
          
          {/* Wallet Address */}
          <div className="bg-black/30 rounded-xl p-3 mb-4">
            <p className="text-white/50 text-xs mb-1 uppercase tracking-wider">Wallet Address</p>
            <div className="flex items-center justify-between gap-2">
              <code className="text-[#14F195] text-sm font-mono break-all">
                {truncateAddress(address)}
              </code>
              <button 
                onClick={handleCopy}
                className="bg-[#F9C93A]/20 hover:bg-[#F9C93A]/30 text-[#F9C93A] px-3 py-1 rounded-lg text-xs font-bold transition-colors flex-shrink-0"
              >
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider">Network</p>
              <p className="text-white font-bold text-sm">{network}</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider">Type</p>
              <p className="text-[#F9C93A] font-bold text-sm">{type}</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider">Status</p>
              <div className="flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-[#14F195] rounded-full animate-pulse" />
                <p className="text-[#14F195] font-bold text-sm">LIVE</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center justify-center gap-2 text-[#F9C93A] group-hover:text-white transition-colors">
            <span className="text-sm font-bold uppercase tracking-wider">View Live Wallet on Solscan</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F9C93A]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9C93A]/20 to-transparent" />
      </div>
    </a>
  );
};

const Wallets = () => {
  const wallets = [
    {
      title: "OCEAN CLEANUP",
      subtitle: "Environmental Impact Fund",
      address: "FmSoApkLiTG4dEN28KJNBjhnaPd48Cnf9BVSTsVB2NeP",
      network: "SOLANA",
      type: "CHARITY",
      link: "https://solscan.io/account/FmSoApkLiTG4dEN28KJNBjhnaPd48Cnf9BVSTsVB2NeP",
      icon: "🌊"
    },
    {
      title: "DEV WALLET",
      subtitle: "Buybacks, Burns & Holder Rewards",
      address: "EcSkPD1TUqPYcRpY93iAzvvPbxdpGWhMNiArmP6tWxQb",
      network: "SOLANA",
      type: "DEV",
      link: "https://solscan.io/account/EcSkPD1TUqPYcRpY93iAzvvPbxdpGWhMNiArmP6tWxQb#portfolio",
      icon: "🔥"
    }
  ];

  return (
    <section id="wallets" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F9C93A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#14F195]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl mb-4">
            TRANSPARENT <span className="text-white">WALLETS</span>
          </h2>
          <p className="marker-text text-white text-xl max-w-2xl mx-auto">
            Full transparency - track every transaction in real-time on Solscan
          </p>
        </div>

        {/* Wallet Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {wallets.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-white/60 text-sm">
            Click the cards above to view live wallet balances and transactions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wallets;
