import React from 'react';

const EditUniverse = (props) => {
    const  { universeName } = props;

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
                    <a className="button is-primary">
                        Add
                    </a>
                </div>
            </div>
        </div>
    )
};


export default EditUniverse;