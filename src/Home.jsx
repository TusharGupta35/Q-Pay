import React from 'react';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Header from './Header';
import HowWorks from './HowWorks.jsx';
import Services from './Services.jsx';

const Home = () => {
    return (
        <div>
            <Header />
            <HowWorks />
            <Aboutus />
            <Services />
            <Contact />
        </div>
    )
}

export default Home
