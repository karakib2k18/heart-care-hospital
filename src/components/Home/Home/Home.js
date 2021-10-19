import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import FrequentlyAsk from '../FrequentlyAsk/FrequentlyAsk';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FrequentlyAsk></FrequentlyAsk>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;