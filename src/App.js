import React from 'react';
import './assets/styles/style.css'; // Import your CSS styles here
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';

const App = () => {
  return (
    <div className="app">
      <Header />
        <PortfolioItem />
      <Footer />
    </div>
  );
};

export default App;