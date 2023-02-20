import { REMOVE_FAV, SAVE_FAV } from "../actions/actions";

const initialState = {
  companies: [],
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

    default:
      return state;
  }
};
export default mainReducer;
