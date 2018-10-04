import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
                    <NavLink
                        to={"/universes/" + props.id}
                        className="level-item button is-primary">
                        Details
                    </NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Universe;
