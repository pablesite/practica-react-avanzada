import "../../App.css";
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
//import { withRouter } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import { getTags } from '../../services/AdvertDBService';


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


const theme = createMuiTheme();

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
              name: "",
              surname: "",
              tag: "",
            },
            tagList: []
          };


        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.getTags();

    }

    getTags = () => {
        getTags().then(tags => { 
        this.setState ({tagList: tags});
      })};


    static contextType = UserContext;

    onSubmit = (event) => {
        event.preventDefault();

        const { updateUser } = this.context;

        // if (!name || name.trim().length < 3) {
        //     alert("Name is smaller than 3");
        //     return;
        // }
        
        updateUser(this.state.user);
        
        this.props.history.push("/home");
        return true;

    }

    onInputChange = (event) => {
       
        const { name, value } = event.target;
        
        this.setState(({ user }) => ({
            user: {
              ...user,
              [name]: value
            }
          }));


    };


    render() {
        const { name, surname, tag } = this.state.user;
        const { tagList } = this.state;      

        return (
                    <MuiThemeProvider theme={theme}>
                        <form onSubmit={this.onSubmit}>
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
                                <InputLabel  style={styles.textField}>Tags</InputLabel>
                                <Select
                                    
                                    name="tag"
                                    value={tag}
                                    onChange={this.onInputChange}
                                    input={<Input  />}
                                    MenuProps={MenuProps}
                                    style={styles.textField}
                                >
                                     {tagList.map((tags, i) => (
                                        <MenuItem key={tags} value={tags} style={styles.fontWeight}>
                                            {tags}
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
        );
    }
}

