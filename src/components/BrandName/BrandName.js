import React from 'react';
import PropTypes from 'prop-types';
import './BrandName.scss';

const BrandName = props => {
    return (
        <span className="brandname">{ props.name }</span>
    );
};

export default BrandName;

BrandName.propTypes = {
    name: PropTypes.string.isRequired
};
