import "../../App.css";
import { UserConsumer } from "../Context/User";
import UserContext from '../Context/User'
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { red } from "@material-ui/core/colors";


const styles = {
    button: {
        margin: 15
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',


    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 200,
        color: red,
    },
    dense: {
        marginTop: 19,
        color: red,
    },
    menu: {
        width: 200,
        color: red,
    },
    formControl: {
        margin: 10,
        minWidth: 120,
        maxWidth: 300,
        color: red,
    }

}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const personTags = [
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4'
];

const theme = createMuiTheme();

export default class Login extends Component {
    constructor(props) {
        super(props);


        // this.state = {
        //     name: '',
        //     surname: '',
        //     tag: [],
        // }

        this.state = {
            user: {
                name: '',
                surname: '',
                tag: []
            }
        }


        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static contextType = UserContext;

    onSubmit = (event) => {
        event.preventDefault();

        // //const { name, surname, tag } = this.context;

        // if (!name || name.trim().length < 3) {
        //     alert("Name is smaller than 3");
        //     return;
        // }


        this.props.history.push("/home");
        return true;

    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        
        this.setState(({ user }) => ({
            user: {
                ...user,
                [name]: value
            }
        }));

        //console.log(this.state.user.tag)

        // const { name, value } = event.target;
        //     this.setState({
        //         [name]: value
        //     });
    };


    render() {
        const { name, surname, tag } = this.state.user;

        return (
            <UserConsumer >
                {({ user, updateUser }) => (
                    <MuiThemeProvider theme={theme}>
                        {/* <form onSubmit={this.onSubmit}> */}
                        <form
                            onSubmit={event => {
                                if (this.onSubmit(event)) {
                                    updateUser(this.state.user);
                                    //this.props.history.push("/home");
                                }
                            }}
                        >
                            <TextField
                                className={styles.TextField}
                                label="Name"
                                value={name}
                                name="name"
                                onChange={this.onInputChange}
                                style={styles.textField}
                            />
                            <br></br>
                            <TextField
                                label="Surname"
                                value={surname}
                                name="surname"
                                onChange={this.onInputChange}
                                style={styles.textField}
                            />

                            <br></br>

                            { <FormControl>
                                <InputLabel htmlFor="select-multiple" style={styles.textField}>Tags</InputLabel>
                                <Select
                                    value={tag}
                                    name="tag"
                                    onChange={this.onInputChange}
                                    input={<Input id="select-multiple" />}
                                    MenuProps={MenuProps}
                                    style={styles.textField}
                                >
                                     {personTags.map(tag => (
                                        <MenuItem key={tag} value={tag} style={styles.fontWeight}>
                                            {tag}
                                        </MenuItem>
                                    ))} 

                                </Select>
                            </FormControl> }

                            <br></br>

                            <Button
                                variant="contained"
                                color="primary"
                                label="Continue"
                                style={styles.button}
                                onClick={this.continue}
                                type='submit'
                            >
                                Enter
                    </Button>

                        </form>
                    </MuiThemeProvider>
                )}
            </UserConsumer>
        );
    }
}

