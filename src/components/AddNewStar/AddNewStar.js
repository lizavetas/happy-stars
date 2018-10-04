import React, { Component } from 'react';

class AddNewStar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: null,
            name: null
        }
    }

    onColorChange = (event) => {
        this.setState(
            {
                color: event.target.value
            });
    };

    onNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            });
    };

    render() {
        const  { universeName, id } = this.props;

        return(
            <div className="content">
                <h2>Add new Star to {universeName}</h2>
                <div className="field">
                    <label className="label">Star Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Star Name"
                            onChange={(event) => this.onNameChange(event)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Star Color</label>
                    <div className="control">
                        <div className="select">
                            <select
                                onChange={(event) => this.onColorChange(event)}>
                                <option></option>
                                <option value="GREEN">GREEN</option>
                                <option value="YELLOW">YELLOW</option>
                                <option value="BLACK">BLACK</option>
                                <option value="BLUE">BLUE</option>
                                <option value="RED">RED</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={() => console.log(this.state, this.props.id)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewStar;