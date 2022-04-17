import React from 'react';
import Service from '../Service/Service';
import './Services.css';


import hospital from '../../../images/hospital.png';
import home from '../../../images/home.png';
import online from '../../../images/online.png';

const services = [
    { id: 1, name: 'Hospital Service', description: 'xyz', price: 1000, img: hospital },
    { id: 2, name: 'Home Service', description: 'xyz', price: 1570, img: home },
    { id: 3, name: 'Online Service', description: 'xyz', price: 800, img: online },

];
const Services = () => {

    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='service-title py-5'>Our Services </h2>
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