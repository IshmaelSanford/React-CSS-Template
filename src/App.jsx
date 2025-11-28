import { useState, useEffect } from 'react'
import './ui.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(false)
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', icon: 'ℹ️', message: 'This is an info alert.' },
    { id: 2, type: 'success', icon: '✅', message: 'Operation successful!' },
    { id: 3, type: 'warning', icon: '⚠️', message: 'Warning: Check your inputs.' },
    { id: 4, type: 'error', icon: '⛔', message: 'Error: Something went wrong.' },
  ])
  const [toasts, setToasts] = useState([
    { id: 1, type: 'success', message: 'Saved successfully!' }
  ])
  const [accordionOpen, setAccordionOpen] = useState(1)
  const [showNotFound, setShowNotFound] = useState(false)

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

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const toggleAccordion = (id) => {
    setAccordionOpen(prev => prev === id ? null : id)
  }

  if (showNotFound) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="empty-state empty-state--spacious">
          <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>404</div>
          <h1 style={{ marginBottom: 'var(--space-2)' }}>Page Not Found</h1>
          <p style={{ marginBottom: 'var(--space-6)' }}>The page you are looking for does not exist or has been moved.</p>
          <button className="btn" onClick={() => setShowNotFound(false)}>Go Back Home</button>
        </div>
      </div>
    )
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
          <button className="btn btn--ghost" onClick={() => setShowNotFound(true)}>
            404 Page
          </button>
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

        {/* New Components Showcase */}
        <section className="stack">
          <h2>New Components</h2>
          
          {/* Tooltips */}
          <div className="card stack">
            <h3>Tooltips</h3>
            <div className="cluster">
              <div className="tooltip tooltip--top">
                <span className="tooltip-trigger btn">Top Tooltip</span>
                <div className="tooltip-content">Hello from above!</div>
              </div>
              <div className="tooltip tooltip--right">
                <span className="tooltip-trigger btn btn--ghost">Right Tooltip</span>
                <div className="tooltip-content">Hello from right!</div>
              </div>
              <div className="tooltip tooltip--bottom">
                <span className="tooltip-trigger btn btn--success">Bottom Tooltip</span>
                <div className="tooltip-content">Hello from below!</div>
              </div>
              <div className="tooltip tooltip--left">
                <span className="tooltip-trigger btn btn--error">Left Tooltip</span>
                <div className="tooltip-content">Hello from left!</div>
              </div>
            </div>
          </div>

          {/* Loaders */}
          <div className="card stack">
            <h3>Loaders</h3>
            <div className="cluster">
              <div className="loader loader--sm"></div>
              <div className="loader loader--md"></div>
              <div className="loader loader--lg"></div>
            </div>
          </div>

          {/* Alerts */}
          <div className="card stack">
            <h3>Alerts</h3>
            {alerts.length === 0 && <p className="text-center" style={{ color: 'var(--color-text-muted)' }}>All alerts dismissed. Refresh to reset.</p>}
            {alerts.map(alert => (
              <div key={alert.id} className={`alert alert--${alert.type}`}>
                <span>{alert.icon}</span>
                <span className="alert__content">{alert.message}</span>
                <button className="alert__close" onClick={() => removeAlert(alert.id)}>×</button>
              </div>
            ))}
          </div>

          {/* Form Elements Extended */}
          <div className="card stack">
            <h3>Extended Form Elements</h3>
            
            <div className="input-group">
              <label className="input-label">Textarea</label>
              <textarea className="textarea" placeholder="Type your message here..."></textarea>
            </div>

            <div className="input-group">
              <label className="input-label">Slider</label>
              <input type="range" className="slider" />
            </div>

            <div className="input-group">
              <label className="checkbox">
                <input type="checkbox" className="checkbox-input" />
                <span className="checkbox-label">I agree to the terms</span>
              </label>
            </div>

            <div className="input-group">
              <label className="input-label">Tag Select</label>
              <div className="tag-select">
                <span className="tag tag--selected tag--removable">
                  React <button className="tag__remove">×</button>
                </span>
                <span className="tag tag--selected tag--removable">
                  CSS <button className="tag__remove">×</button>
                </span>
                <input type="text" className="tag-select__input" placeholder="Add tag..." />
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="card stack">
            <h3>Accordion</h3>
            <div className="accordion">
              <div className={`accordion-item ${accordionOpen === 1 ? 'is-open' : ''}`}>
                <button className="accordion-trigger" onClick={() => toggleAccordion(1)}>
                  Section 1 <span>{accordionOpen === 1 ? '−' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>Content for section 1. This is visible by default.</p>
                </div>
              </div>
              <div className={`accordion-item ${accordionOpen === 2 ? 'is-open' : ''}`}>
                <button className="accordion-trigger" onClick={() => toggleAccordion(2)}>
                  Section 2 <span>{accordionOpen === 2 ? '−' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>Content for section 2. Hidden by default.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card stack">
            <h3>Table</h3>
            <div className="table-container">
              <table className="table table--striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice Johnson</td>
                    <td>Admin</td>
                    <td><span className="badge badge--success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Bob Smith</td>
                    <td>Editor</td>
                    <td><span className="badge badge--warning">Away</span></td>
                  </tr>
                  <tr>
                    <td>Charlie Brown</td>
                    <td>User</td>
                    <td><span className="badge badge--error">Offline</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          <div className="card">
            <div className="empty-state empty-state--compact">
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>📂</div>
              <h3>No Data Found</h3>
              <p>Try adjusting your search filters.</p>
              <button className="btn btn--ghost btn--sm" style={{ marginTop: 'var(--space-3)' }}>Clear Filters</button>
            </div>
          </div>

        </section>

      </main>
      
      {/* Toast Demo (Fixed Position) */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            <span>{toast.message}</span>
            <button className="toast__close" onClick={() => removeToast(toast.id)}>×</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
