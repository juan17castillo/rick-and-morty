import React, { Fragment } from "react";
import { getCharacters } from "./actions/characters";
import CharacterList from "./components/Characters/CharacterList";
import { connect } from "react-redux";
import Header from "./components/UI/Header";
/**
 * Main component of the App in charge of lifting the state and the rendering of child components.
 */
class App extends React.Component {
  /**
   * Function in charge of making the call to dispatch when the application is started
   */
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <CharacterList />
      </Fragment>
    );
  }
}
/**
 * Function that specifies what actions the component might need to send. It allow functions across props.
 * @param {function} dispatch is a function of the Redux store to trigger a state change.
 * @returns {Promise} Fetch all characters from the first page.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  };
};
/**
 * App export to be used elsewhere and through the connect device to pass the mapDispatchToProps to it.
 */
export default connect(null, mapDispatchToProps)(App);

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(getCharacters());
// }, [dispatch]);
