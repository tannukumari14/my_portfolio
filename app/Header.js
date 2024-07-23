import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <a href="#about" className="header-link">About</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
