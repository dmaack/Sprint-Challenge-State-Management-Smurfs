import axios from 'axios';

export const START_SMURF_FETCHING = 'START_SMURF_FETCHING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

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