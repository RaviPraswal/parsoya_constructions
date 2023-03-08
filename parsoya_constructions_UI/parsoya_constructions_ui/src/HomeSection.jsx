import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
class HomeSection extends Component {
    render() {
        return (
            <div>
                Hello Ravi
                <div className='home-image'>
                    <img src={require('./images/saria-cutting.jpg')} alt="Mega City"/>
                </div>
            </div>
        );
    }
}

export default HomeSection;