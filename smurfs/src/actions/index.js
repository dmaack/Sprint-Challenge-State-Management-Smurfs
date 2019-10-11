import axios from 'axios';

export const START_SMURF_FETCHING = 'START_SMURF_FETCHING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_SMURF_FETCHING });

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('this is the data from api request', res)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('could not fetch data', err)
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err})
    })
}   

export const createSmurf = ({name, age, height}) => dispatch => {
    console.log('this is the smurf info im adding', name, age, height)
    axios
    .post('http://localhost:3333/smurfs', {
        name,
        age,
        height,
    })
    .then(res => {
        console.log('this is the response from axios post request', res)
        dispatch({ type: 'CREATE_SMURF_SUCCESS', payload: res.data})
    })
    .catch(err => {
        console.log('data not posted', err)
        dispatch({ type: 'CREATE_SMURF_FAILURE', payload: err})
    })
    
    
}