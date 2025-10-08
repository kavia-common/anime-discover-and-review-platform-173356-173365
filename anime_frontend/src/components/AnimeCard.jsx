import React from 'react';

/**
 * Simple star rating display (0-5 in 0.5 steps).
 */
function Stars({ value = 0 }) {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const diff = value - (i - 1);
    // full star if diff >= 1, half if between 0.25-0.75
    const isFull = diff >= 1;
    const isHalf = diff >= 0.25 && diff < 1;
    stars.push(
      <span key={i} aria-hidden="true">
        {isFull ? '★' : isHalf ? '✫' : '☆'}
      </span>
    );
  }
  return <span className="rating" aria-label={`Rating ${value} of 5`}>{stars}</span>;
}

/**
 * AnimeCard renders a poster, title, genres, and rating.
 * Props:
 * - title: string
 * - image: string
 * - genres: string[]
 * - rating: number
 */
// PUBLIC_INTERFACE
export default function AnimeCard({ title, image, genres = [], rating = 0 }) {
  return (
    <article className="card" role="article" aria-label={title}>
      <img className="card-media" src={image} alt={`${title} cover`} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="card-genres">
          {genres.map((g) => (
            <span key={g} className="genre-badge">{g}</span>
          ))}
        </div>
        <Stars value={rating} />
      </div>
    </article>
  );
}
