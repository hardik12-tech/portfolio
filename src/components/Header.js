import React from 'react';
// import '../assets/styles/style.css'; // Import your CSS styles here

const Header = () => {
    return (
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;