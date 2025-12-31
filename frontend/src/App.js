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

function App() {
  const [showIntro, setShowIntro] = useState(true);

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

  if (showIntro) {
    return <IntroPage onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
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
