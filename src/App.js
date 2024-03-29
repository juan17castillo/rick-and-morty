import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CharacterList from "./components/Characters/CharacterList";
import Header from "./components/UI/Header";
/**
 * Main component of the App in charge of lifting the state and the rendering of child components.
 */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/characters" />}
          />
          <Route path="/characters" exact component={CharacterList} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
