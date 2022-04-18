import React from 'react';
import img from '../../images/img.jpg';
import './About.css';


const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div className='my-image d-flex justify-content-center mt-5 mb-3'>
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className='my-info'>
                        <h5 className='text-center'>Zannatul Binta Bahar</h5>
                        <p>Hello, I am Zannatul Binta Bahar. I am a little bit talented,
                            BUT I want to become a freelance/remote website/app developer.
                            I absolutely hated the routine life and other things related to a 9–5 job.
                            Currently I'm working on revising my JavaScript skills.
                            I have worked with HTML and CSS for about 1 years.
                            Now I want to work on JavaScript more as there are better growth opportunities.
                            Planning on doing a certification in MERN stack so I can get into full stack development
                            which I believe is going to be a great career choice for the future.

                            Recently, I completed a BSC degree , including <b>Computer Science & Engineering
                            </b> at the <b>International Islamic University,Chittagong</b> and I am now fully
                            unemployed and searching a good job.</p>
                    </div>
                    <div className='download d-flex justify-content-center mb-5'>
                        <button className='download-btn'>
                            <a target="blank" href='#'>
                                Download My CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;