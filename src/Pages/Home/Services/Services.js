import React from 'react';
import Service from '../Service/Service';
import './Services.css';


import hospital from '../../../images/hospital.jpg';
import home from '../../../images/home.jpg';
import online from '../../../images/online.jpg';

const services = [
    { id: 1, name: 'will smith', description: 'xyz', price: 570, img: hospital },
    { id: 2, name: 'Chris Rock', description: 'xyz', price: 570, img: home },
    { id: 3, name: 'Dwayne Rock', description: 'xyz', price: 570, img: online },

];
const Services = () => {

    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='service-title'>Our Services </h2>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;