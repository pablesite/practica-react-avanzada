import React from "react";
import { FormProvider } from '../Context/Form'


const WithFormEnhanced = () => (
  class FormEnhanced extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        ...this.props.initialState,
        onInputChange: this.onInputChange,
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleSubmit(this.state)
    }


    onInputChange = (name, value) => {
      this.setState({ [name]: value })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}  >
          <FormProvider value={this.state} >
            {this.props.children}
          </FormProvider>
        </form>
      )
    }
  }
)

export const FormEnhanced = WithFormEnhanced()

