import React, {Component} from 'react';
import Universe from '../../components/Universe/Universe';


class Universes extends Component {
    render() {

        const {universes, columnSize} = this.props;
        let columns = [];

        // @todo utils
        const createColumns = (columns, columnSize) => {
            return columns.reduce((result, value, index, array) => {
                if (index % columnSize === 0) {
                    result.push(array.slice(index, index + columnSize));
                }
                return result;
            }, [])
        };

        if (!universes) {
            return null;
        }
        columns = createColumns(universes, columnSize);

        return (
            <div className="content">
                <h2>Universes</h2>
                <div>
                    <button className="button">Add new Universe</button>
                </div>
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
