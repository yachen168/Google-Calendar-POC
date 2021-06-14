import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "./views/Home";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
