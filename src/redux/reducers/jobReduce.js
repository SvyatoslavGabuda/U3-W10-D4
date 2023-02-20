import { ADD_JOB, THERE_IS_AN_ERROR } from "../actions/actions";

const initialState = {
  jobs: [],
  error: false,
};

const jobReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,

        jobs: [...state.jobs, action.payload],
      };
    case THERE_IS_AN_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
export default jobReduce;
