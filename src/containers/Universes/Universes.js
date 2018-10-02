import React, {Component} from 'react';

class Universes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'TITLE'
        }
    }

    render() {
        return (
            <div className="container">

                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h2>
                                        <span className="icon"
                                              style={{display: "inline", marginRight: "10px"}}>

                                               <i className="fas fa-bullseye"></i>
                                        </span>Universe
                                </h2>

                                <p>Current Size: <strong>10</strong></p>
                                <p>Max. Size: 10</p>
                            </div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>
                                            Star
                                        </th>
                                        <th>
                                            Size
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                                    <span className="icon has-text-warning"
                                                          style={{display: "inline", marginRight: "5px"}}>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                        </td>
                                        <td>5000000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                                    <span className="icon has-text-danger"
                                                          style={{display: "inline", marginRight: "5px"}}>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                        </td>
                                        <td>
                                            5000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                    <span className="icon has-text-link"
                                                          style={{display: "inline", marginRight: "5px"}}>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                        </td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                                    <span className="icon has-text-success"
                                                          style={{display: "inline", marginRight: "5px"}}>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                        </td>
                                        <td>5000000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                                    <span className="icon has-text-black-bis"
                                                          style={{display: "inline", marginRight: "5px"}}>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                        </td>
                                        <td>5000000</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item button is-primary">Details</a>
                                    </div>
                                </nav>

                        </div>
                    </div>

                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h2>
                                        <span className="icon"
                                              style={{display: "inline", marginRight: "10px"}}>

                                               <i className="fas fa-bullseye"></i>
                                        </span>Universe
                                </h2>

                                <p>Current Size: <strong>10</strong></p>
                                <p>Max. Size: 10</p>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item button is-primary">Details</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Universes;
