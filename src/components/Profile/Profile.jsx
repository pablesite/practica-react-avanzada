import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { UserConsumer } from '../Context/User'
import { deleteStorage } from '../../services/Storage';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));




function Profile(props) {
  const classes = useStyles();
  
  function createOrUpdate (event) {
    event.preventDefault();
    props.history.push("/createOrUpdate/");
  };


  return (
    <UserConsumer>
      {({updateUser}) => (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            User: {props.name} {props.surname}.
            Your favourite tag is '{props.tag}'.
          </Typography>


          <Grid item xs={10} sm={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={createOrUpdate}
              >
                New Advert
            </Button>
            </Grid>

            <Grid item xs={10} sm={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    updateUser({});
                    deleteStorage();
                    props.history.push("/login/");
                }}
              >
                Log out
            </Button>
            </Grid>


        </Toolbar>
      </AppBar>

    </div>
      )}
    </UserConsumer>
  );
  
}



export default withRouter(Profile);
