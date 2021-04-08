import React from "react";

import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import IndexPage from "./components/IndexPage";

class App extends React.Component {
  render() {
    return (
        <Switch className="App">
          <Route exact path='/' component={IndexPage}/>
        </Switch>
    );
  }
}

export default withRouter(App);
