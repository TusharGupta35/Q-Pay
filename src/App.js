import React from 'react';
import './App.css';
import Header from './Header.jsx';
import HowWorks from './HowWorks';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowWorks />
    </div>
  );
}

export default App;
