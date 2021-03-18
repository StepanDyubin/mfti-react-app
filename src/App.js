import {List} from "./pages/List";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Person} from "./pages/Person";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <>
            <CssBaseline />
            <Switch>
                <Route exact path="/">
                    <List />
                </Route>
                <Route path="/person/:personId">
                    <Person />
                </Route>
            </Switch>
        </>
      </BrowserRouter>
  );
}

export default App;
