import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    const handleSubmit = event => {
        event.preventDefault();

    }
    return (
        <div>
            <div className='container w-50 mx-auto mt-3'>
                <h1 className='text-primary text-center'>Please Booking</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Your Mobile Name</Form.Label>
                        <Form.Control type="number" placeholder="Enter mobile number" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='btn-design' variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Booking
                    </Button>
                </Form>



            </div>
        </div>
    );
};

export default CheckOut;