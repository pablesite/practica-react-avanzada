import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import AdvertDetail from './AdvertDetail/AdvertDetail'
import { UserProvider } from './Context/User';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    console.log(error.stack);
    console.log(errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="snap">
          <div className="snap-message">
            <p>We're sorry - something's gone wrong.</p>
            <p>
              Our team has been notified, but click <button>here</button> to
              fill out a report.
            </p>
          </div>
        </div>
      );
    } else {
      return (
          <div>
              TEST
              {this.props.children}
          </div>
         
      )}
  }
}



export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);

    this.state = {
      user: {
        name: '',
        surname: '',
        tag: ''
      },
      updateUser: this.updateUser
    }
    // this.state = {
    //   name: 'testName',
    //   surname: 'testSurname',
    //   tag: [],
    // }


  }

  updateUser(user) {

    //  console.log('Entra en update users de app');
    this.setState({ user })

  }



  render() {

    return (
        <ErrorBoundary>
          <UserProvider value={this.state}>
            <Router>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/home/' component={Home} />
                <Route exact path='/detail/:id' component={AdvertDetail} />
                <Route component={Login} />
              </Switch>
            </Router>
          </UserProvider>
        </ErrorBoundary>
        // {/* <div className="App">
        //  <UserForm /> */}

    );
  }
}