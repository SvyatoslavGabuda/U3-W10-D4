import { ADD_ALL_SEARCHED_JOB, ADD_JOB, THERE_IS_AN_ERROR } from "../actions/actions";

const initialState = {
  jobs: [],
  error: false,
  allSearchedJob: [],
};

const jobReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,

        jobs: action.payload,
      };
    case THERE_IS_AN_ERROR:
      return {
        ...state,
        error: true,
      };
    case ADD_ALL_SEARCHED_JOB:
      return {
        ...state,

        allSearchedJob: [...state.allSearchedJob, action.payload],
      };

    default:
      return state;
  }
};
export default jobReduce;
