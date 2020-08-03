import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = () => (dispatch) => {
  dispatch({type: FETCH_DATA_START});

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("SR: actions/index.js: fethData: axios.then: ", res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: FETCH_DATA_ERROR, payload: err.message});
    });
};
