import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const UniverseDetails = (props) => {
    const {universe} = props;

    return (
        <div className="content">
            <h2>Universe Details</h2>
            <nav className="navbar">
                <div className="container">
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Add new Star
                            </a>
                            <div className="navbar-item">
                                <span>Click on <button className="delete"></button> do delete a Star</span>
                            </div>
                            <NavLink
                                to={"/universes/" + universe.id + "/edit"}
                                className="navbar-item is-active">aaaa</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <div className="box">
                <h2>
                    <span
                        className="icon"
                        style={{display: "inline", marginRight: "10px"}}>
                        <i className="fas fa-bullseye"></i>
                    </span>{universe.name}
                </h2>
                <p>Current Size: <strong>{universe.starCount}</strong></p>
                <p>Max. Size: <strong>{universe.maxSize}</strong></p>

                <h3>Stars</h3>

                <div className="tags">
                    {
                        universe.stars && universe.stars.map(star => {
                            let className;

                            function tagColor(color) {
                                switch (color) {
                                    case 'RED':
                                        return 'is-danger';
                                    case 'GREEN':
                                        return 'is-success';
                                    case 'YELLOW':
                                        return 'is-warning';
                                    case 'BLUE':
                                        return 'is-info';
                                    case 'BLACK':
                                        return 'is-black';
                                    default:
                                        return '';
                                }
                            }

                            className = tagColor(star.color);

                            return (
                                <span
                                    className={"tag is-large " + className}
                                    key={star.id}>
                                    {star.name}
                                    <button
                                        className="delete"
                                        onClick={() => props.deleteStar(star.id)}>
                                    </button>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )
};

export default UniverseDetails;