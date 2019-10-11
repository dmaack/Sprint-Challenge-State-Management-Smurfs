import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = props => {
    console.log('these are the props passed into smurf list', props)

    return (
        <div>
            <h2>Your Smurf Village</h2>
        <div className='list-container'>
            

            {props.smurfData.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
            ))}

        </div>
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