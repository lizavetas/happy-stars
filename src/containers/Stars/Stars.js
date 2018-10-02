import React, {Component, Fragment} from 'react';

import Star from '../../components/Star/Star';

class Stars extends Component {
    render() {


        if (this.props.stars.length > 0) {
            console.log(11, this.props.stars);
        }
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        {
                            this.props.stars.length > 0 &&
                            this.props.stars.map(star => {
                                return <Star color={star.color}/>
                            })
                        }
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                               <span
                                   className="icon has-text-link"
                                   style={{display: "inline", marginRight: "5px"}}>
                                   <i className="fas fa-star fa-3x"></i>
                               </span>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">John Smith</p>
                                    <p className="subtitle is-6">From X Universe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                               <span
                                   className="icon has-text-success"
                                   style={{display: "inline", marginRight: "5px"}}>
                                   <i className="fas fa-star fa-3x"></i>
                               </span>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">John Smith</p>
                                    <p className="subtitle is-6">From X Universe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Stars;
