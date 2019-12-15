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
    }

    render() {

      return (
        <React.Fragment>

          <UserContext.Consumer>
            {({ updateProperty, user }) => (

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

        </React.Fragment>

      )
    }
  }
)


export const InputEnhanced = WithInputhanced()

