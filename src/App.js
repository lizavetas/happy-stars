import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import UniverseDetails from './components/UniverseDetail/UniverseDetails';
import MainNav from "./components/MainNav/MainNav";
import AddNewStar from "./components/AddNewStar/AddNewStar";
import AddNewUniverse from "./components/AddNewUniverse/AddNewUniverse";

import {fetchStars, fetchUniverse, deleteStar, postNewUniverse} from './store/actions/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUniverse().then(response => {
            this.props.fetchStars().then(response => {
            });
        });
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
                            <Route exact path='/universes/:id' render={(props) => {
                                if (this.props.universes) {
                                    let universe = this.props.universes.find(universe => {
                                        return universe.id.toString() === props.match.params.id;
                                    });

                                    if (!universe) {
                                        return null;
                                    }
                                    return (
                                        <UniverseDetails
                                            id={props.match.params.id}
                                            universe={universe}
                                            deleteStar={this.props.deleteStar}
                                        />
                                    )
                                } else {
                                    return null;
                                }
                            }}/>
                            <Route path='/universes/:id/addStar' render={(props) => {
                                if (this.props.universes) {
                                    let universe = this.props.universes.find(universe => {
                                        return universe.id.toString() === props.match.params.id;
                                    });

                                    if (!universe) {
                                        return null;
                                    }

                                    return (
                                        <AddNewStar
                                            id={props.match.params.id}
                                            universeName={universe.name}
                                        />
                                    )

                                } else {
                                    return null;
                                }
                            }}/>
                            <Route path='/universes/add' render={() => {
                                return (
                                    <AddNewUniverse
                                        postNewUniverse={this.props.postNewUniverse}/>
                                )
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

    console.log('state', state);
    return {
        stars: state.exampleReducer.stars.stars,
        universes: state.exampleReducer.universes.universes
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        fetchUniverse,
        fetchStars,
        deleteStar,
        postNewUniverse
    },
    dispatch
);

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(App);

