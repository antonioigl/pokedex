import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/pokedex/"  component={Index}/>
            <Route exact path="/pokedex/:id" component={Show}/>
            <Redirect to="/pokedex/" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
