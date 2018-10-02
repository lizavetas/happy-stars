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

    initState() {
        console.log(this.state);


    }

    componentDidMount() {
        this.initState();

        instance.get('api/star')
            .then(response => {
                // handle success

                console.log(122222, response.data.stars);
                this.setState({
                    stars: response.data.stars
                })

                console.log(11111, this.state);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        /*fetch("api/universe")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });

                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )*/
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
                                <Universes universes={this.state.universes}/>
                            )}/>
                            <Route path='/stars' render={() => (
                                <Stars stars={this.state.stars}/>
                            )}/>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;

