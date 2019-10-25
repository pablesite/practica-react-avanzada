import React, { Component } from 'react';
import UserContext from '../Context/User';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import "./Profile.css"



class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className='menuButton'
              color="inherit"
              aria-label="open drawer"
            >
            <MenuIcon />
            </IconButton>

            <Typography className='title'
              variant="h6" noWrap>
              Welcome {this.props.name} {this.props.surname}!
            </Typography>

            <Typography className='title'
              variant="h6" noWrap>
              Your favourite tag is {this.props.tag}
            </Typography>

            <div className='search'>
              <div className='searchIcon'>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                className='inputRoot'
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

Profile.contextType = UserContext;

export default Profile;