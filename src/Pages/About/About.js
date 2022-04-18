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
                <h5>Goal:I want to become a freelance/remote website/app developer.
                    I absolutely hated the routine life and other things related to a 9–5 job.
                    Currently I'm working on revising my JavaScript skills.
                    I have worked with HTML and CSS for about 1 years.
                    Now I want to work on JavaScript more as there are better growth opportunities.
                    Planning on doing a certification in MERN stack so I can get into full stack development
                    which I believe is going to be a great career choice for the future. </h5>
            </div>
        </div>
    );
};

export default About;