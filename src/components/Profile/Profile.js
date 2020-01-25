import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 10,
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

  
  function createOrUpdate(event) {
    event.preventDefault();
    props.history.push("/createOrUpdate/");
  };


  return (
    <React.Fragment>
      
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Grid container alignItems="center" spacing={2}>

                <Grid item xs={10} sm={4}>
                  <Button
                    variant="contained"
                    color='secondary'
                    onClick={createOrUpdate}
                  >
                    New Advert
                </Button>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <Typography className={classes.title} variant="h5" noWrap>
                    <Box textAlign="center">
                      {props.name} {props.surname}
                      <h6>(Tag selected: {props.tag})</h6>
                    </Box>
                  </Typography>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <Box textAlign="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        props.deleteUserFromStore();
                        props.history.push("/login");
                      }}
                    >
                      Log out
                </Button>
                  </Box>
                </Grid>

              </Grid>
            </Toolbar>
          </AppBar>

        </div>
      
        </React.Fragment>
  );

}

export default withRouter(Profile);
