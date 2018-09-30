import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import MainNav from "./components/MainNav/MainNav";

const Header = () => (
    <section className="hero">
        <div className="hero-head is-primary">
           <MainNav />
        </div>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                   title
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
                    <Header title={"Title"}/>
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

