import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import BrandName from '../BrandName/BrandName';
import './LogoBox.scss';

const LogoBox = props => {
    return ( 
        <div className="logo-box">
            <Logo scr={ props.logo }/>
            <BrandName name={ props.brandname} />
        </div>
    );
};

export default LogoBox;

LogoBox.propTypes = {
    // orientation: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    brandname: PropTypes.string.isRequired
};