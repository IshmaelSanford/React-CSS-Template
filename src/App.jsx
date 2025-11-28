import { useState, useEffect } from 'react'
import './ui.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <span className="text-gradient">UI System</span>
        </a>
        <div className="navbar__links">
          <a href="#" className="navbar__link">Components</a>
          <a href="#" className="navbar__link">Documentation</a>
          <button className="btn btn--ghost" onClick={toggleTheme} style={{ paddingInline: '12px' }}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </nav>

      <main className="container max-width-lg stack" style={{ marginTop: 'var(--space-8)' }}>
        
        <section className="text-center">
          <h1 style={{ fontSize: 'var(--font-size-4xl)' }}>
            Design System <span className="text-gradient">Showcase</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
            A lightweight, variable-based CSS framework.
          </p>
        </section>

        <div className="cluster" style={{ justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="badge badge--success badge--pulse">v1.0.0 Live</span>
          <span className="tag tag--outline">CSS Variables</span>
          <span className="tag tag--outline">Dark Mode</span>
        </div>

        {/* Buttons Section */}
        <section className="card stack">
          <h2>Buttons</h2>
          <div className="cluster">
            <button className="btn">Primary Button</button>
            <button className="btn btn--success">Success</button>
            <button className="btn btn--error">Error</button>
            <button className="btn btn--ghost">Ghost</button>
            <button className="btn" disabled>Disabled</button>
          </div>
          
          <h3>States</h3>
          <div className="cluster">
            <button 
              className={`btn ${isLoading ? 'is-loading' : ''}`} 
              onClick={toggleLoading}
            >
              {isLoading ? 'Loading...' : 'Click to Load'}
            </button>
            <button className="btn btn--ghost is-loading">Ghost Loading</button>
          </div>
        </section>

        {/* Badges & Tags Section */}
        <section className="card stack">
          <h2>Badges & Tags</h2>
          <div className="cluster">
            <span className="badge">Default</span>
            <span className="badge badge--success">Success</span>
            <span className="badge badge--error">Error</span>
            <span className="badge badge--warning">Warning</span>
          </div>
          <div className="cluster">
            <span className="badge badge--success badge--pulse">Online</span>
            <span className="badge badge--error badge--pulse">Offline</span>
            <span className="badge badge--warning badge--pulse">Connecting</span>
          </div>
          <div className="cluster" style={{ marginTop: 'var(--space-4)' }}>
            <span className="tag">Neutral Tag</span>
            <span className="tag tag--primary">Primary Tag</span>
            <span className="tag tag--outline">Outline Tag</span>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="card stack">
          <h2>Form Inputs</h2>
          <div className="stack max-width-md">
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input type="email" className="input" placeholder="you@example.com" />
            </div>

            <div className="input-group">
              <label className="input-label">Username</label>
              <input type="text" className="input" placeholder="johndoe" />
            </div>

            <div className="input-group">
              <label className="input-label">Password (Error State)</label>
              <input type="password" className="input input--error" defaultValue="wrongpassword" />
              <span className="input-error-msg">Incorrect password. Please try again.</span>
            </div>

            <div className="input-group">
              <label className="input-label">Disabled Input</label>
              <input type="text" className="input" disabled placeholder="Cannot type here" />
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="stack">
          <h2>Shadow Depth</h2>
          <div className="cluster" style={{ alignItems: 'stretch' }}>
            <div className="card" style={{ boxShadow: 'var(--shadow-sm)', flex: 1, minWidth: '200px' }}>
              <h3>Shadow SM</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Subtle depth for cards and simple surfaces.
              </p>
            </div>
            <div className="card" style={{ boxShadow: 'var(--shadow-md)', flex: 1, minWidth: '200px' }}>
              <h3>Shadow MD</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Standard depth for buttons and active elements.
              </p>
            </div>
            <div className="card" style={{ boxShadow: 'var(--shadow-lg)', flex: 1, minWidth: '200px' }}>
              <h3>Shadow LG</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                High depth for modals, dropdowns, and hover states.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
