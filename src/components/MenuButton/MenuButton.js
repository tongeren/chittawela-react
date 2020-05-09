import React from 'react';
import Nav from '../Nav/Nav';
import './MenuButton.scss';

const MenuButton = () => {
    return (
        <div className="menu-button">
            <input className="menu-button__checkbox" id="navi-toggle" type="checkbox"/>
                
            <div className="menu-button__background">&nbsp;</div>

            <label className="menu-button__button" for="navi-toggle"> 
                <span id="menu-button__icon" className="icon"></span> 
            </label>

            <div className="menu-button__nav">
                <Nav />
            </div>
        </div>
    );
};

export default MenuButton;