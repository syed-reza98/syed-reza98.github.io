import { useState } from 'react';
import { sound } from '../../utils/soundEngine';
import { Cpu, Terminal, Play, CheckCircle, Sparkles, Network } from 'lucide-react';

const MCP_TOOLS = [
  {
    id: 'maplibre',
    name: 'maplibre_mcp',
    tool: 'generate_vector_tile_spec',
    desc: 'Empowers autonomous AI agents to validate and style GIS vector map layers.',
    sampleParams: {
      source: 'osm-liberty-vector',
      stylePreset: 'dark-tactical',
      zoomRange: [0, 16],
      features: ['roads', 'waterways', 'buildings']
    },
    sampleOutput: {
      status: 'success',
      vectorLayerId: 'layer-osm-dark-v2',
      styleUrl: 'https://tiles.codestorm.org/v1/dark-tactical.json',
      glyphs: 'https://fonts.codestorm.org/{fontstack}/{range}.pbf',
      projection: 'EPSG:3857 (Web Mercator)'
    }
  },
  {
    id: 'material3',
    name: 'material-3-mcp-plugin',
    tool: 'get_design_token_palette',
    desc: 'Retrieves official Material 3 tonal color palettes & accessibility contrast ratios for agents.',
    sampleParams: {
      seedColor: '#00F2FE',
      contrastLevel: 'high_contrast',
      colorSpace: 'HCT'
    },
    sampleOutput: {
      primary: { tone40: '#006874', tone80: '#4DD8E6', tone90: '#A4EEF7' },
      onPrimary: '#00363D',
      surfaceContainer: '#1C2128',
      wcagRatio: '7.4:1 (AAA Compliant)'
    }
  },
  {
    id: 'freellm',
    name: 'freellmapi',
    tool: 'route_provider_failover',
    desc: 'Smart-routes LLM inference requests across 16 free tiers with automated fallback.',
    sampleParams: {
      promptTokens: 412,
      latencyBudgetMs: 800,
      candidateProviders: ['gemini-flash', 'groq-llama', 'deepseek', 'mistral']
    },
    sampleOutput: {
      routedTo: 'groq-llama-3.3-70b',
      ttftMs: 142,
      failoverCount: 0,
      tokensRemainingPool: '1.68B'
    }
  }
];

export default function AgenticForgeSection() {
  const [activeTool, setActiveTool] = useState(MCP_TOOLS[0]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(MCP_TOOLS[0].sampleOutput);

  const handleExecute = () => {
    sound.playClick();
    setIsExecuting(true);
    setExecutionResult(null);

    setTimeout(() => {
      sound.playSuccess();
      setExecutionResult(activeTool.sampleOutput);
      setIsExecuting(false);
    }, 700);
  };

  return (
    <section id="agentic" className="nexus-section agentic-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-meta">
            <span className="sub-title">AI & AUTONOMOUS SYSTEMS</span>
            <span className="telemetry-badge">PROTOCOL: MODEL CONTEXT PROTOCOL (MCP) // JSON-RPC 2.0</span>
          </div>
          <h2 className="section-title">The Agentic Forge</h2>
          <p className="section-desc">
            Bridging Large Language Models and real-world tools via custom 
            <strong> Model Context Protocol (MCP) servers</strong>, multi-provider API proxy meshes, 
            and GitHub Agentic Workflows.
          </p>
        </div>

        {/* MCP Sandbox Terminal */}
        <div className="mcp-sandbox-grid">
          {/* Tool Selector Sidebar */}
          <div className="mcp-tools-sidebar">
            <div className="panel-label">
              <Network size={14} />
              <span>OFFICIAL MCP TOOL SERVERS</span>
            </div>

            <div className="tools-list">
              {MCP_TOOLS.map((t) => (
                <div
                  key={t.id}
                  className={`mcp-tool-card ${activeTool.id === t.id ? 'active' : ''}`}
                  onClick={() => {
                    sound.playTab();
                    setActiveTool(t);
                    setExecutionResult(t.sampleOutput);
                  }}
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="tool-card-top">
                    <span className="tool-name">{t.name}</span>
                    <Cpu size={14} className="tool-icon" />
                  </div>
                  <span className="tool-method">{t.tool}()</span>
                  <p className="tool-desc">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Execution Terminal */}
          <div className="mcp-terminal-view">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">MCP_AGENT_DISPATCH // {activeTool.tool}</span>
              <button
                className={`run-tool-btn ${isExecuting ? 'running' : ''}`}
                onClick={handleExecute}
                disabled={isExecuting}
                onMouseEnter={() => sound.playHover()}
              >
                <Play size={13} fill="currentColor" />
                <span>{isExecuting ? 'DISPATCHING...' : 'TEST MCP CALL'}</span>
              </button>
            </div>

            <div className="terminal-content">
              {/* Request Payload */}
              <div className="term-block">
                <div className="block-title">&gt; CLIENT_REQUEST (JSON-RPC 2.0 / tools/call):</div>
                <pre className="code-box">
{JSON.stringify(
  {
    jsonrpc: "2.0",
    id: 1042,
    method: "tools/call",
    params: {
      name: activeTool.tool,
      arguments: activeTool.sampleParams
    }
  },
  null,
  2
)}
                </pre>
              </div>

              {/* Response Payload */}
              <div className="term-block">
                <div className="block-title text-cyan">&gt; SERVER_RESPONSE (via {activeTool.name}):</div>
                {isExecuting ? (
                  <div className="executing-loader">
                    <span className="spin-dot"></span>
                    <span>Processing tool call through {activeTool.name} MCP engine...</span>
                  </div>
                ) : (
                  <pre className="code-box text-green">
{JSON.stringify(
  {
    jsonrpc: "2.0",
    id: 1042,
    result: executionResult
  },
  null,
  2
)}
                  </pre>
                )}
              </div>
            </div>

            <div className="terminal-footer">
              <Sparkles size={14} className="text-amber" />
              <span>Full compliance with Anthropic Claude Desktop, Cursor AI, and Antigravity Agent harnesses.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
