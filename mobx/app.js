import { hot } from "react-hot-loader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, observer } from "mobx-react";
import "regenerator-runtime/runtime";

import "./app.scss";

import AppStore from "./stores/index";
import Toast from "./components/Toast.jsx";
import Home from "./containers/Home.jsx";

const App = () => {
    return (
        <Provider store={new AppStore()}>
            <Toast>
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                    </Switch>
                </Router>
            </Toast>
        </Provider>
    );
};

export default hot(module)(App);
