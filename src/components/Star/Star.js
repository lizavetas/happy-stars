import React from 'react';

const Stars = (props) => {
    return(
        <div>
            <div className="box">
                <div className="content">
                    <h2>
                        <span
                            className="icon has-text-danger"
                            style={{display: "inline", marginRight: "5px"}}>
                            <i className="fas fa-star"></i>
                        </span>
                        John Smith
                    </h2>
                    <p>From X Universe</p>
                </div>
            </div>
        </div>
    )
};

export default Stars;
