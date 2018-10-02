import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import MainNav from "./components/MainNav/MainNav";

const Header = () => (
    <section className="hero is-primary">
        <div className="hero-head">
            <MainNav/>
        </div>
    </section>
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header title="Title"/>
                    <section className="section">
                    <div className="container">
                        <Route exact path="/" component={Universes}/>
                        <Route path="/stars" component={Stars}/>
                    </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;

