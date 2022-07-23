import React from 'react';
import Aboutus from './Aboutus';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar.js';
import Services from './Services.jsx';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Services}></Route>
        <Redirect to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
