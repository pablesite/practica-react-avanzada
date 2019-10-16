import React, { Component } from 'react';
// import * as API from '../../services/MovieDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Welcome from '../Welcome/Welcome';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adverts: []
    }
  };

  render() {
    //const { adverts } = this.state;
    const {name, role, tag} = this.props.match.params;
  
    return (
      <React.Fragment>
        Vista de home.

        <Welcome
           name={name}
           role={role}
           tag={tag}
        > </Welcome>


        <Grid container >

          <Grid item >test</Grid>
          <Grid item >test</Grid>
          <Grid item >test</Grid>
          <Grid item >test</Grid>

        </Grid>

        <Button variant="contained" color="primary">
          MATERIAL!
        </Button>

      </React.Fragment>
    );
  }
}