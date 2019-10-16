import React, { Component } from 'react';

const USER_ROLES = [
    {
      id: "admin",
      name: "Admin"
    },
    {
      id: "user",
      name: "User"
    }
  ]


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        tag: '',
        role: USER_ROLES[0].id,
        result: null
      }

  }

onSubmit = (event) => {
    event.preventDefault();
    const { name, tag, role } = this.state;

    if (!name || name.trim().length < 3) {
        alert("Name is smaller than 3");
        return;
      }

      if (!tag || tag.trim().length < 10) {
        alert("Description is smaller than 10");
        return;
      }

      this.setState({
        result: {
          tag,
          role
        }
      })

}

onInputChange = (event) => {
    const { name, value } = event.target;

    
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, description, role, result } = this.state;

    return (
      <div>
          <h2>Formulario de Login</h2>

          <form onSubmit={this.onSubmit}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onInputChange}
                placeholder="Your name"
                />
            </div>
            </form>

      </div>
    );
  }
}