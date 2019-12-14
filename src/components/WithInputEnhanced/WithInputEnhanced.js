import React from "react";


const WithInputhanced = () => (
  class FormEnhanced extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        [this.props.name] : ''
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


    }

    // handleSubmit = (e) => {
    //   e.preventDefault()
    //   this.props.handleSubmit(this.state)
    // }

    render() {

      return (

            <input
              type={this.props.type}
              name={this.props.name}
              onChange={this.handleChange}
              value={this.state.surname}
            />
      
      )
    }
  }
)


export const InputEnhanced = WithInputhanced()