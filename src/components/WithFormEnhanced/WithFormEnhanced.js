import React from "react";


const WithFormEnhanced = () => (
  class FormEnhanced extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        ...this.props.initialState
      }
    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState(({ user }) => (
        {
          user: {
            ...user,
            [name]: value
          }
        }
      ));
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleSubmit(this.state)
    }

    render() {

      return (

        <React.Fragment>
        {/* <form onSubmit={this.handleSubmit}> */}
         
         
          <label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.user.name}
            />

            <input
              type="text"
              name="surname"
              onChange={this.handleChange}
              value={this.state.user.surname}
            />

            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.user.email}
            />

            <input
              type="text"
              name="tag"
              onChange={this.handleChange}
              value={this.state.user.tag}
            />

            <button type="submit">Oh, click me!</button>
          </label>
        {/* </form> */}

        </React.Fragment>
      )
    }
  }
)


export const FormEnhanced = WithFormEnhanced()