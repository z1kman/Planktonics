import React from 'react';
import './header.css';

const Header = () => {
    return(      
        <header className="header"> 
            <div className="header__inner">
                <div className="header__burger">
                    <i className="fa fa-bars" aria-hidden="false"></i>
                </div>
                <div className="header__label"><a href="/home">Planktonics</a></div>
                <div className="header__menu">
                        <a className="header__menu-item" href="/home#news" >Новости</a>
                        <a className="header__menu-item" href="/communication" >Общение</a>
                        <a className="header__menu-item" href="/home#contacts" >Контакты</a>
                </div>
            </div>
        </header>
    )
}

export default Header;