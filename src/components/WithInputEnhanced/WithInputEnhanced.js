import React from "react";
import FormContext from '../Context/Form'

import TextField from '@material-ui/core/TextField';


const WithInputhanced = () => (
  class InputEnhanced extends React.Component {   

    render() {
      return (
            <TextField
              type={this.props.type}
              name={this.props.name}
              label={this.props.name}
              onChange={(e) => this.context.onInputChange(e.target.name, e.target.value)}
              value={this.context[this.props.name]}
              fullWidth
              variant="outlined"
              required
            />
      )
    }
  }
)

export const InputEnhanced = WithInputhanced()
InputEnhanced.contextType = FormContext;
