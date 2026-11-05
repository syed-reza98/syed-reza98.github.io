import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Console Signature for Awwwards Jury & Engineers
if (typeof window !== 'undefined') {
  console.log(
    '%c SYED REZA %c THE ENGINEER\'S LEDGER %c',
    'background: #111; color: #fff; padding: 6px 12px; font-weight: bold; border-radius: 4px 0 0 4px; font-family: monospace;',
    'background: #855400; color: #FFB000; padding: 6px 12px; font-weight: bold; border-radius: 0 4px 4px 0; font-family: monospace;',
    'background: transparent'
  );
  console.log(
    '%cSystems Architect & Full-Stack Engineer %c| Banking Core · SaaS · Flutter · AI MCP Tooling 🚀',
    'font-weight: bold; color: #FFB000; font-size: 13px; font-family: monospace;',
    'color: #888; font-size: 13px; font-family: monospace;'
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
