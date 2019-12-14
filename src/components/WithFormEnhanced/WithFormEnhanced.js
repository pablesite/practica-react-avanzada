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

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleSubmit(this.state)
    }

    render() {
 
      return (

        <React.Fragment>
          <UserContext.Consumer>

            {({ user, updateUser }) => (
              <div>
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

              <form className='form' onSubmit={(e) => {
                e.preventDefault()
                this.props.handleSubmit(user)
              }}  >

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

