import React, {Component} from 'react';
import Universe from '../../components/Universe/Universe';
import { NavLink } from 'react-router-dom';

import { createColumns } from '../../utils/layoutHelpers'

class Universes extends Component {
    render() {
        const {universes, columnSize} = this.props;
        let columns = [];

        if (!universes) {
            return null;
        }
        columns = createColumns(universes, columnSize);

        return (
            <div className="content">
                <h2>Universes ({universes.length})</h2>
                <nav className="navbar">
                    <div className="container">
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-start">
                                <NavLink
                                    to={"/universes/add"}
                                    className="navbar-item is-active">
                                    <button className="button is-primary">Add new Universe</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                {
                    columns.length > 0 &&
                    columns.map((universes, index) => {
                        return (
                            <div
                                className="columns"
                                key={index}>
                                {
                                    universes.length > 0 &&
                                    universes.map((universe, index) => {
                                        return (
                                            <div
                                                className="column"
                                                key={index}>
                                                <Universe
                                                    name={universe.name}
                                                    maxSize={universe.maxSize}
                                                    starCount={universe.starCount}
                                                    id={universe.id}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Universes;
