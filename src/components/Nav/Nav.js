import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="nav-menu">
            <ul id="nav-list" className="nav-menu__list">
                <li className="nav-menu__item"><a href="#challenge" class="nav-menu__link">Challenge</a></li> 
                <li className="nav-menu__item"><a href="#foundation" class="nav-menu__link">Foundation</a></li>
                <li className="nav-menu__item"><a href="#transformation" class="nav-menu__link">Transformation</a></li>
                <li className="nav-menu__item"><a href="#sanctuary" class="nav-menu__link">Sanctuary</a></li>
                <li className="nav-menu__item"><a href="#login" class="nav-menu__link btn btn--white-transparent">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;