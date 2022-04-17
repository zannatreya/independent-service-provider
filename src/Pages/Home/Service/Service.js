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
        <div className='service mb-5'>
            <img src={img} height={200} alt="" />
            <h4> {name}</h4>
            <p>Price: ${price}</p>
            <p><span>{description}</span></p>
            <button className='btn-design' onClick={() => navigateToServiceDetail(id)}>{name}</button>
        </div>
    );
};

export default Service;