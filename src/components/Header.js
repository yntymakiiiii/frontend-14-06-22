import React from 'react';
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return (
        <>
            <header id={'header'}>
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to={'/'}>
                                LOGO
                            </Link>
                        </div>
                        <div className="header__menu">
                            <nav className={'header__menu__nav'}>
                                <NavLink to={'/'} className={'header__menu__nav__item'}>Home</NavLink>
                                <NavLink to={'/popular'} className={'header__menu__nav__item'}>Popular</NavLink>
                                <NavLink to={'/contact'} className={'header__menu__nav__item'}>Contact</NavLink>
                                <NavLink to={'/about'} className={'header__menu__nav__item'}>About</NavLink>
                            </nav>
                            <div className="header__menu__buttons">
                                <button className="header__menu__buttons__item">sign in</button>
                                <button className="header__menu__buttons__item">sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;