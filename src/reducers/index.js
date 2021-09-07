import { combineReducers } from "redux";
import characters from "./characters";
/**
 * A higher-order reducer, which takes an object full of slice reducer functions (at this point, only for characters),
 * and returns a new reducer function.
 */
export const reducers = combineReducers({ characters });
