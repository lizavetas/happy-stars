import React from 'react';

import { textColor } from '../../utils/layoutHelpers'

const Star = (props) => {
    const { color, starCount, universeName } = props;
    let className = textColor(color);

    return(
        <div className="box">
            <div className="media">
                <div className="media-left">
                    <span
                        className={"icon " + className}
                        style={{display: "inline", marginRight: "5px"}}>
                        <i className="fas fa-star fa-3x"></i>
                    </span>
                </div>
                <div className="media-content">
                    <p className="title is-4">John Smith </p>
                    <div className="subtitle is-6">
                        <p>From <strong>{universeName}</strong> Universe ({starCount} Stars)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Star;
