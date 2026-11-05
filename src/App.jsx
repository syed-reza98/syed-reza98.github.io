import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import NexusCore from './components/canvas/NexusCore';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProtocolSection from './components/sections/ProtocolSection';
import ConstellationSection from './components/sections/ConstellationSection';
import AgenticForgeSection from './components/sections/AgenticForgeSection';
import DossierSection from './components/sections/DossierSection';
import DispatchSection from './components/sections/DispatchSection';
import Footer from './components/sections/Footer';

import './styles/nexus.scss';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const lenisRef = useRef(null);
  const mousePos = useRef([0, 0]);

  // 1. Initialize Lenis Smooth Scrolling (Awwwards 2026 standard)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Track mouse position for 3D canvas interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = [x, y];
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Scroll navigation
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, { offset: -64, duration: 1.4 });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nexus-app">
      {/* 3D WebGL Background Canvas */}
      <NexusCore mousePos={mousePos} />

      {/* High-Tech HUD Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Experience Stream */}
      <main id="main-content">
        <HeroSection onNavigate={handleNavigate} />
        <ProtocolSection />
        <ConstellationSection />
        <AgenticForgeSection />
        <DossierSection />
        <DispatchSection />
      </main>

      {/* Architectural Schematic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
