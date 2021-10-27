import React from 'react';
import Aboutus from './Aboutus';
import './App.css';
import Header from './Header.jsx';
import HowWorks from './HowWorks.jsx';
import Navbar from './Navbar.js';
import Services from './Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowWorks />
      <Aboutus />
      <Services />
    </div>
  );
}

export default App;
