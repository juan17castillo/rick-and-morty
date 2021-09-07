import React from "react";
import CharacterItem from "./CharacterItem";
import { useSelector } from "react-redux";
import classes from "./CharacterList.module.css";
/**
 * Component in charge of rendering and obtaining the information of the global state of the application (characters, error messages and load) through the Hooks.
 * @returns {JSX.Element} in charge of rendering a characters list.
 */
const CharacterList = () => {
  /**
   * Redux hook in charge of obtaining a fragment of the global state of the application
   */
  const { characters, isLoading, errorMessage } = useSelector(
    (state) => state.characters
  );
  /**
   * Conditional rendering that JSX returns depending on the state obtained in the previous Hook Selector
   */
  if (!characters.length && !isLoading && !errorMessage) {
    return <h2 className={classes.errorMessage}>Ups! No characters found</h2>;
  } else if (errorMessage && !isLoading) {
    return (
      <h2 className={classes.errorMessage}>
        Ups! Network error: Something went wrong
      </h2>
    );
  } else if (isLoading) {
    return <div className={classes.loader}>Loading...</div>;
  }

  return (
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
  );
};

export default CharacterList;
