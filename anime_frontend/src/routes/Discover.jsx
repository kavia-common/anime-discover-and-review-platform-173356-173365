import React from 'react';
import Home from './Home';

/**
 * Discover reuses Home grid for now with same filters and placeholder data.
 */
// PUBLIC_INTERFACE
export default function Discover({ filters }) {
  return (
    <section aria-labelledby="discover-title">
      <h2 id="discover-title" className="visually-hidden">Discover</h2>
      <Home filters={filters} />
    </section>
  );
}
