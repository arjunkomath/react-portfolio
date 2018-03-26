import React, { Component } from 'react';
import './Home.css';

const Home = class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="tagline">“I'm a Full Stack Engineer, Product Maker and Designer, passionate about technology and strongly believe in making lives better using technology.”</h1>

                <h4 style={{ marginTop: '20px' }} className="title">// Front-End Engineering Toolbox</h4>
                <p>React, AngularJS</p>
                <h4 style={{ marginTop: '20px' }} className="title">// Back-End Engineering Toolbox</h4>
                <p>Node, PHP, Python, Java</p>
                <h4 style={{ marginTop: '20px' }} className="title">// Mobile Platforms</h4>
                <p>React Native (Android and iOS)</p>
                <h4 style={{ marginTop: '20px' }} className="title">// DevOps Toolbox</h4>
                <p>Amazon Web Services, Docker</p>
            </div>
        );
    }
}

export default Home;
