import React, {Component} from 'react';

class AddNewUniverse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: '',
            maxSize: 0
        };
    }

    handleNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            });
    };

    handleMaxSizeChange = (event) => {
        this.setState(
            {
                maxSize: event.target.value
            });
    };

    render() {
        return (
            <div className="content">
                <h2>Add new universe </h2>
                <div className="field">
                    <label className="label">Universe Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Universe Name"
                            onChange={(event) => this.handleNameChange(event)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">max. Star Size</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="max. Star Size"
                            onChange={(event) => this.handleMaxSizeChange(event)}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={() => {
                                this.props.postNewUniverse(this.state.name, this.state.maxSize)
                            }}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewUniverse;