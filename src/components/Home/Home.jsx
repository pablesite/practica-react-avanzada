import React, { Component } from 'react';
// import * as API from '../../services/MovieDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adverts: []
    }
  }

  render() {
    const { adverts } = this.state;

    return (
      <React.Fragment>
        Vista de home.
        <Button variant="contained" color="primary">
          MATERIAL!
        </Button>
        <Grid Grid container >

           <Grid Grid item >test</Grid>
           <Grid Grid item >test</Grid>
           <Grid Grid item >test</Grid>
           <Grid Grid item >test</Grid>

        </Grid>

      </React.Fragment>
    );
  }
}