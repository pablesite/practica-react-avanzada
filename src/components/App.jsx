import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Login from './Login'
import Home from './Home'
import AdvertDetail from './AdvertDetail'
import CreateOrUpdate from './CreateOrUpdate'

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
    this.updateProperty = this.updateProperty.bind(this);

    this.state = {
      
      user: {
        name: '',
        surname: '',
        email: '',
        tag: ''
      },

      updateUser: this.updateUser,
      updateProperty: this.updateProperty,
    }

    console.log('Props de APP', this.props)
  }


  updateUser(user) {
    this.setState({ user })
  }

  updateProperty(name, value) {
        this.setState(({ user }) => (
        {
          user: {
            ...user,
            [name]: value
          }
        }
      ));

  }


  render() {

    return (
      <ErrorBoundary >
        <Provider  store={this.props.store}  {...this.props} > {/*Paso el store a todos los componentes*/}
          <UserProvider value={this.state} > {/* Para eliminar!!!! */}
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
          </UserProvider>
        </Provider>
      </ErrorBoundary>

    );
  }
}