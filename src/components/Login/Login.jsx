import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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


class Login extends Component {
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
                name,
                tag,
                role
            }
        });


    }

    onInputChange = (event) => {
        const { name, value } = event.target;


        this.setState({
            [name]: value
        });
    };

    render() {
        const { name, tag, role, result } = this.state;

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

                    <div>
                        <p>Chosen Tag</p>
                        <input
                            name="tag"
                            value={tag}
                            onChange={this.onInputChange}
                            placeholder="Your tag"
                        />
                    </div>

                    <div>
                        <p>Role</p>
                        {
                            USER_ROLES.map(_role => (
                                <div>
                                    {_role.name}
                                    <input
                                        type='radio'
                                        value={_role.id}
                                        checked={role === _role.id}
                                        name='role'
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <button type='submit'>Enter</button>

                </form>
               
                {   
                     result
                     &&
                    this.props.history.push(`/home/${this.state.result.name}/${this.state.result.role}/${this.state.result.tag}`)
                }
                
            </div>
        );
    }
}

export default withRouter(Login);