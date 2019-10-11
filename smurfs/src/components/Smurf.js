import React from 'react';
import { connect } from 'react-redux';
import  image  from '../images/smurf.jpg'


const Smurf = props => {
    console.log('these are the props passed in smurf', props)

    if(!props) return <h2>Loadings Smurfs</h2>

    return (
        <div className='smurf-container'>
            <p className='name'>{props.name}</p>
            <img width='150px' src={image} alt='smurf lawn knome'/>
            <p><strong>Age: </strong>{props.age}</p> 
            <p><strong>Height: </strong>{props.height}</p>
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