import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login/Login'
import Home from './Home/Home'
import AdvertDetail from './AdvertDetail/AdvertDetail'
import CreateOrUpdate from './CreateOrUpdate/CreateOrUpdate'

import { UserProvider } from './Context/User';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff784e',
      main: '#ff5722',
      dark: '#b23c17',
      contrastText: '#fff',
    },
    secondary: {
      light: '#696969',
      main: '#444444',
      dark: '#2f2f2f',
      contrastText: '#fff',
    },
  },
});


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

  }


  updateUser(user) {
    this.setState({ user })

  }

  render() {

    return (
        <ErrorBoundary>
          <UserProvider value={this.state}>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/home/' component={Home} />
                <Route exact path='/detail/:id' component={AdvertDetail} />
                <Route exact path='/createOrUpdate/' component={CreateOrUpdate} />
                <Route exact path='/createOrUpdate/:id' component={CreateOrUpdate} />
                
                <Route component={Login} />
              </Switch>
            </Router>
            </MuiThemeProvider>
          </UserProvider>
        </ErrorBoundary>

    );
  }
}