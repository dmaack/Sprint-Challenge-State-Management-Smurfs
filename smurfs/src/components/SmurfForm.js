import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfForm = props => {
    console.log('these are the props from the Smurf Form', props)

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div>
            <form>
                <input />
                <input />
                <input />

                <button>Add New Smurf</button>
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


export default connect(mapsStateToProps, { fetchSmurfs })(SmurfForm);

