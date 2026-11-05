import { useState } from 'react';
import { sound } from '../../utils/soundEngine';
import { PROFILE } from '../../data/portfolioData';
import { Send, Mail, Copy, Check, Terminal, ShieldAlert, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

export default function DispatchSection() {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleKeyPress = () => {
    sound.playClick();
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    sound.playTransmit();
    setIsTransmitting(true);

    setTimeout(() => {
      sound.playSuccess();
      setIsTransmitting(false);
      setTransmitted(true);

      // Open mailto link
      const subject = encodeURIComponent(`Project Inquiry from ${senderName || 'Visitor'} via Architect's Nexus`);
      const body = encodeURIComponent(`Sender: ${senderName}\nContact: ${senderContact}\n\nMessage:\n${message}`);
      window.open(`mailto:${PROFILE.email}?subject=${subject}&body=${body}`, '_blank');
    }, 900);
  };

  const handleCopy = () => {
    sound.playClick();
    navigator.clipboard.writeText(
      `To: ${PROFILE.email}\nFrom: ${senderName} (${senderContact})\n\nMessage:\n${message}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="dispatch" className="nexus-section dispatch-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-meta">
            <span className="sub-title">AUTHENTICATED TRANSMISSION</span>
            <span className="telemetry-badge">ENCRYPTED CHANNEL // DIRECT DISPATCH</span>
          </div>
          <h2 className="section-title">The Encrypted Dispatch</h2>
          <p className="section-desc">
            Initiate communication regarding architecture consulting, SaaS engineering, 
            AI agent integrations, or open-source collaborations.
          </p>
        </div>

        {/* Dispatch Console Grid */}
        <div className="dispatch-grid">
          {/* Terminal Console Form */}
          <div className="dispatch-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">DISPATCH_TERMINAL_V2 // PORT: 443</span>
            </div>

            <form className="terminal-form" onSubmit={handleTransmit}>
              <div className="form-row">
                <label className="form-label" htmlFor="sender-identity">
                  <span className="prompt">&gt;</span> SENDER_IDENTITY:
                </label>
                <input
                  id="sender-identity"
                  name="senderIdentity"
                  type="text"
                  placeholder="e.g. Elena Rostova / Google Cloud"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="terminal-input"
                  required
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="sender-channel">
                  <span className="prompt">&gt;</span> RETURN_COMM_CHANNEL (EMAIL / LINKEDIN):
                </label>
                <input
                  id="sender-channel"
                  name="senderChannel"
                  type="text"
                  placeholder="e.g. elena@company.com"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="terminal-input"
                  required
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="transmission-payload">
                  <span className="prompt">&gt;</span> TRANSMISSION_PAYLOAD:
                </label>
                <textarea
                  id="transmission-payload"
                  name="transmissionPayload"
                  placeholder="Describe your architectural challenge, project scope, or collaboration inquiry..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="terminal-textarea"
                  required
                />
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className={`dispatch-submit-btn ${isTransmitting ? 'transmitting' : ''}`}
                  onMouseEnter={() => sound.playHover()}
                >
                  <Send size={15} />
                  <span>{isTransmitting ? 'TRANSMITTING PACKET...' : 'DISPATCH MESSAGE'}</span>
                </button>

                {message && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="copy-payload-btn"
                    title="Copy formatted transmission text"
                  >
                    {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                    <span>{copied ? 'PAYLOAD COPIED' : 'COPY RAW'}</span>
                  </button>
                )}
              </div>

              {transmitted && (
                <div className="transmission-ack">
                  <Check size={15} className="text-green" />
                  <span>TRANSMISSION ENCRYPTED &amp; ROUTED TO SYED.REZA181@GMAIL.COM</span>
                </div>
              )}
            </form>
          </div>

          {/* Direct Channels Sidebar */}
          <div className="channels-sidebar">
            <div className="channels-card">
              <span className="channels-title">DIRECT TELEMETRY CHANNELS</span>
              
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Mail size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-k">PRIMARY EMAIL</span>
                  <a href={`mailto:${PROFILE.email}`} className="channel-v">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <LinkedinIcon size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-k">LINKEDIN NETWORK</span>
                  <a 
                    href={PROFILE.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-v"
                  >
                    linkedin.com/in/salman-reza
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <GithubIcon size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-k">GITHUB REPOSITORY HUB</span>
                  <a 
                    href={PROFILE.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-v"
                  >
                    github.com/syed-reza98
                  </a>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <div className="avail-top">
                <span className="avail-dot"></span>
                <span className="avail-status">ACTIVE FOR HIGH-IMPACT COLLABORATIONS</span>
              </div>
              <p className="avail-desc">
                Currently open to architectural advisory roles, multi-tenant SaaS contract reviews, 
                and core open-source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
