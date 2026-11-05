import { sound } from '../../utils/soundEngine';
import { PROFILE } from '../../data/portfolioData';
import { ArrowUp, Terminal, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    sound.playClick();
    onNavigate('overview');
  };

  return (
    <footer className="nexus-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">SYED SALMAN REZA</span>
            <span className="footer-tagline">Systems Architect &amp; Founder @ CodeStorm Hub</span>
          </div>

          <button 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            title="Return to Core Overview"
          >
            <span>RETURN TO KERNEL</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <span className="col-label">SYSTEM TELEMETRY</span>
            <div className="col-val">LOCATION: {PROFILE.location}</div>
            <div className="col-val">COORDINATES: {PROFILE.coordinates}</div>
            <div className="col-val">NETWORK: CODESTORM-CORE-MESH</div>
          </div>

          <div className="footer-col">
            <span className="col-label">INDEX STATUS</span>
            <div className="col-val">110 REPOSITORIES AUDITED</div>
            <div className="col-val">95 SOURCE SYSTEMS VERIFIED</div>
            <div className="col-val">15 CONTRIBUTED FORKS TRACKED</div>
          </div>

          <div className="footer-col">
            <span className="col-label">OFFICIAL LINKS</span>
            <div className="footer-links">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              <a href={PROFILE.codestorm} target="_blank" rel="noopener noreferrer">CodeStorm Hub Org</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Connect</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} Syed Salman Reza. All architectural blueprints &amp; systems open for collaboration.
          </div>
          <div className="footer-stack-note">
            <span>BUILT WITH REACT 19 + THREE.JS + GSAP + LENIS + WEB AUDIO API</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
