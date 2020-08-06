import React, { Component } from 'react';
import Banner from '../banner';
import News from '../news';
import Contacts from '../contacts'
import './content.css';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Banner />
                <News />
                <Contacts />
            </div>
        )
    }
}