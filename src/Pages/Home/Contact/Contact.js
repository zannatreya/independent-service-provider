import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="section-title">
                <h3 className="text-center">Contact Me</h3>
                <hr className="hr-style" />
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <form method="post" enctype="text/plain" className="was-validated">

                        <div className="form-group mb-1">
                            <label for="fullname">Fullname</label>
                            <input type="text" className="form-control" name="fullname" required />
                            <div className="valid-feedback">valid</div>
                            <div className="invalid-feedback" style={{ color: 'black' }}>Enter fullname before submitting the form</div>
                        </div>

                        <div className="form-group mb-1">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" name="email" required />
                        </div>

                        <div className="form-group mb-2">
                            <label for="message">Message</label>
                            <textarea style={{ resize: 'none' }} name="" id="" className="form-control" cols="30" rows="4"></textarea>
                        </div>

                        <div className="form-group text-center mb-1">
                            <input type="submit" className="btn btn-primary mr-3" value="submit" />
                            <input type="reset" className="btn btn-primary" value="reset" />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;