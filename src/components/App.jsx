import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import AdvertDetail from './AdvertDetail/AdvertDetail'

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login'  component={Login}/>
            <Route path='/home/:name/:role/:tag' component={Home}/>
            <Route path='/detail/:id' component={AdvertDetail}/>
            <Route component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}