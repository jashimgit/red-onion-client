import React from 'react';
import Navbar from './../navbar/Navbar';
import Header from './../header/Header';
import Food from './../food/Food';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Food/>
        </div>
    );
};

export default Home;