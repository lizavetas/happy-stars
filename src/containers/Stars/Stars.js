import React, {Component, Fragment} from 'react';

import Star from '../../components/Star/Star';

class Stars extends Component {
    render() {

        const { stars } = this.props;
        let columns;

        // @todo utils
        const createColumns = (columns, columnSize) => {
            return columns.reduce((result, value, index, array) => {
                if (index % columnSize === 0) {
                    result.push(array.slice(index, index + columnSize));
                }
                return result;
            }, [])
        };

        columns = createColumns(stars.stars, 3);

        return (
            <div>
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
