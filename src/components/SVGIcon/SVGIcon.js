import React from 'react';
import 

import './SVGIcon.scss';
const SVG_SPRITE_SHEET_LOCATION = "img/svg/icon-defs.svg";

const SVGIcon = props => {
    return (
        <svg className="svg-icon">
            <use href={ SVG_SPRITE_SHEET_LOCATION.concat("#", props.sprite) }></use>       
        </svg>
    );
};

export default SVGIcon;
