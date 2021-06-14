import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "./views/Home";
import Calendar from "./views/Calendar";

import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" exact component={Calendar} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
