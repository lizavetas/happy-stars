import React from 'react';

import Star from '../../components/Star/Star'

const Columns = (props) => {
    const {columns, size, children} = props;

    const columnsData = () => {
        return columns.reduce((result, value, index, array) => {
            if (index % size === 0) {
                result.push(array.slice(index, index + size));
            }
            return result;
        }, [])
    };

    let displayCols = columnsData();

    return(
        <div>
            {
                displayCols.length > 0 &&
                displayCols.map((elements, index) => {
                    return (
                        <div
                            className="columns"
                            key={index}>
                            {
                                elements.length > 0 &&
                                elements.map((star, index) => {
                                    return (
                                        <div
                                            className="column"
                                            key={index}>
                                            <Star
                                                star={star}
                                                color={star.color}
                                                starCount={star.starCount}
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
    )
};

export default Columns;