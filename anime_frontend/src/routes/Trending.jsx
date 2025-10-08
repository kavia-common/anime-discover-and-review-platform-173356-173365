import React from 'react';
import Home from './Home';

/**
 * Trending route shows the same grid for now as placeholder.
 */
// PUBLIC_INTERFACE
export default function Trending({ filters }) {
  return (
    <section aria-labelledby="trending-title">
      <h2 id="trending-title" className="visually-hidden">Trending</h2>
      <Home filters={filters} />
    </section>
  );
}
