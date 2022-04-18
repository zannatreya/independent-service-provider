import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Background (1).png';
import banner2 from '../../../images/Background (4).png';
import banner3 from '../../../images/Background.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className='d-flex justify-content-center'>
                        <div className='mt-5'>
                            <h1>Doctorolla</h1>
                            <p className='fs-5 fw-light font-monospace"'>
                                A doctor is a medical specialist who treats patients. Doctors diagnose,
                                treat, and advise people with illnesses, ailments, and injuries.
                                Their many responsibilities include patient examination,
                                collecting patient information, performing diagnostic tests,
                                and directly treating diseases. For virtually every major organ system in the human body
                                , there is a specific type of doctor. For example: ophthalmologist, dentist, cardiologist,
                                rheumatologist, and dermatologist.
                            </p>
                            <a href="/about">
                                <button class="btn-design mb-5">Check me</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner3} height={450}
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner2} height={450}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner1} height={450}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
}




export default Banner;