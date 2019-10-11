import React from 'react';
import { connect } from 'react-redux';


const Smurf = props => {
    console.log('these are the props passed in smurf', props)

    return (
        <div>
            <p>{props.name} {props.age} {props.height}</p>
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

export default connect(mapsStateToProps, {})(Smurf);