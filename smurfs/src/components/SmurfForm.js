import React from 'react';
import { connect } from 'react-redux';

const SmurfForm = props => {
    console.log('these are the props from the Smurf Form', props)


    
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


export default connect(mapsStateToProps, {})(SmurfForm);

