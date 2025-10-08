import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Header renders the top navigation with brand and route links.
 */
// PUBLIC_INTERFACE
export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Anime Ocean Home">
          <span className="brand-badge" aria-hidden="true">AO</span>
          Anime Ocean
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
          <NavLink to="/discover" className={({ isActive }) => isActive ? 'active' : undefined}>Discover</NavLink>
          <NavLink to="/trending" className={({ isActive }) => isActive ? 'active' : undefined}>Trending</NavLink>
          <NavLink to="/my-ratings" className={({ isActive }) => isActive ? 'active' : undefined}>My Ratings</NavLink>
        </nav>
      </div>
    </header>
  );
}
