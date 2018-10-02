import React from 'react';

const Star = (props) => {
    const { color } = props;

    // @todo className for icons

    return(
        <div className="box">
            <div className="media">
                <div className="media-left">
                               <span
                                   className="icon has-text-info"
                                   style={{display: "inline", marginRight: "5px"}}>
                                   <i className="fas fa-star fa-3x"></i>
                               </span>
                </div>
                <div className="media-content">
                    <p className="title is-4">John Smith </p>
                    <div className="subtitle is-6">
                        <p>From X Universe (100 Stars)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Star;
