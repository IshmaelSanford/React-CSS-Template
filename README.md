# UI Design System

A lightweight, single-file CSS design system built with vanilla CSS variables and utility classes. It features automatic light/dark mode support, a comprehensive spacing scale, and a set of modern, accessible components.

## Features

- 🌓 **Automatic Dark Mode**: Built-in support for light and dark themes using CSS variables.
- 🎨 **CSS Variables**: Fully customizable colors, spacing, typography, and shadows.
- 🧩 **Components**: Ready-to-use buttons, badges, inputs, navbars, and cards.
- 📐 **Utilities**: Simple layout helpers for stacks and clusters.
- ⚡ **Lightweight**: No build steps required, just import the CSS file.

## Installation

Simply import the `ui.css` file into your project.

```javascript
// In your main entry file (e.g., main.jsx or App.jsx)
import './ui.css';
```

## Usage

### Theming

The system automatically respects the user's system preference, or you can manually toggle themes by setting the `data-theme` attribute on the root element.

```html
<!-- Force Dark Mode -->
<html data-theme="dark">
```

### Colors & Variables

The system uses a set of CSS variables for consistent styling.

- **Colors**: `--color-primary`, `--color-success`, `--color-error`, `--color-warning`
- **Surfaces**: `--color-bg`, `--color-surface`, `--color-border`
- **Text**: `--color-text`, `--color-text-muted`
- **Spacing**: `--space-1` (4px) to `--space-10` (64px)

### Components

#### Buttons

Standard buttons with pill shape and radial gradient backgrounds.

```html
<button class="btn">Primary</button>
<button class="btn btn--success">Success</button>
<button class="btn btn--error">Error</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn" disabled>Disabled</button>
```

**Loading State**: Add `.is-loading` to show a spinner.

```html
<button class="btn is-loading">Loading...</button>
```

#### Badges

Small status indicators with optional pulse animation.

```html
<span class="badge">Default</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--error badge--pulse">Offline</span>
```

#### Tags

Neutral labels for categorization.

```html
<span class="tag">Tag</span>
<span class="tag tag--primary">Primary</span>
<span class="tag tag--outline">Outline</span>
```

#### Inputs

Styled form inputs with focus and error states.

```html
<div class="input-group">
  <label class="input-label">Email</label>
  <input type="email" class="input" placeholder="hello@example.com">
</div>

<!-- Error State -->
<input type="text" class="input input--error">
<span class="input-error-msg">Invalid input</span>
```

#### Navbar

A responsive navigation bar that collapses on mobile.

```html
<nav class="navbar">
  <a href="#" class="navbar__logo">Logo</a>
  <div class="navbar__links">
    <a href="#" class="navbar__link">Link 1</a>
    <a href="#" class="navbar__link">Link 2</a>
  </div>
</nav>
```

#### Cards

Container for content with background and shadow.

```html
<div class="card">
  <h2>Card Title</h2>
  <p>Card content goes here.</p>
</div>
```

### Utilities

- `.stack`: Adds vertical spacing between children.
- `.cluster`: Creates a horizontal flex layout with wrapping.
- `.text-gradient`: Applies a gradient to text.
- `.text-center`, `.text-left`, `.text-right`: Text alignment.
- `.container`, `.max-width-md`, `.max-width-lg`: Width constraints.

## Customization

You can override any variable in your own CSS to customize the look and feel.

```css
:root {
  --color-primary: #3b82f6; /* Change primary color to blue */
  --radius-pill: 4px;       /* Change buttons to be less rounded */
}
```
