import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav-container">
      <Link to="/now-playing" className="nav-item">Now Playing</Link>
      <Link to="/top-movies" className="nav-item">Top Rated</Link>
      <Link to="/search" className="nav-item">Search</Link>
    </div>
  );
};

export default Nav;
