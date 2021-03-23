import {List} from "./pages/List";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Person} from "./pages/Person";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, {useEffect} from "react";
import {setPersons} from "./slice";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(res => res.json())
            .then(list => {
                dispatch(setPersons(list));
            });

    }, [dispatch]);

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
