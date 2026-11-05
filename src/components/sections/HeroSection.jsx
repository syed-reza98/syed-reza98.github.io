import { sound } from '../../utils/soundEngine';
import { PROFILE, METRICS, CORE_PILLARS } from '../../data/portfolioData';
import { ArrowUpRight, Cpu, Server, Terminal, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';

const ICON_MAP = {
  Server: Server,
  Cpu: Cpu,
  Terminal: Terminal,
  Smartphone: Smartphone
};

export default function HeroSection({ onNavigate }) {
  return (
    <section id="overview" className="nexus-section hero-section">
      <div className="section-container">
        {/* Top Coordinate Badge */}
        <div className="hero-telemetry-badge">
          <span className="badge-marker"></span>
          <span className="badge-text">{PROFILE.coordinates} — DHAKA // ARCHITECTURAL KERNEL V2.6</span>
          <span className="badge-status">SYS_STATUS: ACTIVE</span>
        </div>

        {/* Main Headline */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            <span className="title-row">
              <span className="name-gradient">SYED SALMAN</span>
            </span>
            <span className="title-row">
              <span className="outline-text">REZA</span>
            </span>
          </h1>
          <p className="hero-role">
            <span className="role-chip">SYSTEMS ARCHITECT</span>
            <span className="role-sep">//</span>
            <span className="role-chip">FOUNDER @ CODESTORM HUB</span>
            <span className="role-sep">//</span>
            <span className="role-chip">FULLSTACK ENGINEER</span>
          </p>
        </div>

        <p className="hero-bio">
          Engineering high-concurrency <strong>Multi-Tenant SaaS</strong> backends, official{' '}
          <strong>Model Context Protocol (MCP)</strong> servers, banking transaction switches{' '}
          (<strong>ISO-8583</strong> / ATM NDC), and cross-platform <strong>Flutter</strong> engines. 
          Leading an ecosystem of 110+ systems across enterprise and open-source computing.
        </p>

        {/* CTA Matrix */}
        <div className="hero-cta-matrix">
          <button
            className="btn-primary"
            onClick={() => {
              sound.playClick();
              onNavigate('constellation');
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <span>Explore 110 Audited Systems</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            className="btn-secondary"
            onClick={() => {
              sound.playClick();
              onNavigate('protocols');
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <Terminal size={15} />
            <span>Inspect ISO-8583 Protocol</span>
          </button>

          <button
            className="btn-ghost"
            onClick={() => {
              sound.playClick();
              onNavigate('dispatch');
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <ShieldCheck size={15} />
            <span>Encrypted Dispatch</span>
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="hero-metrics-grid">
          {METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="metric-card"
              onMouseEnter={() => sound.playHover()}
            >
              <div className="metric-value">
                <span className="num">{metric.value}</span>
                <span className="suffix">{metric.suffix}</span>
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Architectural Pillars */}
        <div className="hero-pillars-wrap">
          <div className="pillars-header">
            <span className="sub-title">ARCHITECTURAL DOMAINS</span>
            <h2 className="section-title">Core Engineering Foundations</h2>
          </div>

          <div className="pillars-grid">
            {CORE_PILLARS.map((pillar) => {
              const IconComp = ICON_MAP[pillar.icon] || Server;
              return (
                <div
                  key={pillar.id}
                  className="pillar-card"
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <IconComp size={20} />
                    </div>
                    <span className="pillar-id">0{pillar.id}</span>
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <h4 className="pillar-subtitle">{pillar.subtitle}</h4>
                  <p className="pillar-desc">{pillar.desc || pillar.description}</p>
                  
                  <div className="pillar-signature">
                    <span className="sig-label">Signature Systems:</span>
                    <span className="sig-value">{pillar.signature}</span>
                  </div>

                  <div className="pillar-tags">
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="pillar-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
