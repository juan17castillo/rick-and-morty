
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
/**
 * Presentational component that will be reused and unified when a backdrop is needed.
 * @param {*} props with the information that the backdrop may contain.
 * @returns {JSX.Element} in charge of rendering a presentational backdrop component.
 */
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
/**
 * Presentational component that will be reused and unified when a modal is needed.
 * @param {*} props with the information that the modal may contain.
 * @returns {JSX.Element} in charge of rendering a presentational modal component.
 */
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
/**
 * Modal having as reference the compositional pattern using portals for its correct location in the html seen by the user.d unified when a backdrop is needed.
 * @param {*} props with the information that the Modal may contain.
 * @returns {JSX.Element} in charge of rendering a presentational backdrop component.
 */
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;