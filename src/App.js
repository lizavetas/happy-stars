import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import MainNav from "./components/MainNav/MainNav";

import { fetchData, fetchStars, fetchUniverse } from './store/actions/index';

import axios from 'axios';
import instance from "./utils/happyStarAxiosInstance";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            universes: {
                universes: [
                    {
                        "id": 113,
                        "name": "string1",
                        "maxSize": 20
                    },
                    {
                        "id": 114,
                        "name": "string2",
                        "maxSize": 120
                    },
                    {
                        "id": 124,
                        "name": "string3",
                        "maxSize": 20
                    },
                    {
                        "id": 143,
                        "name": "string",
                        "maxSize": 10
                    },
                    {
                        "id": 144,
                        "name": "string4",
                        "maxSize": 20
                    }
                ]
            }
        }


    /*    function getUserAccount() {
            return axios.get('api/star')
                .then((response) => {

                    return response;
                })
                .catch((response) => {
                    return(response);
                })
        }

        function getUserPermissions() {
            return axios.get('/api/universe');
        }

        axios.all([getUserAccount(), getUserPermissions()])
            .then(axios.spread(function (acct, perms) {
                // Both requests are now complete
                console.log(acct, perms);
            }));*/

 /*       const getStars = () => {
            return axios.get('http://localhost:3200/ai/star')
                .then(response => {
                    return response
                }).catch(error => {
                    return error
                });
            };

        const getUniverses = () => {
            return axios.get('http://localhost:3200/api/universe')
                .then(response => {
                    return response
                })
                .catch(error => {
                    return error
                });
        };

        const countStars = async () => {
            return getStars()
                .then(response => {
                    if (response.data.stars) {
                        console.log(`Got ${Object.entries(response.data.stars).length} Stars`)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        };


        countStars()*/;

  /*      axios.all([getUniverses(), getStars()])
            .then(response => {
                // Both requests are now complete
                console.log(122222, response);
            })
            .catch(error => {
                console.log('error');
            });*/

    }

    componentDidMount() {
        // wenn fail => data.universes = {} => weiter getStars
        // wenn success => data.universes = response.data => weiter getStars
        // success getStars.data
        // fail {}
        this.props.fetchUniverse().then(response => {
            this.props.fetchStars().then(response => {
            })
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
                            <Route path='/stars' render={() => (
                                <Stars
                                    stars={this.props.stars}
                                    columnSize={3}
                                />
                            )}/>
                            <Route path='/universes/:id' component={Universes}/>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

const mapStatesToProps = (state) => {
    console.log('state', state);

    if (state.exampleReducer.universes && state.exampleReducer.universes.universes
        && state.exampleReducer.stars && state.exampleReducer.stars.stars) {
        // @todo vereinfachen
        state.exampleReducer.universes.universes.forEach(universe => {
            universe.starCount = state.exampleReducer.stars.stars.filter(star => {
                return universe.id === star.universeId;
            }).length;

   /*         universe.greenStarCount = response.data.stars.filter(star => {
                if (universe.id !== star.universeId) {
                    return;
                }
                return star.color === 'GREEN';
            }).length;

            universe.redStarCount = response.data.stars.filter(star => {
                if (universe.id !== star.universeId) {
                    return;
                }
                return star.color === 'RED';
            }).length;*/
        });

        state.exampleReducer.stars.stars.forEach(star => {
            state.exampleReducer.universes.universes.map(universe => {
                if (star.universeId === universe.id) {
                    star.starCount = universe.starCount;
                    star.universeName = universe.name;
                }
                return universe
            });
        });
    }


  /*  response.data.stars.forEach(star => {
        this.state.universes.universes.map(universe => {
            if (star.universeId === universe.id) {
                star.starCount = universe.starCount;
                star.universeName = universe.name;
            }
            return universe
        });
    });*/


    console.log('state', state);

    return {
        stars: state.exampleReducer.stars.stars,
        universes: state.exampleReducer.universes.universes
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchData, fetchStars, fetchUniverse}, dispatch);

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(App);

