import React from "react";
import UserContext from '../Context/User'

import TextField from '@material-ui/core/TextField';


const WithInputhanced = () => (
  class InputEnhanced extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        [this.props.name]: ''
      }


    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
      // this.setState(({ user }) => (
      //   {
      //     user: {
      //       ...user,
      //       [name]: value
      //     }
      //   }
      // ));

      // this.context.updateProperty(name, value);


    }



    // handleSubmit = (e) => {
    //   e.preventDefault()
    //   this.props.handleSubmit(this.state)
    // }

    render() {
      // console.log('state de input', this.state)
      // const state = this.state;

      return (
        <React.Fragment>

          <UserContext.Consumer>
            {({ updateProperty, user }) => (

              // <input
              //   type={this.props.type}
              //   name={this.props.name}
              //   onChange={(e) => updateProperty(e.target.name, e.target.value)}
              //   value={user[this.props.name]}
              // />

              <TextField
                type={this.props.type}
                name={this.props.name}
                onChange={(e) => updateProperty(e.target.name, e.target.value)}
                value={user[this.props.name]}
                label={this.props.name}            
                fullWidth
                variant="outlined"
                required
              />


            )}

          </UserContext.Consumer>

          {/* { this.props.children(state) } // Eso es todo! Que fácil verdad */}

        </React.Fragment>

      )
    }
  }
)



export const InputEnhanced = WithInputhanced()

