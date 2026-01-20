import React, { useEffect, useState } from "react";
import "./App.css";
import IntroPage from "./components/IntroPage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Manifesto from "./components/Manifesto";
import Winners from "./components/Winners";
import MemeGallery from "./components/MemeGallery";
import Community from "./components/Community";
import Footer from "./components/Footer";
import MemeGenerator from "./components/MemeGenerator";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMemeGenerator, setShowMemeGenerator] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const openMemeGenerator = () => {
    setShowMemeGenerator(true);
  };

  const closeMemeGenerator = () => {
    setShowMemeGenerator(false);
  };

  if (showIntro) {
    return <IntroPage onComplete={handleIntroComplete} />;
  }

  if (showMemeGenerator) {
    return <MemeGenerator onBack={closeMemeGenerator} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onOpenMemeGenerator={openMemeGenerator} />
      <main>
        <Hero onOpenMemeGenerator={openMemeGenerator} />
        <About />
        <Manifesto />
        <Winners />
        <MemeGallery />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
