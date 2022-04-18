import React from 'react';
import './CustomerSays.css';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { GrStar } from 'react-icons/gr';
import happyClientOne from '../../images/happyClients/says.jpg';
import happyClientTwo from '../../images/happyClients/says-2.jpg';
import happyClientThree from '../../images/happyClients/says-3.jpg';

const CustomerSays = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <h3 className='text-center happy-title'>Happy Clients <BiHappyHeartEyes className='happy-icon' /></h3>
                <div className="col-md-4 col-12 g-4">
                    <div className='customer-says mt-5'>
                        <div className='happy-client'>
                            <div className='client-say'>
                                <div className='d-flex justify-contebt-center single-pic'>
                                    <img src={happyClientOne} alt="" className='img-fluid client-pic' />
                                </div>
                                <div className='text-center client-info'>
                                    <h5>Arpita Dey</h5>
                                    <p>
                                        <b>Status:</b> <span className='headline'>Gaye Holud Photography, wow!!.</span> Incredible photographer, We are satiesfied from his photography. So
                                        my family members want to say that, Thanks Ray Photography
                                    </p>
                                    <p>
                                        <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className='customer-says mt-5'>
                        <div className='special'>
                            <div className='d-flex justify-contebt-center single-pic'>
                                <img src={happyClientTwo} alt="" className='img-fluid client-pic' />
                            </div>
                            <div className='text-center client-info'>
                                <h5>Lora Fatehe</h5>
                                <p>
                                    <b>Status:</b> <span className='headline'>Modeling photography, just wow!!. </span>
                                    Incredible photographer, We are satiesfied from his photography. So
                                    my family members want to say that, Thanks Ray Photography
                                </p>
                                <p>
                                    <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 g-4">
                    <div className='customer-says mt-5'>
                        <div className=''>
                            <div className='d-flex justify-contebt-center single-pic'>
                                <img src={happyClientThree} alt="" className='img-fluid client-pic' />
                            </div>
                            <div className='text-center client-info'>
                                <h5>Nahiduzzaman</h5>
                                <p>
                                    <b>Status:</b> <span className='headline'>Family photography wow!!.</span> Incredible photographer, We are satiesfied from his photography. So
                                    my family members want to say that, Thanks Ray Photography
                                </p>
                                <p>
                                    <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSays;