import React from 'react';
import { Accordion } from 'react-bootstrap';
import { MdQuestionAnswer } from 'react-icons/md';
import { BsQuestionOctagonFill } from 'react-icons/bs'
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <h3 className='text-center'>Question & Answer <MdQuestionAnswer className='answer' /></h3>
                    <div className='my-5'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Q#1. Difference between authorization and authentication  <BsQuestionOctagonFill className='question' /></Accordion.Header>
                                <Accordion.Body>
                                    <strong>Authorization</strong>
                                    <ul>
                                        <li>Authentication verifies who the user is.</li>
                                        <li>It works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                                        <li>It is the first step of a good identity and access management process.</li>
                                        <li>It is visible to and partially changeable by the user.</li>
                                        <li><em>Example:</em> By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</li>
                                    </ul>
                                    <strong>Authentication</strong>
                                    <ul>
                                        <li>Authorization determines what resources a user can access.</li>
                                        <li>It works through settings that are implemented and maintained by the organization.</li>
                                        <li>It always takes place after authentication.</li>
                                        <li>It isn’t visible to or changeable by the user.</li>
                                        <li><em>Example:</em> Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Q#2. Why are you using firebase? What other options do you have to implement authentication <BsQuestionOctagonFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. <br />
                                    Yes, there are many lot of option -
                                    <ul>
                                        <li>Sentry</li>
                                        <li>Parse </li>
                                        <li>Back4app</li>
                                        <li>Kinvey </li>
                                        <li>Kuzzle</li>
                                        <li>Backendless</li>
                                        <li>e.t.c</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Q#3. What other services does firebase provide other than authentication <BsQuestionOctagonFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    There are many services which Firebase provides, Most useful of them are:
                                    <ul>
                                        <li>Cloud Firestore.</li>
                                        <li>Cloud Messaging.</li>
                                        <li>Cloud Functions.</li>
                                        <li>Cloud Storage.</li>
                                        <li>Hosting.</li>
                                        <li>Google Analytics.</li>
                                        <li>Predictions.</li>
                                        <li>e.t.c</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;