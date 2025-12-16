import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceOverview } from './components/ServiceOverview';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { MapPreview } from './components/MapPreview';
import { UserExperience } from './components/UserExperience';
import { SafetySection } from './components/SafetySection';
import { Footer } from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a] text-white overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <ServiceOverview />
        <HowItWorks />
        <Features />
        <MapPreview />
        <UserExperience />
        <SafetySection />
      </main>
      <Footer />
    </div>
  );
}
