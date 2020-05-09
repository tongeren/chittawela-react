import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = props => {
    return (
        <img id="logo" className="logo" src={ props.src } alt="Logo"></img>
    );
};

export default Logo;

Logo.propTypes = {
    src: PropTypes.string.isRequired
}; 