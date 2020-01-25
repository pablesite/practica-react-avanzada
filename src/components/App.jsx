import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Login from './Login'
import Home from './Home'
import AdvertDetail from './AdvertDetail'
import CreateOrUpdate from './CreateOrUpdate'

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

  render() {
    return (
      <ErrorBoundary >
        <Provider store={this.props.store}  {...this.props} > {/*Paso el store a todos los componentes*/}
          <MuiThemeProvider theme={theme} >
            <Router >
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
        </Provider>
      </ErrorBoundary>
    );
  }
}