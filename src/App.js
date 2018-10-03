import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Universes from "./containers/Universes/Universes";
import Stars from "./containers/Stars/Stars";
import MainNav from "./components/MainNav/MainNav";

import { fetchData } from './store/actions/index';

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
    }

    componentDidMount() {
        this.props.fetchData();
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
    return {
        stars: state.exampleReducer.data.stars,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchData}, dispatch);

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(App);

