import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./CharacterItem.module.css";
/**
 * Component in charge of rendering the information of a specific character with his name and photograph wrapped in a presentation card component.
 * @param {*} props with the information provided by CharacterList (photo, name, gender and status)
 * @returns {JSX.Element} in charge of rendering a character and detail information of each in a Modal.
 */
const CharacterItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**
   * Function in charge of being triggered when opening the information of a card to display the detailed information of a character. 
   * This updates the state within the component.
   */
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  /**
   * Function in charge of being triggered when opening the information of a card to display the detailed information of a character. 
   * This updates the state within the component.
   */
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <li>
        <Card
          picture={props.picture}
          name={props.name}
          handleOpenModal={handleOpenModal}
        />
      </li>
      {isModalVisible && (
        <Modal onClose={handleCloseModal}>
          <>
            <div className={classes.closeModal}>
              <button onClick={handleCloseModal}>X</button>
              <h1>{props.name}</h1>
            </div>
            <div className={classes.details}>
              <h2>
                Gender: <span>{props.gender}</span>
              </h2>

              <h2>
                Status: <span>{props.status}</span>
              </h2>
            </div>
          </>
        </Modal>
      )}
    </>
  );
};

export default CharacterItem;
