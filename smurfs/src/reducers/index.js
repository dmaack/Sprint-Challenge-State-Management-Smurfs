import { START_SMURF_FETCHING, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions';

const initialState ={
    smurfData: [],
    isLoading: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_SMURF_FETCHING:
            return {
                ...state, //what do we want to happen when we start fetching 
                isLoading: true,
                error: ''
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state, //return state
                smurfData: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_SMURF_FAILURE:
            return {
                 ...state,
                isLoading: false,
                error: 'Server Error'
            }
        default:
            return state;
    }
}