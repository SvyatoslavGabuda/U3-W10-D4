import { HAS_ERROR, RESET_ERROR, START_LOADING, STOP_LOADING } from "../actions/actions";

const initialState = {
  loading: false,
  hasError: false,
  errorMessage: "",
};
const loadReduce = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};
export default loadReduce;
