import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home; 