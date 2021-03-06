import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
       <Hero>
           <Banner title="ERROR" subtitle="Page Not Found">
               <Link to='/' className="btn-primary">Return Home</Link>
           </Banner>
       </Hero>
    )
}
