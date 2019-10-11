import React from 'react';
import { connect } from 'react-redux';



const SmurfList = props => {
    console.log('these are the props passed into smurf list', props)

    return (
        <div>
            <h2>Smurf List</h2>
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

export default connect(mapsStateToProps, {})(SmurfList)