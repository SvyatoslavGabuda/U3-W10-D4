const initialState = {
  favorite: {
    companies: [],
    jobs: [],
  },
  some: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_FAV":
      if (state.favorite.companies.includes(action.payload)) {
        console.log("yes");
        return state;
      } else {
        console.log("nope");
        return {
          ...state,
          favorite: {
            ...state.favorite,

            companies: [...state.favorite.companies, action.payload],
          },
        };
      }

    case "REMOVE_FAV":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: state.favorite.companies.filter((job) => job._id !== action.payload),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
