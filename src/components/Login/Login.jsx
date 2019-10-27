import "../../App.css";
import UserContext from '../Context/User'
import React, { Component } from 'react';
import { getTags } from '../../services/AdvertDBService';
import { saveUser, getUser} from '../../services/Storage';
import Profile from '../Profile/Profile'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import "./Login.css"


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Wallakeep - Pablo Ruiz Molina
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                surname: "",
                tag: "",
            },
            tagList: [],
            check: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkError = this.checkError.bind(this);
    }


    getTags = () => {
        getTags().then(tags => {
            this.setState({ tagList: tags });
        })
    };


    checkUserExist() {
        if (getUser() !== null) {
            this.setState(() => ({ user: getUser() }));
        }
    }

    checkError(event) {
        event.preventDefault();

        this.setState({
            check: true
        });

    }

    componentDidMount() {
        this.checkUserExist();
        this.getTags();

    }


    onSubmit = (event) => {
        event.preventDefault();

        this.context.updateUser(this.state.user);

        saveUser(this.state.user);

        this.props.history.push("/home");
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
        const { tagList, check } = this.state;


        return (
            <React.Fragment>
                {
                    getUser()
                    &&
                    <Profile
                        name={name}
                        surname={surname}
                        tag={tag}
                    >
                    </Profile>
                }

                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    <div className='paper'>

                        <Avatar className='avatar'>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>

                        <form className='form' onSubmit={this.onSubmit}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Name"
                                        value={name}
                                        name="name"
                                        onChange={this.onInputChange}
                                        fullWidth
                                        variant="outlined"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Surname"
                                        value={surname}
                                        name="surname"
                                        onChange={this.onInputChange}
                                        fullWidth
                                        variant="outlined"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl required fullWidth variant="outlined" >
                                        <InputLabel htmlFor="tag-required" >Tags</InputLabel>
                                        <Select
                                            
                                            name="tag"
                                            value={tag ? tag : ''}
                                            onChange={this.onInputChange}
                                            required
                                            inputProps={{
                                                name: 'tag',
                                                id: 'tag-required',
                                              }}
                                        >
                                            {tagList.map((tags, i) => (
                                                <MenuItem key={i} value={tags}>
                                                    {tags}
                                                </MenuItem>
                                            ))} 

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

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


                        <Grid container justify="center">

                            <Grid item xs={12}>
                                <Box textAlign="justify">
                                    <h3>By pressing the button below you can check Error Boundary functionality.
                                Remember to test this functionality in production mode.</h3>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    onClick={this.checkError}
                                    label="Error Boundary"
                                >
                                    Check Error
                            </Button>
                            </Grid>
                        </Grid>

                        <Box mt={5}>
                            <Copyright />
                        </Box>

                    </div>

                    {
                        check
                        &&
                        undefined.methodDoesNotExist()
                    }

                </Container>

            </React.Fragment>

        );
    }
}


Login.contextType = UserContext;