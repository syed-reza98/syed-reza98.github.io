import { useState, useMemo } from 'react';
import { sound } from '../../utils/soundEngine';
import { REPOSITORIES, FEATURED_SHOWCASE } from '../../data/portfolioData';
import { Search, ExternalLink, GitFork, Shield, Layers, FileCode, Star, X } from 'lucide-react';

export default function ConstellationSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalRepo, setActiveModalRepo] = useState(null);

  const categories = [
    'All',
    'Featured',
    'Multi-Tenant SaaS',
    'AI & MCP Tooling',
    'Mobile (Flutter)',
    'FinTech & Low-Level Systems',
    'Contributed Forks',
    'Web & Cloud Engineering'
  ];

  const filteredRepos = useMemo(() => {
    return REPOSITORIES.filter((repo) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'Featured') {
        matchesCategory = repo.featured;
      } else if (selectedCategory !== 'All') {
        matchesCategory = repo.category === selectedCategory;
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        repo.name.toLowerCase().includes(q) || 
        repo.language.toLowerCase().includes(q) || 
        repo.description.toLowerCase().includes(q) ||
        repo.owner.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="constellation" className="nexus-section constellation-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-meta">
            <span className="sub-title">PORTFOLIO ECOSYSTEM</span>
            <span className="telemetry-badge">110 AUDITED REPOSITORIES // LIVE DATABASE</span>
          </div>
          <h2 className="section-title">The CodeStorm Constellation</h2>
          <p className="section-desc">
            Complete code-level index spanning 95 source systems and 15 contributed forks across 
            both <span className="text-cyan">syed-reza98</span> and the <span className="text-cyan">CodeStorm-Hub</span> organization.
          </p>
        </div>

        {/* Featured Showcase Deck (Top Highlights) */}
        <div className="featured-deck">
          <div className="featured-deck-header">
            <Star size={16} className="text-amber" />
            <span>SIGNATURE ARCHITECTURAL SYSTEMS</span>
          </div>
          <div className="featured-cards-grid">
            {FEATURED_SHOWCASE.map((feat) => (
              <div 
                key={feat.id} 
                className="featured-card"
                onMouseEnter={() => sound.playHover()}
              >
                <div className="feat-top">
                  <span className="feat-badge">{feat.badge}</span>
                  <a 
                    href={feat.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="feat-ext-link"
                    title="Open on GitHub"
                    onClick={() => sound.playClick()}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <h3 className="feat-title">{feat.title}</h3>
                <p className="feat-desc">{feat.description}</p>
                
                <div className="feat-arch">
                  <span className="arch-label">Architecture:</span>
                  <span className="arch-val">{feat.architecture}</span>
                </div>

                <div className="feat-tech-chips">
                  {feat.tech.map((t, idx) => (
                    <span key={idx} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="filter-controls-wrap">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              id="repo-search-input"
              name="repo-search-input"
              aria-label="Search 110 systems by keyword, framework, or language"
              type="text"
              placeholder="Search 110 systems by keyword, framework, or language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="category-tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  sound.playTab();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-counter">
          <span>Showing <strong>{filteredRepos.length}</strong> of 110 Systems</span>
        </div>

        {/* Repositories Matrix Grid */}
        <div className="repo-cards-grid">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className={`repo-card ${repo.isFork ? 'is-fork' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveModalRepo(repo);
              }}
              onMouseEnter={() => sound.playHover()}
            >
              <div className="card-top">
                <span className="repo-owner">{repo.owner}</span>
                <div className="card-badges">
                  {repo.isFork ? (
                    <span className="badge fork" title="Contributed Fork">
                      <GitFork size={12} /> Fork
                    </span>
                  ) : (
                    <span className="badge source">Source</span>
                  )}
                  <span className="badge lang">{repo.language}</span>
                </div>
              </div>

              <h4 className="repo-name">{repo.name}</h4>
              <p className="repo-desc">{repo.description}</p>

              <div className="card-footer">
                <span className="card-files">
                  <FileCode size={12} /> {repo.filesCount} files
                </span>
                <span className="card-inspect-hint">Click to inspect</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inspect Modal Drawer */}
        {activeModalRepo && (
          <div className="repo-modal-backdrop" onClick={() => setActiveModalRepo(null)}>
            <div className="repo-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className="modal-meta">{activeModalRepo.owner} // {activeModalRepo.category}</span>
                  <h3 className="modal-title">{activeModalRepo.name}</h3>
                </div>
                <button 
                  className="modal-close-btn"
                  onClick={() => {
                    sound.playClick();
                    setActiveModalRepo(null);
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{activeModalRepo.description}</p>
                
                <div className="modal-specs-grid">
                  <div className="spec-item">
                    <span className="spec-k">Visibility</span>
                    <span className="spec-v text-cyan">{activeModalRepo.visibility}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">Language</span>
                    <span className="spec-v text-amber">{activeModalRepo.language}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">Classification</span>
                    <span className="spec-v">{activeModalRepo.isFork ? 'Contributed Fork' : 'Source Engine'}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">Codebase Volume</span>
                    <span className="spec-v">{activeModalRepo.filesCount} indexed files</span>
                  </div>
                </div>

                {activeModalRepo.isFork && (
                  <div className="fork-contribution-box">
                    <span className="box-title">User Contribution Verification:</span>
                    <p>
                      Active pull requests and commits authored by <strong>syed-reza98</strong> directly 
                      in this repository (verified in 110-repo audit).
                    </p>
                  </div>
                )}

                <div className="modal-actions">
                  <a
                    href={activeModalRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-github-btn"
                    onClick={() => sound.playClick()}
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
