import React from "react";
import CharacterItem from "./CharacterItem";
import { useSelector } from "react-redux";
import { useQuery } from "../../hooks/use-query";
import Pagination from "./Pagination/Pagination.jsx";
import classes from "./CharacterList.module.css";
import { Paper } from "@material-ui/core";
import useStyles from "./Pagination/styles";

/**
 * Component in charge of rendering and obtaining the information of the global state of the application (characters, error messages and load) through the Hooks.
 * @returns {JSX.Element} in charge of rendering a characters list.
 */
const CharacterList = () => {
  /**
   * Redux hook in charge of obtaining a fragment of the global state of the application
   */
  const { characters, isLoading, errorMessage, numberOfPages } = useSelector(
    (state) => state.characters
  );
  let numPages = 0;
  if (numberOfPages) numPages = numberOfPages;
  const styles = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;

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
        {characters.map((character) => (
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
          <Pagination page={page} />
        </Paper>
      )}
    </>
  );
};

export default CharacterList;