import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Kyle Arahan</h1>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#setup">Setup</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - Basic Information */}
      <section id="about" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I&apos;m Kyle Arahan</h1>
          <p className="hero-subtitle">Full-Stack Developer & Student</p>
          <p className="hero-description">
            Welcome to my portfolio! I&apos;m a passionate developer currently
            pursuing my studies in web development. This portfolio showcases the
            projects and skills I&apos;ve developed throughout my program.
          </p>
          <div className="hero-contact">
            <p>
              <strong>Email:</strong> kyle.arahan@example.com
            </p>
            <p>
              <strong>GitHub:</strong> github.com/kylearahan
            </p>
            <p>
              <strong>LinkedIn:</strong> linkedin.com/in/kylearahan
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="work-grid">
            {/* Project 1 */}
            <div className="work-card">
              <div className="work-image">
                <img
                  src="https://via.placeholder.com/400x250/4A90E2/ffffff?text=Component+Library"
                  alt="Component Library"
                />
              </div>
              <div className="work-content">
                <h3 className="work-title">React Component Library</h3>
                <p className="work-description">
                  A comprehensive component library built with React,
                  TypeScript, and Storybook. Features reusable UI components
                  including buttons, cards, forms, and more with full
                  documentation.
                </p>
                <a
                  href="https://github.com/kylearahan/component-library"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Storybook</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="work-card">
              <div className="work-image">
                <img
                  src="https://via.placeholder.com/400x250/50C878/ffffff?text=CI/CD+Pipeline"
                  alt="CI/CD Pipeline"
                />
              </div>
              <div className="work-content">
                <h3 className="work-title">CI/CD Pipeline Implementation</h3>
                <p className="work-description">
                  Implemented a complete CI/CD pipeline using GitHub Actions
                  with automated testing, linting (ESLint), code formatting
                  (Prettier), and pre-commit hooks using Husky.
                </p>
                <a
                  href="https://github.com/kylearahan/cicd-pipeline"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">GitHub Actions</span>
                  <span className="tech-tag">ESLint</span>
                  <span className="tech-tag">Prettier</span>
                  <span className="tech-tag">Husky</span>
                  <span className="tech-tag">Jest</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="work-card">
              <div className="work-image">
                <img
                  src="https://via.placeholder.com/400x250/9B59B6/ffffff?text=Docker+Deployment"
                  alt="Docker Deployment"
                />
              </div>
              <div className="work-content">
                <h3 className="work-title">Dockerized Web Application</h3>
                <p className="work-description">
                  Created production-ready Docker containers for React
                  applications with optimized builds, multi-stage builds, and
                  proper configuration for deployment.
                </p>
                <a
                  href="https://github.com/kylearahan/docker-app"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Nginx</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Throughout my program, I&apos;ve gained hands-on experience with
            modern web development technologies and best practices. Here&apos;s
            what I&apos;m proficient in:
          </p>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages & Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Storybook</span>
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">ESLint</span>
                <span className="skill-tag">Prettier</span>
                <span className="skill-tag">Husky</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">NPM/Yarn</span>
                <span className="skill-tag">Webpack</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Concepts & Practices</h3>
              <div className="skill-tags">
                <span className="skill-tag">CI/CD Pipelines</span>
                <span className="skill-tag">Component Architecture</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Testing (Unit & Integration)</span>
                <span className="skill-tag">Version Control</span>
                <span className="skill-tag">Agile Development</span>
                <span className="skill-tag">Code Quality & Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources-section">
        <div className="container">
          <h2 className="section-title">Learning Resources</h2>
          <p className="section-description">
            These are some of the valuable resources that have helped me
            throughout my learning journey.
          </p>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3 className="resource-title">React Documentation</h3>
              <p className="resource-summary">
                The official React documentation - an essential resource for
                learning React concepts, hooks, and best practices.
              </p>
              <a
                href="https://react.dev/"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">📖</div>
              <h3 className="resource-title">MDN Web Docs</h3>
              <p className="resource-summary">
                Comprehensive documentation for HTML, CSS, and JavaScript. The
                go-to reference for web development fundamentals.
              </p>
              <a
                href="https://developer.mozilla.org/"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🐳</div>
              <h3 className="resource-title">Docker Documentation</h3>
              <p className="resource-summary">
                Official Docker documentation covering containerization, best
                practices, and deployment strategies.
              </p>
              <a
                href="https://docs.docker.com/"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🔧</div>
              <h3 className="resource-title">GitHub Actions</h3>
              <p className="resource-summary">
                Learn about CI/CD automation with GitHub Actions. Build, test,
                and deploy your projects automatically.
              </p>
              <a
                href="https://docs.github.com/en/actions"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">📘</div>
              <h3 className="resource-title">TypeScript Handbook</h3>
              <p className="resource-summary">
                The official TypeScript handbook - learn about static typing and
                how to leverage TypeScript in your projects.
              </p>
              <a
                href="https://www.typescriptlang.org/docs/"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🎨</div>
              <h3 className="resource-title">Storybook</h3>
              <p className="resource-summary">
                Build and document UI components in isolation. Essential for
                creating maintainable component libraries.
              </p>
              <a
                href="https://storybook.js.org/"
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Resource →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Setup Section */}
      <section id="setup" className="setup-section">
        <div className="container">
          <h2 className="section-title">Developer Setup</h2>
          <p className="section-description">
            Here&apos;s my preferred development environment setup that helps me
            stay productive and write clean code.
          </p>

          <div className="setup-grid">
            {/* VS Code Setup */}
            <div className="setup-card">
              <h3 className="setup-title">VS Code Configuration</h3>
              <div className="setup-content">
                <h4>Essential Extensions:</h4>
                <ul className="setup-list">
                  <li>
                    <strong>ESLint</strong> - Identifies and fixes JavaScript
                    code issues
                  </li>
                  <li>
                    <strong>Prettier</strong> - Code formatter for consistent
                    styling
                  </li>
                  <li>
                    <strong>ES7+ React/Redux Snippets</strong> - Speed up React
                    development
                  </li>
                  <li>
                    <strong>Auto Rename Tag</strong> - Automatically rename
                    paired HTML/XML tags
                  </li>
                  <li>
                    <strong>GitLens</strong> - Enhanced Git capabilities
                  </li>
                  <li>
                    <strong>Path Intellisense</strong> - Autocomplete filenames
                  </li>
                  <li>
                    <strong>Docker</strong> - Docker file support and syntax
                    highlighting
                  </li>
                </ul>

                <h4>Key Settings:</h4>
                <ul className="setup-list">
                  <li>Format on save enabled</li>
                  <li>Auto save on focus change</li>
                  <li>Tab size: 2 spaces</li>
                  <li>Trim trailing whitespace</li>
                  <li>Insert final newline</li>
                </ul>
              </div>
            </div>

            {/* Terminal Setup */}
            <div className="setup-card">
              <h3 className="setup-title">Terminal Configuration</h3>
              <div className="setup-content">
                <h4>Preferred Terminal:</h4>
                <ul className="setup-list">
                  <li>
                    <strong>Integrated VS Code Terminal</strong> - Convenient
                    and powerful
                  </li>
                  <li>
                    <strong>Shell:</strong> Bash / Zsh with Oh My Zsh
                  </li>
                  <li>
                    <strong>Theme:</strong> Dracula or One Dark
                  </li>
                </ul>

                <h4>Essential Tools:</h4>
                <ul className="setup-list">
                  <li>
                    <strong>Node.js & npm</strong> - JavaScript runtime and
                    package manager
                  </li>
                  <li>
                    <strong>Git</strong> - Version control
                  </li>
                  <li>
                    <strong>Docker</strong> - Containerization platform
                  </li>
                  <li>
                    <strong>nvm</strong> - Node version manager
                  </li>
                </ul>

                <h4>Useful Aliases:</h4>
                <ul className="setup-list">
                  <li>
                    <code>gs</code> → git status
                  </li>
                  <li>
                    <code>ga</code> → git add
                  </li>
                  <li>
                    <code>gc</code> → git commit
                  </li>
                  <li>
                    <code>gp</code> → git push
                  </li>
                  <li>
                    <code>ni</code> → npm install
                  </li>
                  <li>
                    <code>ns</code> → npm start
                  </li>
                </ul>
              </div>
            </div>

            {/* Font Setup */}
            <div className="setup-card">
              <h3 className="setup-title">Editor Font</h3>
              <div className="setup-content">
                <h4>Preferred Font:</h4>
                <ul className="setup-list">
                  <li>
                    <strong>Font Family:</strong> Fira Code or JetBrains Mono
                  </li>
                  <li>
                    <strong>Font Size:</strong> 14px
                  </li>
                  <li>
                    <strong>Line Height:</strong> 1.6
                  </li>
                  <li>
                    <strong>Font Ligatures:</strong> Enabled
                  </li>
                </ul>

                <h4>Why These Fonts?</h4>
                <p className="setup-description">
                  Both Fira Code and JetBrains Mono are monospaced fonts
                  designed specifically for coding. They include programming
                  ligatures that make code more readable by combining characters
                  like <code>!=</code>, <code>===</code>, and <code>=&gt;</code>
                  into single glyphs.
                </p>

                <h4>Installation:</h4>
                <ul className="setup-list">
                  <li>Download from Google Fonts or JetBrains website</li>
                  <li>Install the font on your system</li>
                  <li>
                    Update VS Code settings:{' '}
                    <code>
                      &quot;editor.fontFamily&quot;: &quot;Fira Code&quot;
                    </code>
                  </li>
                  <li>
                    Enable ligatures:{' '}
                    <code>&quot;editor.fontLigatures&quot;: true</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2024 Kyle Arahan. Built with React, TypeScript, and Docker.
          </p>
          <p>Assignment 14 - Final Portfolio Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
