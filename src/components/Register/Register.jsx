import React, {Component} from 'react';
import UserContext from '../Context/User';


class Register extends Component
{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <p>Register</p>
    )
  }
}

Register.contextType = UserContext;

export default Register;