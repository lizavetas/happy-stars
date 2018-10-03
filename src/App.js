import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import UniverseDetails from './components/UniverseDetail/UniverseDetails';
import MainNav from "./components/MainNav/MainNav";

import {fetchData, fetchStars, fetchUniverse, deleteStar} from './store/actions/index';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // wenn fail => data.universes = {} => weiter getStars
        // wenn success => data.universes = response.data => weiter getStars
        // success getStars.data
        // fail {}
        this.props.fetchUniverse().then(response => {
            this.props.fetchStars().then(response => {
            });
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <section className="hero is-primary">
                        <div className="hero-head">
                            <MainNav/>
                        </div>
                        <div className="hero-body">
                            <div className="container">
                                <h2 className="title">
                                    Happy Stars
                                </h2>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <Route exact path='/' render={() => (
                                <Universes
                                    universes={this.props.universes}
                                    columnSize={3}
                                />
                            )}/>
                            <Route exact path='/universes' render={() => (
                                <Universes
                                    universes={this.props.universes}
                                    columnSize={3}
                                />
                            )}/>
                            <Route path='/stars' render={() => (
                                <Stars
                                    stars={this.props.stars}
                                    columnSize={3}
                                />
                            )}/>
                            <Route path='/universes/:id' render={(props) => {
                                if (this.props.universes) {
                                    let universe = this.props.universes.find(universe => {
                                        return universe.id.toString() === props.match.params.id;
                                    });
                                    return <UniverseDetails
                                        id={props.match.params.id}
                                        universe={universe}
                                        deleteStar={this.props.deleteStar}
                                    />
                                } else {
                                    return null;
                                }
                            }}/>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

const mapStatesToProps = (state) => {

    if (state.exampleReducer.universes && state.exampleReducer.universes.universes
        && state.exampleReducer.stars && state.exampleReducer.stars.stars) {

        state.exampleReducer.universes.universes.forEach(universe => {
            universe.starCount = state.exampleReducer.stars.stars.filter(star => {
                return universe.id === star.universeId;
            }).length;
        });

        state.exampleReducer.stars.stars.forEach(star => {
            state.exampleReducer.universes.universes.map(universe => {
                if (star.universeId === universe.id) {
                    let stars = [];
                    stars.push(star);
                    universe.stars = stars;
                    star.starCount = universe.starCount;
                    star.universeName = universe.name;
                }
                return universe
            });
        });
    }

    return {
        stars: state.exampleReducer.stars.stars,
        universes: state.exampleReducer.universes.universes
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        fetchUniverse,
        fetchStars,
        fetchData,
        deleteStar
    },
    dispatch
);

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(App);

