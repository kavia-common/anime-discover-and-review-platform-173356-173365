import React from 'react';

/**
 * MyRatings route shows a placeholder where user's ratings would appear.
 */
// PUBLIC_INTERFACE
export default function MyRatings() {
  return (
    <section aria-labelledby="ratings-title">
      <h2 id="ratings-title" style={{ margin: '12px 0 18px' }}>My Ratings</h2>
      <p style={{ color: 'var(--color-muted)' }}>
        You haven’t rated any anime yet. Explore Discover or Trending to start rating.
      </p>
    </section>
  );
}
