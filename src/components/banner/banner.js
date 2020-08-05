import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner">
        <div className="banner__column">
            <div className="banner__left-column">
                <h1 className="banner__label-big">Planktonics.ru</h1>
                <div className="banner__label-small">Наша новая корпоративная сеть!</div>
            </div>
            <div className="banner__right-column">
                <div className="banner__label-midle">Делись</div>
                <div className="banner__label-midle">Узнавай</div>
                <div className="banner__label-midle">Общайся</div>
            </div>
        </div>
    </div>
    )
}

export default Banner;