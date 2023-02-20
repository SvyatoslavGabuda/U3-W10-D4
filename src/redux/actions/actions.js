export const SAVE_FAV = "SAVE_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ADD_JOB = "ADD_JOB";
export const THERE_IS_AN_ERROR = "THERE_IS_AN_ERROR";

export const addToFav = (data) => ({
  type: SAVE_FAV,
  payload: data,
});

export const special = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: ADD_JOB,
          payload: data,
        });
      } else {
        alert("Error fetching results");
        dispatch({
          type: THERE_IS_AN_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: THERE_IS_AN_ERROR,
      });
    }
  };
};
