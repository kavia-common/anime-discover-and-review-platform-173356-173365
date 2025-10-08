import React from 'react';

const ALL_GENRES = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi', 'Romance', 'Horror', 'Mystery', 'Sports'];

/**
 * Sidebar renders filters such as genres and minimum rating.
 * Props:
 * - selectedGenres: string[]
 * - onToggleGenre: (genre: string) => void
 * - minRating: number
 * - onMinRatingChange: (n: number) => void
 */
// PUBLIC_INTERFACE
export default function Sidebar({ selectedGenres = [], onToggleGenre, minRating = 0, onMinRatingChange }) {
  return (
    <div>
      <section className="filter-group" aria-labelledby="genres-label">
        <h3 id="genres-label">Genres</h3>
        <div className="chips" role="group" aria-label="Select genres">
          {ALL_GENRES.map((g) => {
            const active = selectedGenres.includes(g);
            return (
              <button
                key={g}
                type="button"
                className={`chip ${active ? 'active' : ''}`}
                aria-pressed={active}
                onClick={() => onToggleGenre && onToggleGenre(g)}
              >
                {g}
              </button>
            );
          })}
        </div>
      </section>

      <section className="filter-group" aria-labelledby="rating-label">
        <h3 id="rating-label">Minimum Rating</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input
            aria-label="Minimum rating"
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => onMinRatingChange && onMinRatingChange(parseFloat(e.target.value))}
            style={{ flex: 1 }}
          />
          <span aria-live="polite" style={{ minWidth: 40, textAlign: 'right' }}>{minRating.toFixed(1)}</span>
        </div>
      </section>
    </div>
  );
}
