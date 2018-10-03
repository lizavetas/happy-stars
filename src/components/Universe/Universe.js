import React from 'react';

const Universe = (props) => {

    const {name, starCount,  maxSize} = props;

    return(
        <div className="box">
            <div className="content">
                <h2>
                    <span
                        className="icon"
                        style={{display: "inline", marginRight: "10px"}}>
                        <i className="fas fa-bullseye"></i>
                    </span>{name}
                </h2>
                <p>Current Size: <strong>{starCount}</strong></p>
                <p>Max. Size: <strong>{maxSize}</strong></p>
            </div>
            <nav className="level is-mobile">
                <div className="level-left">
                    <a className="level-item button is-primary">Details</a>
                </div>
            </nav>
        </div>
    )
};

export default Universe;
