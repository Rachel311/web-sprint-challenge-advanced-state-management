import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const LOADING_SMURF = "LOADING-SMURF";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(loadingSmurf());
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch(fetchSmurfSuccess(res.data))
        })
        .catch(error => {
                dispatch(fetchSmurfFail(error));
            });
    }
}

export const setError = () => {
    return ({ type: SET_ERROR })
}

export const loadingSmurf = () => {
    return ({type: LOADING_SMURF})
}

export const addSmurf = (smurf) => {
    return ({ type: ADD_SMURF, payload: smurf })
}

export const fetchSmurfFail = (error) => {
    return ({ type: FETCH_SMURF_FAIL, payload: error })
}

export const fetchSmurfSuccess = (smurf) => {
    return ({ type: FETCH_SMURF_SUCCESS, payload: smurf })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.