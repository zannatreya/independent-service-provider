import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service mb-5 single-pic'>
            <div className='d-flex justify-content-center single-pic'>
                <img src={img} className='img-fluid client-pic' height={200} alt="" />

            </div>
            <div className='text-center client-info'>
                <h4 className='headline'> {name}</h4>
                <p>Price: ${price}</p>
                <p><span>{description}</span></p>
                <button className='btn-design' onClick={() => navigateToServiceDetail(id)}>{name}</button>
            </div>
        </div>
    );
};

export default Service;