// 
//  non-portrait mode: Nav
//  portrait:          Nav MenuButton
//
//
import React from 'react';
import Nav from '../Nav/Nav';
import MenuButton from '../MenuButton/MenuButton';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = props => {
    return (
        <div className="menu">
            <Nav className="menu__nav" { ...props } />
            <MenuButton className="menu__menu-button" />
        </div>
    );
};

export default Menu;

Menu.propTypes = {
    
};