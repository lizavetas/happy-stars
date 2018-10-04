import React, {Component} from 'react';

import instance from '../../utils/happyStarAxiosInstance';

class AddNewUniverse extends Component {

    constructor(props) {
        super(props);

        this.state =    {
            id: 0,
            name: '',
            maxSize: 0
        }
    }

    onInputUniverseNameChange(e) {
        console.log(e);
        instance
            .post('api/universe', {
                id: 0,
                name: "Zazstdvazsfdzasvz",
                "maxSize": 23
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return(
            <div className="content">
                <h2>Add new universe </h2>
                <div className="field">
                    <label className="label">Universe Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Universe Name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">max. Star Size</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="max. Star Size" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={(e) =>{
                                this.props.postNewUniverse()
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