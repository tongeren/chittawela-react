import React from 'react';
import PropTypes from 'prop-types';
import './Anchor.scss';

const Anchor = props => {
    return (
        <a href={ props.href } className="anchor">{ props.name }</a>
    );
};

export default Anchor;

Anchor.propTypes = {
    href: PropTypes.string,
    name: PropTypes.string.isRequired
}