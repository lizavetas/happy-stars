import React from 'react';

const UniverseDetails = (props) => {
    const { universe} = props;

    return(
        <div className="box">
            <div className="content">
                <h2>
                    <span
                        className="icon"
                        style={{display: "inline", marginRight: "10px"}}>
                        <i className="fas fa-bullseye"></i>
                    </span>{ universe.name}
                </h2>
                <p>Current Size: <strong>{ universe.starCount}</strong></p>
                <p>Max. Size: <strong>{ universe.maxSize}</strong></p>

                <table className="table is-fullwidth">
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
            </div>

        </div>
    )
};

export default UniverseDetails;