import React from "react";
import UserContext from '../Context/User'

import Button from '@material-ui/core/Button';

const WithFormEnhanced = () => (
  class FormEnhanced extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        ...this.props.initialState
      }
    }


    componentDidMount() {
      console.log('componentDidMount', this.context)
      // this.context.updateUser(this.props.initialState)
    }





    handleChange = (e) => {
      console.log('doSomething called by child with value:');

      const { name, value } = e.target
      // this.setState(({ user }) => (
      //   {
      //     user: {
      //       ...user,
      //       [name]: value
      //     }
      //   }
      // ));
      this.setState({ [name]: value })
    }

    handleChangeTest = ({ name, surname, email, tag }) => {
      console.log('haz algo!! called by child with value handleChangeTest:');

      this.setState(
        {
          user: {
            name: name,
            surname: surname,
            email: email,
            tag, tag
          }

        })

      this.props.handleSubmit(this.state)
    }

    handleSubmit = (e) => {
      e.preventDefault()

      // this.context.updateUser(this.state);


      this.props.handleSubmit(this.state)
    }

    render() {

      console.log('estado del formEnhanced', this.state)
      // const childrenWithProps = React.Children.map(this.props.children, child =>
      //   React.cloneElement(child, { handleChange: this.handleChange })
      // );


      return (

        <React.Fragment>
          <UserContext.Consumer>


            {({ user, updateUser }) => (
              <div>

                TEST
              {
                  user.name == ""
                  &&
                  user.surname == ""
                  &&
                  user.email == ""
                  &&
                  user.tag == ""
                  &&
                  updateUser(this.props.initialState)

                }
              </div>
            )}

          </UserContext.Consumer>

          <UserContext.Consumer>
            {({ user }) => (



              // <form onSubmit={this.handleSubmit}>
              <form onSubmit={(e) => {
                e.preventDefault()
                // this.handleChangeTest(user)
                this.props.handleSubmit(user)
              }}  >


                {/* {childrenWithProps} */}

                {this.props.children}


                <div className="submit">
                  <Button
                    label="Continue"
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Enter
                  </Button>
                </div>
                {/* 
                  <button type="submit">Oh, click me!</button> */}
                {/* </label> */}

              </form>

            )}

          </UserContext.Consumer>
        </React.Fragment>


      )
    }
  }
)

// WithFormEnhanced.contextType = UserContext;

export const FormEnhanced = WithFormEnhanced()

