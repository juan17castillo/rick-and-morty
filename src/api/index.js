import axios from "axios";
/**
 * API {AxiosInstance} in charge of being the base of the calls to the api of Rick and Morty
 */
const API = axios.create({ baseURL: "https://rickandmortyapi.com/api/" });

/**
 *Exported function in charge of bringing all the characters from the first page of the Rick and Morty api that will be called by the action creators
 * @returns {AxiosResponse} With the call to the section of characters with the first page containing 20 of these.
 */
export const fetchCharacters = (page) => API.get(`character?page=${page}`);
