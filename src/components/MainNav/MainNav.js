import React from 'react';
import { Route, NavLink } from "react-router-dom";

const MainNav = () => (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <NavLink to="/" className="navbar-item is-active">
                        <span className="icon has-text-black-bis">
                            <i className="fas fa-lg fa-star"></i>
                        </span>
                        <span className="icon has-text-warning">
                            <i className="fas fa-lg fa-star"></i>
                        </span>
                        <span className="icon has-text-danger">
                            <i className="fas fa-lg fa-star"></i>
                        </span>
                        <span className="icon has-text-info">
                            <i className="fas fa-lg fa-star"></i>
                        </span>
                        <span className="icon has-text-success">
                            <i className="fas fa-lg fa-star"></i>
                         </span>
                    </NavLink>
                </div>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">

                    <NavLink to="/" exact className="navbar-item" activeClassName="is-active">Universes</NavLink>
                    <NavLink to="/stars" className="navbar-item" activeClassName="is-active">Stars</NavLink>
                    <NavLink to="/imprint" className="navbar-item" activeClassName="is-active">Imprint</NavLink>
                </div>
            </div>
        </div>
    </nav>
);

export default MainNav;