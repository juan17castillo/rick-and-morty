import React from "react";
import CharacterItem from "./CharacterItem";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination.jsx";
import classes from "./CharacterList.module.css";
import { Paper } from "@material-ui/core";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


/**
 * Component in charge of rendering and obtaining the information of the global state of the application (characters, error messages and load) through the Hooks.
 * @returns {JSX.Element} in charge of rendering a characters list.
 */
const CharacterList = () => {
  const query = useQuery();
  const page = query.get("page") || 3;
  /**
   * Redux hook in charge of obtaining a fragment of the global state of the application
   */
  const { characters, isLoading, errorMessage } = useSelector(
    (state) => state.characters
  );

  /**
   * Conditional rendering that JSX returns depending on the state obtained in the previous Hook Selector
   */
  // if (!characters.length && !isLoading && !errorMessage) {
  //   return <h2 className={classes.errorMessage}>Ups! No characters found</h2>;
  // } else if (errorMessage && !isLoading) {
  //   return (
  //     <h2 className={classes.errorMessage}>
  //       Ups! Network error: Something went wrong
  //     </h2>
  //   );
  // } else if (isLoading) {
  //   return <div className={classes.loader}>Loading...</div>;
  // }

  return (
    <>
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
    <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
    </>
  );
};

export default CharacterList;
