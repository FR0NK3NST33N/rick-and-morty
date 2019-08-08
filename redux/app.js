import { hot } from "react-hot-loader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";

import store from "./store";

import "./app.scss";
import Home from "./containers/Home.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default hot(module)(App);
