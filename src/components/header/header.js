import React from 'react';
import './header.css';

const Header = () => {
    return(      
        <header className="header"> 
            <div className="header__inner">
                <div className="header__burger">
                    <i className="fa fa-bars" aria-hidden="false"></i>
                </div>
                <div className="header__label">Planktonics</div>
                    <div className="header__menu">
                        <a className="header__menu-item" href="#" >Новости</a>
                        <a className="header__menu-item" href="#" >Общение</a>
                        <a className="header__menu-item" href="#" >Контакты</a>
                    </div>
                <div className="header__login">
                    <a className="header__login-item" href="#">Войти</a>
                </div>
            </div>
        </header>
    )
}

export default Header;