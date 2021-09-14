import React, { useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { useQuery, prefetchQuery } from "react-query";
import { useQueryURL } from "../../hooks/use-query-url";
import Pagination from "./Pagination/Pagination.jsx";
import classes from "./CharacterList.module.css";
import { Paper } from "@material-ui/core";
import useStyles from "./Pagination/styles";
import * as api from "../../api/index";

const CACHE_TIME = 300000; // 5min
/**
 * Component in charge of rendering and obtaining the information of the global state of the application (characters, error messages and load) through the Hooks.
 * @returns {JSX.Element} in charge of rendering a characters list.
 */
const CharacterList = () => {
  /**
   * Redux hook in charge of obtaining a fragment of the global state of the application
   */
  const query = useQueryURL();
  const page = query.get("page") || 1;
  const {
    data: characters,
    isLoading,
    isError: errorMessage,
  } = useQuery(["characters", page], () => api.fetchCharacters(page), {
    keepPreviousData: true,
    cacheTime: CACHE_TIME,
  });
  const numPages = characters?.info.pages;
  const styles = useStyles();

  /**
   * Prefecth next page. If data for this query is already in the cache and not invalidated *the data WILL NOT BE fetched*
   */
  useEffect(() => {
    if (characters?.hasMore) {
      prefetchQuery(["characters", page + 1], () =>
        api.fetchCharacters(page + 1)
      );
    }
  }, [characters, page]);

  /**
   * Conditional rendering that JSX returns depending on the state obtained in the previous Hook Selector
   */
  return (
    <>
      <div>
        {+page > numPages && (
          <h1 className={classes.pageNotFound}>
            404 This page does not exist.
          </h1>
        )}
        {errorMessage && !isLoading && (
          <h2 className={classes.errorMessage}>Ups! Something went wrong.</h2>
        )}
        {isLoading && <div className={classes.loader}>Loading...</div>}
      </div>
      <ul className={classes.wrapper}>
        {characters?.results.map((character) => (
          <CharacterItem
            key={character.id}
            name={character.name}
            picture={character.image}
            gender={character.gender}
            status={character.status}
          />
        ))}
      </ul>
      {!errorMessage && (
        <Paper className={styles.pagination} elevation={6}>
          <Pagination page={page} numPages={numPages}/>
        </Paper>
      )}
    </>
  );
};

export default CharacterList;
