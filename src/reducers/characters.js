/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_CHARACTERS,
  START_LOADING,
  END_LOADING,
  ERROR_MESSAGE,
} from "../constants/actionTypes";
/**
 * Function in charge of acting depending on the type of action needed.
 * This updates the status of the application for the components that are subscribed to the store.
 *  @param {object} state The global state object for the "characters" slice reducer.
 *  @param {object} action with the information of the action creators.
 * @returns {object} With the state updated.
 */
export default (
  state = { isLoading: true, characters: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };
    case FETCH_CHARACTERS:
      return { ...state, 
        characters: action.payload.results, 
        currentPage: action.payload.info.next ? Number(action.payload.info.next.slice(-1)) - 1 : action.payload.info.pages,
        numberOfPages: action.payload.info.pages };
    default:
      return state;
  }
};
