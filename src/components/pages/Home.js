import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

const pagelocation = 'Homepage'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Onitir - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer  footer={{ style:"", logo:"assets/img/logo-white.png" }}/>
            </Fragment>
        );
    }
}

export default Home;