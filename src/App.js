import React from 'react';
import Aboutus from './Aboutus';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
