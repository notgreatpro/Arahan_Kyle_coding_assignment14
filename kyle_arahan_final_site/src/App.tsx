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
          <p className="hero-subtitle">
            Full-Stack Web Developer & RRC Polytechnic Student
          </p>
          <p className="hero-description">
            Welcome to my portfolio! I&apos;m a passionate developer currently
            pursuing my studies in web development. This portfolio showcases the
            projects and skills I&apos;ve developed throughout my program.
          </p>
          <div className="hero-contact">
            <p>
              <strong>Email:</strong> kylejzarahan@gmail.com
            </p>
            <p>
              <strong>GitHub:</strong> https://github.com/notgreatpro
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              https://www.linkedin.com/in/kyle-arahan-174644380/
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="work-grid">
            {/* Project 1 */}
            <div className="work-card">
              <div className="work-image">
                <img src="/GreatProsBookStore.png" alt="GreatPros BookStore" />
              </div>
              <div className="work-content">
                <h3 className="work-title">GreatPros BookStore</h3>
                <p className="work-description">
                  A book store that uses HTML, CSS, and Javascript incuding a
                  Home page, Store page and a Contact Page. This project is made
                  during Wev Development 1 course to use the knowledge of the
                  fundamental languages to build a simple wesbites for users.
                </p>
                <a
                  href="https://notgreatpro.github.io/Web-Dev_Final_Project-GreatPro-s-BookStore/"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">Javascript</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="work-card">
              <div className="work-image">
                <img src="/GenshinExplorer.png" alt="Genshin Explorer" />
              </div>
              <div className="work-content">
                <h3 className="work-title">Genshin Explorer Website</h3>
                <p className="work-description">
                  Genshin Explorer is a website that specializes for users to
                  check their favourite Genshin characters as well as comment on
                  them. It features an admin role with enchanced CRUD to create,
                  update, edit and delete certain characters from the database.
                  The website includes a functional search button/serach
                  filters, user login/sign up as well as customize their
                  profiles. Unfortunately this website requires Xampp in order
                  to function meaning you cant see this website live. However
                  I&apos;ll send a link to the Github Repository regarding this
                  instead.
                </p>
                <a
                  href="https://github.com/notgreatpro/Web-Dev-2-Project"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">GitHub</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">PHPMyAdmin</span>
                  <span className="tech-tag">GitHub Git</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="work-card">
              <div className="work-image">
                <img
                  src="/GenshinImpactArchives.png"
                  alt="Genshin Impact Archives"
                />
              </div>
              <div className="work-content">
                <h3 className="work-title">Genshin Impact Archives</h3>
                <p className="work-description">
                  Genshin Impact Archives is a Rails website focusing on Genshin
                  characters in-game stats taken from the API and the csv file.
                  Each characters has its own stats that users can explore with
                  muliple character types with interactive search button with a
                  pagination and they can view the characters too. This website
                  was created for Agile course to foucs on Ruby on Rails and
                  implemented PostgreSQL. Same with the Genshin Explorer
                  Website, this would not be shown live and the alternatives are
                  my repository regarding this.
                </p>
                <a
                  href="https://github.com/notgreatpro/teyvat_archives"
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <div className="tech-list">
                  <span className="tech-tag">Ruby on Rails</span>
                  <span className="tech-tag">API</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Gemfile</span>
                  <span className="tech-tag">CSV File</span>
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
                <span className="skill-tag">PHPMyAdmin</span>
                <span className="skill-tag">Ruby On Rails</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Storybook</span>
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
            &copy; 2025 Kyle Arahan. Built with React, TypeScript, and Docker.
          </p>
          <p>Assignment 14 - Final Portfolio Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
