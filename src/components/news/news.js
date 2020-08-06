import React, { Component } from 'react';
import './news.css';

export default class News extends Component {
    render() {
        return (
            <div className="news">
                <a className="news_label" name="news">
                    Новости
                </a>
                <div className="news__items">          
                    <div className="news__item">
                            <h3 className="news__item-label">
                                День рождения!
                            </h3>
                            <div className="news__item-text">
                                Сегодня у Валерии Петровой день рождения! дайвайте поздравим ее!
                            </div>
                            <div className="news__item-date">
                                06.07.2020
                            </div>
                    </div>

                    <div className="news__item">
                            <h3 className="news__item-label">
                                Внимание! Злоумышленники!
                            </h3>
                            <div className="news__item-text">
                                Сегодня, на нашу корпоративную почту была совершена ddos атака.
                            </div>
                            <div className="news__item-date">
                                05.07.2020
                            </div>
                    </div>

                    <div className="news__item">
                            <h3 className="news__item-label">
                                УРА!
                            </h3>
                            <div className="news__item-text">
                                Наш филиал в Тюмени достиг нового рекорда по продажам!
                            </div>
                            <div className="news__item-date">
                                04.07.2020
                            </div>
                    </div>

                    <div className="news__item">
                            <h3 className="news__item-label">
                                Новые открытия!
                            </h3>
                            <div className="news__item-text">
                                В течение 2020года планируется открытие еще 5-ти филиалов по России.
                            </div>
                            <div className="news__item-date">
                                12.07.2020
                            </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}