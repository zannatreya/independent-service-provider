import React from 'react';

const Blogs = () => {
    return (
        <div >
            <h1 className='text-center mb-3'>Blogs</h1>
            <div>
                <div className='service mb-4 q-1'>
                    <h5 className='fw-bold'>Difference between Authorization and Authentication</h5>
                    <p className='fw-bold'>Authentication:<span> Authentication is the process of identifying someone's identity by
                        assuring that the person is the same as what he is claiming for.It is used by both server
                        and client. The server uses authentication when someone wants to access the information,
                        and the server needs to know who is accessing the information. The client uses it when he
                        wants to know that it is the same server that it claims to be.
                        The authentication by the server is done mostly by using the username and password.
                        Other ways of authentication by the server can also be done using cards, retina scans,
                        voice recognition, and fingerprints.</span></p>
                    <p className='fw-bold'>Authorization: Authorization is the process of granting someone to do something.
                        It means it a way to check if the user has permission to use a resource or not.
                        It defines that what data and information one user can access. It is also said as AuthZ.
                        The authorization usually works with authentication so that the system could know who is accessing the information.
                        Authorization is not always necessary to access information available over the internet.</p>
                </div>
                <div className='service mb-4 q-2'>
                    <h5 className='fw-bold'>Why are you using firebase? What other options do you have to implement
                        authentication?</h5>
                    <p className='fw-bold'>Firebase is used for many purposes that can help your apps to develop,
                        grow and make it a quality app.
                        Moreover, Firebase is made with a developer in mind to solve all the
                        issues they might face when making an app.authentication by a server
                        entails the use of a user name and password. Other ways to
                        authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='service q-3 mb-4'>
                    <h5 className='fw-bold'>What other services does firebase provide other than authentication?</h5>
                    <p className='fw-bold'> There are many services which Firebase provides, Most useful of them are:
                        Cloud Firestore.
                        Cloud Functions.
                        Authentication.
                        Hosting.
                        Cloud Storage.
                        Google Analytics.
                        Predictions.
                        Cloud Messaging.</p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;