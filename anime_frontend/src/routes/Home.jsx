import React, { useMemo } from 'react';
import AnimeCard from '../components/AnimeCard';

const PLACEHOLDER = [
  { id: 1, title: 'Samurai Blaze', genres: ['Action', 'Drama'], rating: 4.5, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Neon Skyline', genres: ['Sci-Fi', 'Mystery'], rating: 4.0, image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Moonlit Garden', genres: ['Romance', 'Fantasy'], rating: 3.5, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Crimson Tournament', genres: ['Sports', 'Action'], rating: 4.8, image: 'https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Echoes of Winter', genres: ['Drama'], rating: 4.2, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Shadow Circuit', genres: ['Sci-Fi', 'Action'], rating: 3.8, image: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, title: 'Forest Spirits', genres: ['Fantasy', 'Adventure'], rating: 4.6, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop' },
];

function applyFilters(data, filters) {
  const { selectedGenres = [], minRating = 0 } = filters || {};
  return data.filter(item => {
    const hasGenres = selectedGenres.length === 0 || selectedGenres.some(g => item.genres.includes(g));
    const meetsRating = item.rating >= minRating;
    return hasGenres && meetsRating;
  });
}

/**
 * Home route shows a grid of anime cards with filters applied.
 * Props:
 * - filters: { selectedGenres: string[], minRating: number }
 */
// PUBLIC_INTERFACE
export default function Home({ filters }) {
  const items = useMemo(() => applyFilters(PLACEHOLDER, filters), [filters]);

  return (
    <section aria-labelledby="home-title">
      <h2 id="home-title" className="visually-hidden">Home</h2>
      <div className="grid">
        {items.slice(0, 6).map(anime => (
          <AnimeCard key={anime.id} {...anime} />
        ))}
      </div>
    </section>
  );
}
