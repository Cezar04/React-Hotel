import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Super Hotel" subtitle="Cele Mai smechere Camere de la 200$">
                <Link to='/rooms' className='btn-primary'>
                  Camerele Noastre
                </Link>
            </Banner>
        </Hero> 
        <Services />
        <FeaturedRooms />
       
        </>
    )
}

export default Home
