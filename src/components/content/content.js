import React, { Component } from 'react';
import Banner from '../banner';
import './content.css';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Banner />
            </div>
        )
    }
}