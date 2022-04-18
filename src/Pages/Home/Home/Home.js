import React from 'react';
import Banner from '../Banner/Banner';
import CustomerSays from '../CustomerSays/CustomerSays';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CustomerSays></CustomerSays>
        </div>
    );
};

export default Home;