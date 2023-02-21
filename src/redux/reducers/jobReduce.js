import { ADD_ALL_SEARCHED_JOB, ADD_JOB } from "../actions/actions";

const initialState = {
  jobs: [],
  allSearchedJob: [],
};

const jobReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,

        jobs: action.payload,
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
