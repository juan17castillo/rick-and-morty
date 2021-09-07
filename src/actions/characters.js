import * as api from "../api";
import {
  FETCH_CHARACTERS,
  START_LOADING,
  END_LOADING,
  ERROR_MESSAGE,
} from "../constants/actionTypes";
/**
 * Action creator that returns a function being able to use asynchronous code to call the Rick and Morty api through various state changes through dispatch.
 * @returns {Function} asynchronous function with the call to dispatchers for the global state change of the application
 */
export const getCharacters = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCharacters(page);
    dispatch({ type: FETCH_CHARACTERS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: ERROR_MESSAGE, errorMessage: error.message });
    dispatch({ type: END_LOADING });
  }
};
