import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CharacterList from "./components/Characters/CharacterList";
import Header from "./components/UI/Header";
/**
 * Main component of the App in charge of lifting the state and the rendering of child components.
 */
const App = () => {

    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/characters" />} />
            <Route path="/characters" exact component={CharacterList} />
        </Switch>
      </BrowserRouter>  
    );
  }

export default App;