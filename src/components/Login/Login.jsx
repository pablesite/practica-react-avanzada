import "../../App.css";
import React, { Component } from 'react';
import { getTags } from '../../services/AdvertDBService';
import { saveUser, getUser } from '../../services/Storage';
import Profile from '../Profile'


import { FormEnhanced } from '../WithFormEnhanced/WithFormEnhanced'
import { InputEnhanced } from '../WithInputEnhanced/WithInputEnhanced'

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


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                surname: "",
                email: "",
                tag: "",
            },
            check: false
        };
  
        this.checkError = this.checkError.bind(this);

    }


    componentDidMount() {
        this.checkUserExist();
    }


    onSubmit = (user) => {
        saveUser(user);
        this.props.setUserInStore(user);
        this.props.history.push("/home");
    }


    checkError(event) {
        event.preventDefault();

        this.setState({
            check: true
        });

    }


    checkUserExist() {
        if (getUser() !== null) {
            this.setState(() => ({ user: getUser() }));
            this.props.setUserInStore(getUser());
        }
    }


    render() {
        const { name, surname, email, tag } = this.state.user;
        const { check } = this.state;

        return (
            <React.Fragment>
                {
                    getUser()
                    &&
                    <Profile
                        name={name}
                        surname={surname}
                        email={email}
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


                        <FormEnhanced
                            className='fortest'
                            handleSubmit={this.onSubmit}
                            initialState={
                                {
                                    name: "Pablo",
                                    surname: "Ruiz",
                                    email: "pabloruiz@ctnaval.com",
                                    tag: "motor"
                                }
                            }
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <InputEnhanced type='text' name='name' />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <InputEnhanced type='text' name='surname' />
                                </Grid>

                                <Grid item xs={12}>
                                    <InputEnhanced type='email' name='email' />
                                </Grid>
                            </Grid>


                        </FormEnhanced>


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


export default Login;
