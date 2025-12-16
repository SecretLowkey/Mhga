import React from 'react';
import { features } from '../data/mock';
import { Diamond, Users, Zap, Rocket } from 'lucide-react';

const iconMap = {
  diamond: Diamond,
  users: Users,
  zap: Zap,
  rocket: Rocket
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#262626] px-6 py-2 rounded-full border-4 border-[#F9C93A] marker-text text-[#F9C93A] text-lg">
              What is $MHGA?
            </span>
          </div>
          <h2 className="comic-title text-[#F9C93A] text-4xl sm:text-5xl lg:text-6xl mb-6">
            THE <span className="text-white">MOVEMENT</span>
          </h2>
          <p className="marker-text text-white text-xl max-w-2xl mx-auto">
            $MHGA isn't just another memecoin. It's a battle cry for everyone who believes 
            that patience beats panic and conviction beats chaos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="sketch-card p-6 group hover:transform hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#F9C93A] rounded-full border-4 border-[#262626] flex items-center justify-center mb-4 group-hover:animate-wobble">
                  <Icon className="w-8 h-8 text-[#262626]" />
                </div>

                {/* Content */}
                <h3 className="comic-title-light text-[#262626] text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#353535] leading-relaxed font-medium">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4 L20 4 L20 20" stroke="#F9C93A" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
