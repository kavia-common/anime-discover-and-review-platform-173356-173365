import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import './styles/App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Home from './routes/Home';
import Discover from './routes/Discover';
import Trending from './routes/Trending';
import MyRatings from './routes/MyRatings';

/**
 * App sets up the primary layout and routing. It applies the Ocean Professional
 * dark theme and renders header, sidebar, main content, and footer.
 */
// PUBLIC_INTERFACE
function App() {
  // Example filter state for sidebar (no external API)
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const handleToggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleMinRatingChange = (val) => setMinRating(val);

  const filters = useMemo(
    () => ({ selectedGenres, minRating }),
    [selectedGenres, minRating]
  );

  return (
    <div className="app-root">
      <div className="bg-accent" aria-hidden="true" />
      <Header />

      <div className="layout">
        <aside className="sidebar" aria-label="Filters and genres">
          <Sidebar
            selectedGenres={selectedGenres}
            onToggleGenre={handleToggleGenre}
            minRating={minRating}
            onMinRatingChange={handleMinRatingChange}
          />
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home filters={filters} />} />
            <Route path="/discover" element={<Discover filters={filters} />} />
            <Route path="/trending" element={<Trending filters={filters} />} />
            <Route path="/my-ratings" element={<MyRatings />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
