import React, {Component, Fragment} from 'react';

import Star from '../../components/Star/Star';

import { createColumns } from '../../utils/layoutHelpers'

class Stars extends Component {
    render() {

        const {stars, columnSize} = this.props;
        let columns = [];

        if (!stars) {
            return null;
        }

        columns = createColumns(stars, columnSize);

        return (
            <div className="content">
                <h2>Stars</h2>
                {
                    columns.length > 0 &&
                    columns.map((stars, index) => {
                        return (
                            <div
                                className="columns"
                                key={index}>
                                {
                                    stars.length > 0 &&
                                    stars.map((star, index) => {
                                        return (
                                            <div
                                                className="column"
                                                key={index}>
                                                <Star
                                                    color={star.color}
                                                    starCount={star.starCount}
                                                    name={star.name}
                                                    universeName={star.universeName}
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

export default Stars;
