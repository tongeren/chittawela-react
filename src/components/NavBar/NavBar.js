import React from 'react';
import LogoBox from '../LogoBox/LogoBox';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';

const NavBar = props => {
    return (
        <div className="navbar">
            <LogoBox className="navbar__logobox" { ...props.logobox } />
            <Menu className="navbar__menu" items={ props.navitems } />
        </div>
    );
};

export default NavBar;

NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navitems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired).isRequired
};