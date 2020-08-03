import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  errors: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_DATA_START:
      return {
        ...state,
        isPosting: true,
        smurfs: [...state.smurfs],
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload,
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
