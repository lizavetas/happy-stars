import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";

const MainNav = () => (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item">
                            <span className="icon has-text-black-bis">
                                <i className="fas fa-star"></i>
                            </span>
                    <span className="icon has-text-warning">
                                <i className="fas fa-star"></i>
                            </span>
                    <span className="icon has-text-danger">
                                <i className="fas fa-star"></i>
                            </span>
                    <span className="icon has-text-info">
                                <i className="fas fa-star"></i>
                            </span>
                    <span className="icon has-text-success">
                                <i className="fas fa-star"></i>
                            </span>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                          </span>
            </div>
            <div className="navbar-menu is-primary">
                <div className="navbar-end">
                    <Link to="/" className="navbar-item is-active">Universes</Link>
                    <Link to="/stars" className="navbar-item">Stars</Link>
                    <Link to="/imprint" className="navbar-item">Imprint</Link>
                </div>
            </div>
        </div>
    </nav>
);

const Header = () => (
    <section className="hero">
        <div className="hero-head is-primary">
           <MainNav />
        </div>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    STARS
                </h1>
                <h2 className="subtitle">
                    A collection of Stars
                </h2>
            </div>
        </div>
    </section>
);

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Universes} />
                        <Route path="/stars" component={Stars} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

