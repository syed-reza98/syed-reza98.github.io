import { sound } from '../../utils/soundEngine';
import { PROFILE } from '../../data/portfolioData';
import { Terminal, Shield, Award, GitBranch, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function DossierSection() {
  const milestones = [
    {
      year: '2025 – Present',
      title: 'Founder & Lead Architect',
      org: 'CodeStorm Hub',
      desc: 'Founded CodeStorm Hub — an open-source engineering community and research lab. Built and released 52+ projects including StormCom multi-tenant SaaS, maplibre_mcp server, and AI developer tools.'
    },
    {
      year: '2023 – Present',
      title: 'Full-Stack & Systems Engineer',
      org: '@NetworldTechnology',
      desc: 'Specializing in banking reconciliation engines, ATM NDC electronic-journal extraction, financial transaction switching (ISO-8583), and high-availability enterprise services.'
    },
    {
      year: '2020 – 2024',
      title: 'Systems & Embedded Engineering Roots',
      org: 'Dhaka, Bangladesh',
      desc: 'Engineered embedded POS hardware firmware in C (SR600Mini), financial protocol decoders, and mobile applications with Flutter / Dart and machine learning pipelines.'
    }
  ];

  const philosophies = [
    {
      title: 'Deterministic Over Heuristic',
      desc: 'When money, medical data, or enterprise inventory is on the line, systems must be deterministic. Strict data isolation and idempotency are mandatory.'
    },
    {
      title: 'Protocols Over Frameworks',
      desc: 'Frameworks come and go, but protocols endure. Deep mastery of ISO-8583, Model Context Protocol (MCP), and REST/RPC architectures guarantees longevity.'
    },
    {
      title: 'Open Source As Collective Leverage',
      desc: 'Building CodeStorm Hub is about empowering developers globally through well-documented, reproducible, and production-tested open-source code.'
    }
  ];

  return (
    <section id="dossier" className="nexus-section dossier-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-meta">
            <span className="sub-title">ARCHITECT PROFILE</span>
            <span className="telemetry-badge">DOSSIER // SYED SALMAN REZA</span>
          </div>
          <h2 className="section-title">The Architect's Dossier</h2>
          <p className="section-desc">
            A look into the background, philosophy, and mission behind CodeStorm Hub and high-resilience engineering.
          </p>
        </div>

        {/* Dossier Grid Layout */}
        <div className="dossier-grid">
          {/* Left Column: Biography & Milestones */}
          <div className="dossier-left">
            <div className="bio-card">
              <div className="bio-header">
                <div className="bio-avatar-box">
                  <span className="avatar-initials">SR</span>
                </div>
                <div className="bio-title-wrap">
                  <h3 className="bio-name">{PROFILE.name}</h3>
                  <span className="bio-title">{PROFILE.title}</span>
                  <div className="bio-location">
                    <MapPin size={13} />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              <p className="bio-body">
                I am a systems architect and full-stack software engineer based in Dhaka, Bangladesh. 
                My engineering background spans low-level C firmware and banking interchange protocols 
                all the way to modern multi-tenant cloud SaaS and autonomous AI agent tooling.
              </p>
              <p className="bio-body">
                As the founder of <strong>CodeStorm Hub</strong>, I build software that prioritizes 
                clean architectural separation, deterministic state management, and real-world utility.
              </p>
            </div>

            {/* Career Timeline */}
            <div className="timeline-box">
              <span className="timeline-heading">
                <GitBranch size={15} /> CHRONOLOGICAL TIMELINE
              </span>

              <div className="timeline-items">
                {milestones.map((m, idx) => (
                  <div key={idx} className="timeline-item" onMouseEnter={() => sound.playHover()}>
                    <div className="t-marker"></div>
                    <div className="t-content">
                      <span className="t-year">{m.year}</span>
                      <h4 className="t-title">{m.title}</h4>
                      <span className="t-org">{m.org}</span>
                      <p className="t-desc">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Philosophies & Competencies */}
          <div className="dossier-right">
            <div className="philosophies-box">
              <span className="box-label">ENGINEERING PHILOSOPHY</span>
              <div className="philosophy-cards">
                {philosophies.map((p, idx) => (
                  <div key={idx} className="p-card" onMouseEnter={() => sound.playHover()}>
                    <div className="p-num">0{idx + 1}</div>
                    <h4 className="p-title">{p.title}</h4>
                    <p className="p-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="competencies-card">
              <span className="comp-label">TECHNICAL COMPETENCY MATRIX</span>
              <div className="comp-grid">
                {[
                  'Multi-Tenant SaaS (Laravel 12 / PostgreSQL)',
                  'Model Context Protocol (MCP) Servers',
                  'ISO-8583 Banking Interchange Protocols',
                  'Embedded C POS Terminal Firmware',
                  'Flutter / Dart (Clean Architecture & BLoC)',
                  'Next.js 16 (App Router / RSC / Turbopack)',
                  'Vue.js 3 / Nuxt.js SSR Engineering',
                  'Docker & Automated GitHub Actions CI/CD'
                ].map((comp, idx) => (
                  <div key={idx} className="comp-item">
                    <CheckCircle2 size={15} className="text-cyan" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
