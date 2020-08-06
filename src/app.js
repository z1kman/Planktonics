import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import Home from './components/home'
import Communication from './components/communication'


class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/communication' component={Communication} /> */}
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)