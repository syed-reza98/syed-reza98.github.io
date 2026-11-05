import { useState, useEffect } from 'react';
import { sound } from '../../utils/soundEngine';
import { Volume2, VolumeX, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export default function Navbar({ activeSection, onNavigate }) {
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Dhaka' }) + ' BST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) sound.playClick();
  };

  const navItems = [
    { id: 'overview', label: '01 // Core' },
    { id: 'protocols', label: '02 // Protocols' },
    { id: 'constellation', label: '03 // 110 Systems' },
    { id: 'agentic', label: '04 // Agentic MCP' },
    { id: 'dossier', label: '05 // Dossier' },
    { id: 'dispatch', label: '06 // Dispatch' }
  ];

  return (
    <header className="nexus-nav" role="banner">
      <div className="nav-container">
        {/* Brand / Callout */}
        <div className="nav-brand" onClick={() => onNavigate('overview')}>
          <div className="pulse-indicator" aria-hidden="true">
            <span className="pulse-dot"></span>
            <span className="pulse-ring"></span>
          </div>
          <div className="brand-text">
            <span className="brand-name">SYED SALMAN REZA</span>
            <span className="brand-spec">ARCHITECT // CODESTORM</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                sound.playTab();
                onNavigate(item.id);
              }}
              onMouseEnter={() => sound.playHover()}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Telemetry Actions */}
        <div className="nav-actions">
          <div className="nav-telemetry" title="Dhaka Local Time">
            <Terminal size={13} className="telemetry-icon" />
            <span className="telemetry-time">{time || '04:00:00 BST'}</span>
          </div>

          <button
            className="sound-toggle-btn"
            onClick={toggleSound}
            title={isMuted ? 'Unmute Audio Synthesizer' : 'Mute Audio Synthesizer'}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          <a
            href="https://github.com/syed-reza98"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-link"
            title="GitHub Profile"
            onMouseEnter={() => sound.playHover()}
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
