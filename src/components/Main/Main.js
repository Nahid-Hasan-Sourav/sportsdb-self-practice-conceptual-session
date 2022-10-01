import React from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <Nav></Nav>
            <Banner></Banner>
            <Home></Home>
        </div>
    );
};

export default Main;