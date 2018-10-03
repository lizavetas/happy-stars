import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import MainNav from "./components/MainNav/MainNav";

import instance from './utils/happyStarAxiosInstance';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stars: {
                stars: [
/*                    {
                        "id": 115,
                        "name": "string",
                        "color": "RED",
                        "universeId": 114
                    },
                    {
                        "id": 117,
                        "name": "string",
                        "color": "RED",
                        "universeId": 113
                    },
                    {
                        "id": 125,
                        "name": "stringgg",
                        "color": "GREEN",
                        "universeId": 124
                    },
                    {
                        "id": 128,
                        "name": "string",
                        "color": "RED",
                        "universeId": 114
                    },
                    {
                        "id": 132,
                        "name": "string",
                        "color": "RED",
                        "universeId": 113
                    },
                    {
                        "id": 145,
                        "name": "string",
                        "color": "RED",
                        "universeId": 144
                    }*/
                ],
            },
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
    }

    componentDidMount() {

        instance.get('api/star')
            .then(response => {
                // handle success
                this.setState({
                    stars: response.data
                });

                // @todo vereinfachen
                this.state.universes.universes.forEach(universe => {
                    universe.starCount = response.data.stars.filter(star => {
                        return universe.id === star.universeId;
                    }).length;

                    universe.greenStarCount = response.data.stars.filter(star => {
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
                    }).length;
                });

                response.data.stars.forEach(star => {
                   this.state.universes.universes.map(universe => {
                        if (star.universeId === universe.id) {
                            star.starCount = universe.starCount;
                            star.universeName = universe.name;
                        }
                       return universe
                    });
                });

                this.setState({
                    stars: this.state.stars,
                    universes: this.state.universes
                });

                //console.log(this.state);

            })
            .catch(error => {
                // handle error
                //console.log(error);
            })
            .then(() => {
                // always executed
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
                                    universes={this.state.universes}
                                />
                            )}/>
                            <Route path='/stars' render={() => (
                                <Stars
                                    stars={this.state.stars}
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

export default App;

