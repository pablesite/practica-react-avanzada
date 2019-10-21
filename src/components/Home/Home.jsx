import React, { Component } from 'react';
import * as API from '../../services/AdvertDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Welcome from '../Welcome/Welcome';
import { UserConsumer } from '../Context/User'
import UserContext from '../Context/User'
import AdvertList from '../AdvertList/AdvertList';

export default class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      adverts: []
    }

    this.discoverAdverts();

  };

  discoverAdverts = () => {
    API.discoverAdverts().then(adverts => {
      this.setState({
        adverts
      })
    });
  }

  // SEGUIR ESTE EJEMPLO PARA RENDERIZAR LOS QUERYPARAMS A LA HORA DE FILTRAR. 
  // LA CLAVE ES ES USAR URLSEARCHPARAMS PARA SACAR LOS DATOS DE LA URL.
  // componentWillMount() {
  //   const params = new URLSearchParams(this.props.location.search);

  //   const clear = params.get("clear");

  //   if (clear === "true") return;

  //   const name = params.get("name");
  //   const description = params.get("description");
  //   const role = params.get("role");
  //   const submit = params.get("submit");

  //   this.setState({
  //     name: name || '',
  //     description: description || '',
  //     role: role || USER_ROLES[0].id
  //   }, () => {
  //     submit === "true" && this.onSubmit();
  //   });
  // }


  render() {
    //const { adverts } = this.state;
    const { user } = this.context;
    //const {name, role, tag} = this.props.match.params;

    const { adverts } = this.state;

    return (
      <React.Fragment>
        Vista de home.

        <Welcome
          name={user.name}
          surname={user.surname}
          tag={user.tag}
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

        {
          adverts
          &&
          adverts.length
          &&
          <AdvertList adverts={adverts} />
        }

      </React.Fragment>
    );
  }
}