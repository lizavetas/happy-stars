import React, { Component } from 'react';

class AddNewStar extends Component {

    render() {
        const  { universeName, id } = this.props;

        return(
            <div className="content">
                <h2>Add new Star to {universeName}</h2>
                <div className="field">
                    <label className="label">Star Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Star Name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Star Color</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option></option>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={() => console.log(id)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewStar;