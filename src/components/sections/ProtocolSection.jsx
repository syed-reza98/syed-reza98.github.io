import { useState } from 'react';
import { sound } from '../../utils/soundEngine';
import { ISO_8583_PACKET_SPEC } from '../../data/portfolioData';
import { Terminal, Shield, Cpu, Binary, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ProtocolSection() {
  const [selectedField, setSelectedField] = useState(ISO_8583_PACKET_SPEC[0]);
  const [activeTab, setActiveTab] = useState('iso8583');
  const [cBufferAddress, setCBufferAddress] = useState('0x004A2F80');

  const cRegisters = [
    { reg: 'REG_KYBD_STATUS', hex: '0x00000001', state: 'KEY_PRESSED (ENTER)', interrupt: 'IRQ_4' },
    { reg: 'REG_MAG_TRACK2', hex: '0x541289******4210', state: 'PARSED_OK', interrupt: 'IRQ_7' },
    { reg: 'REG_PRN_THERMAL', hex: '0x0000FF00', state: 'BUFFER_READY (384 dots)', interrupt: 'DMA_2' },
    { reg: 'REG_TX_FIFO', hex: '0x000000E8', state: '232 BYTES PACKED', interrupt: 'UART_1' }
  ];

  return (
    <section id="protocols" className="nexus-section protocol-section">
      <div className="section-container">
        <div className="section-header">
          <div className="header-meta">
            <span className="sub-title">LOW-LEVEL & FINANCIAL PROTOCOLS</span>
            <span className="telemetry-badge">SPEC: ISO-8583:1987 / POS EMBEDDED C</span>
          </div>
          <h2 className="section-title">The Chamber of Protocols</h2>
          <p className="section-desc">
            Direct implementation experience with mission-critical financial switches, ATM electronic journals, 
            and interrupt-driven C firmware for hardware payment terminals.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="protocol-tabs">
          <button
            className={`tab-btn ${activeTab === 'iso8583' ? 'active' : ''}`}
            onClick={() => {
              sound.playTab();
              setActiveTab('iso8583');
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <Binary size={15} />
            <span>ISO-8583 Financial Interchange Packet</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'firmware' ? 'active' : ''}`}
            onClick={() => {
              sound.playTab();
              setActiveTab('firmware');
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <Cpu size={15} />
            <span>SR600Mini POS Embedded C Registers</span>
          </button>
        </div>

        {/* Content Panels */}
        {activeTab === 'iso8583' ? (
          <div className="protocol-deck">
            {/* Packet Visualizer Grid */}
            <div className="packet-inspector-grid">
              <div className="packet-fields-list">
                <div className="panel-label">
                  <Terminal size={14} />
                  <span>TRANSMISSION BITMAP FIELDS (CLICK TO INSPECT)</span>
                </div>

                <div className="fields-stream">
                  {ISO_8583_PACKET_SPEC.map((spec) => (
                    <div
                      key={spec.field}
                      className={`field-row ${selectedField.field === spec.field ? 'active' : ''}`}
                      onClick={() => {
                        sound.playClick();
                        setSelectedField(spec);
                      }}
                      onMouseEnter={() => sound.playHover()}
                    >
                      <div className="field-meta">
                        <span className="field-tag">{spec.field}</span>
                        <span className="field-name">{spec.name}</span>
                      </div>
                      <div className="field-val-preview">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspector Output Terminal */}
              <div className="inspector-terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">PACKET_DECODER // {selectedField.field}</span>
                  <CheckCircle2 size={14} className="text-cyan" />
                </div>

                <div className="terminal-body">
                  <div className="term-line">
                    <span className="prompt">&gt;</span> <span className="cmd">INSPECT_FIELD</span> {selectedField.field}
                  </div>
                  <div className="term-output">
                    <div className="out-row">
                      <span className="out-k">SPECIFICATION:</span>
                      <span className="out-v text-amber">{selectedField.name}</span>
                    </div>
                    <div className="out-row">
                      <span className="out-k">RAW PAYLOAD:</span>
                      <span className="out-v text-cyan mono">{selectedField.value}</span>
                    </div>
                    <div className="out-row">
                      <span className="out-k">SEMANTICS:</span>
                      <span className="out-v">{selectedField.desc}</span>
                    </div>
                    <div className="out-row">
                      <span className="out-k">VALIDATION:</span>
                      <span className="out-v text-green">PARITY_OK // LENGTH_MATCH // CRC_PASSED</span>
                    </div>
                  </div>

                  <div className="term-hex-dump">
                    <div className="hex-header">HEX_STREAM_DECODE:</div>
                    <code>
                      02 00 70 20 00 00 00 00  00 00 00 15 00 00 04 82<br />
                      39 31 41 54 4D 2D 44 48  4B 2D 30 30 34 32 30 30
                    </code>
                  </div>

                  <div className="term-footer-note">
                    <Shield size={13} />
                    <span>Engineered into microservices for electronic-journal audits & ATM switch reconciliation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="firmware-deck">
            <div className="firmware-grid">
              <div className="registers-panel">
                <div className="panel-label">
                  <Cpu size={14} />
                  <span>HARDWARE INTERRUPT & IO REGISTERS (SR600Mini)</span>
                </div>

                <div className="registers-list">
                  {cRegisters.map((reg) => (
                    <div key={reg.reg} className="register-card" onMouseEnter={() => sound.playHover()}>
                      <div className="reg-top">
                        <span className="reg-name">{reg.reg}</span>
                        <span className="reg-irq">{reg.interrupt}</span>
                      </div>
                      <div className="reg-mid">
                        <span className="reg-hex">{reg.hex}</span>
                        <span className="reg-state">{reg.state}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="c-code-terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">pos_kernel_dispatch.c (Embedded C)</span>
                </div>
                <div className="terminal-code">
                  <pre>
{`/* SR600Mini Handheld POS Driver - Syed Salman Reza */
#include "sr600_hal.h"
#include "iso8583_codec.h"

int pos_dispatch_transaction(const uint8_t *track2, uint32_t amount) {
    iso_packet_t tx_pkt;
    memset(&tx_pkt, 0, sizeof(iso_packet_t));
    
    tx_pkt.mti = 0x0200; /* Authorization request */
    tx_pkt.processing_code = 0x000000;
    tx_pkt.amount = amount;
    tx_pkt.stan = hal_get_next_stan();
    
    /* DMA ring-buffer transmit to cellular modem */
    if (modem_dma_send(&tx_pkt, sizeof(tx_pkt)) != HAL_OK) {
        log_hw_error(ERR_MODEM_TIMEOUT);
        return -1;
    }
    return 0; /* Packet in flight */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
