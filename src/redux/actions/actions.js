export const SAVE_FAV = "SAVE_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ADD_JOB = "ADD_JOB";
export const ADD_ALL_SEARCHED_JOB = "ADD_ALL_SEARCHED_JOB";

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const HAS_ERROR = "HAS_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const ADD_TO_COUNTER = "ADD_TO_COUNTER";
export const REMOVE_TO_COUNTER = "REMOVE_TO_COUNTER";

export const addToFav = (data) => ({
  type: SAVE_FAV,
  payload: data,
});

export const addOne = () => ({
  type: ADD_TO_COUNTER,
});
export const removeOne = () => ({
  type: REMOVE_TO_COUNTER,
});

export const special = (baseEndpoint, query) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING,
    });

    dispatch({
      type: RESET_ERROR,
    });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: ADD_JOB,
          payload: data,
        });
        dispatch({
          type: ADD_ALL_SEARCHED_JOB,
          payload: data,
        });
      } else {
        dispatch({
          type: HAS_ERROR,
          payload: "Error fetching results",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: HAS_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: STOP_LOADING,
      });
    }
  };
};
