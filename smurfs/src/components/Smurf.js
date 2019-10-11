import React from 'react';
import { connect } from 'react-redux';


const Smurf = props => {
    console.log('these are the props passed in smurf', props)

    if(!props) return <h2>Loadings Smurfs</h2>

    return (
        <div>
            <p>{props.name} {props.age} {props.height}</p>
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        // name: state.name,
        // age: state.age,
        // height: state.height,
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapsStateToProps, {})(Smurf);