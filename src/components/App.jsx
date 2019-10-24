import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import AdvertDetail from './AdvertDetail/AdvertDetail'
import { UserProvider } from './Context/User';


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
      <div>
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
        {/* <div className="App">
         <UserForm /> */}

      </div>
    );
  }
}