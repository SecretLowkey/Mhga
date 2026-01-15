import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
        <div className="flex justify-center">
          <div className="sketch-border-gold bg-[#262626] p-4 max-w-4xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_quackcoin/artifacts/rwdu9gji_image.png"
              alt="$MHGA Creator Rewards 3-Phase Evolution"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
