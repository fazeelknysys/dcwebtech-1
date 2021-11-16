import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <section className="call-to-action">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cat-img">
                            <img src={process.env.PUBLIC_URL + "/assets/img/cta/cta-img.png"} alt="img" />
                        </div>
                        <div className="cta-text">
                            <div className="row align-items-end">
                                <div className="col-lg-5 offset-lg-5 col-md-7 offset-md-5">
                                    <div className="section-title pl-30 left-border">
                                        <span className="title-tag">Get Started</span>
                                        <h2>We are here for you to get your project started.</h2>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="cat-link"><i className="fal fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;