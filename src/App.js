import React from 'react';
import Aboutus from './Aboutus';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar.js';
import Services from './Services.jsx';
import { Route, Switch } from "react-router";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Services}></Route>
        <Route component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
