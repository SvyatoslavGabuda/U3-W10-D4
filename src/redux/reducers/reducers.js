import { ADD_TO_COUNTER, REMOVE_FAV, REMOVE_TO_COUNTER, SAVE_FAV } from "../actions/actions";

const initialState = {
  companies: [],
  counter: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAV:
      if (state.companies.includes(action.payload)) {
        console.log("yes");
        return state;
      } else {
        console.log("nope");
        return {
          ...state,

          companies: [...state.companies, action.payload],
        };
      }

    case REMOVE_FAV:
      return {
        ...state,

        companies: state.companies.filter((job) => job._id !== action.payload),
      };
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case REMOVE_TO_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
export default mainReducer;
