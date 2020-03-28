import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        let lang = 'RU'
        return (
            <div className="header">
                <div className="header_logo"/>
                <div className="header_langChoose">
                    <span className="header_langChoose__lang">{lang}</span>
                    <div className="header_langChoose__arrow"></div>
                </div>
                    <div className="header_search">
                        <button type="submit" className="header_search__searchButton"/>
                        <input type="text" className="header_search__searchTerm" placeholder="Поиск по сайту"/>
                    </div>
                    <div className="header_registration"><span>Зарегистрироваться</span></div>
                    <div className="header_enter"><span>Войти</span></div>
            </div>
        );
    }
}

export default Header;
