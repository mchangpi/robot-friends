import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants.js";

/* this def refers to definition of mapDispatchToProps */
export const actionSetSearchField = (text) => {
  console.log("search text: ", text);
  return { type: CHANGE_SEARCH_FIELD, payload: text };
};

/* define a higher order function for redux-thunk */
export const actionRequestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
