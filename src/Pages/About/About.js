import React from 'react';
import img from '../../images/img.jpg';

const About = () => {
    return (
        <div>
            <h3 className='text-center mb-3'>About Me</h3>
            <div className='text-center mb-3'>
                <img src={img} alt="" />

            </div>
            <div>
                <h4>Name: Zannatul Binta Bahar</h4>
                <h5>Goal: </h5>
            </div>
        </div>
    );
};

export default About;