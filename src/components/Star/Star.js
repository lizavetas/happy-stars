import React from 'react';

const Star = (props) => {
    const { color, starCount, universeName } = props;
    let displayedColor;

    function iconClass(color) {
        switch (color) {
            case 'RED':
                return 'has-text-danger';
            case 'GREEN':
                return 'has-text-success';
            case 'YELLOW':
                return 'has-text-warning';
            case 'BLUE':
                return 'has-text-info';
            case 'BLACK':
                return 'has-text-black-bis';
            default:
                return 'icon';
        }
    }

    displayedColor = iconClass(color);

    return(
        <div className="box">
            <div className="media">
                <div className="media-left">
                    <span
                        className={"icon " + displayedColor}
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
