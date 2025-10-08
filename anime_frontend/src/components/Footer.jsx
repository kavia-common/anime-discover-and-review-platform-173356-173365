import React from 'react';

/**
 * Footer renders a simple copyright and theme credits.
 */
// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Anime Ocean</span>
        <span>
          Theme: Ocean Professional · Primary <span style={{ color: 'var(--color-primary)' }}>#F97316</span> · Secondary <span style={{ color: 'var(--color-secondary)' }}>#10B981</span>
        </span>
      </div>
    </footer>
  );
}
