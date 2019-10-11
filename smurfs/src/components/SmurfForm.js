import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, createSmurf } from '../actions';

const SmurfForm = props => {
    console.log('these are the props from the Smurf Form', props)

    const [smurf, setSmurf] = useState({});
    console.log('this is my smurf form component state', smurf)

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    if (props.isFetching) {
        console.log('this is my loading props',props.isFetching)
        return <h2>Loading Your Smurfs...</h2>;
      }
    const handleChange = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }


    const handleSubmit = e => {
        e.preventDefault();
        if (smurf.name.trim() && smurf.age.trim() && smurf.height.trim()) {
            props.createSmurf(smurf)
            setSmurf('');
        }

    }
    // const handleChange = e => {
    //     props.createSmurf(e.target.value)
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    className='input'
                    type='text'
                    name='name'
                    placeholder='Enter Smurf Name'
                    onChange={handleChange}
                    value={smurf.name}
                />
                <label>Age</label>
                <input
                    className='input'
                    type='text'
                    name='age'
                    placeholder='Enter Smurf Age'
                    onChange={handleChange}
                    value={smurf.age}
                />
                <label>Height</label>
                <input
                    className='input'
                    type='text'
                    name='height'
                    placeholder='Enter Smurf Height'
                    onChange={handleChange}
                    value={smurf.height}
                />

                <button type='submit '>Add New Smurf</button>
            </form>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapsStateToProps, { fetchSmurfs, createSmurf })(SmurfForm);

