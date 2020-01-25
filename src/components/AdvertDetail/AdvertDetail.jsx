import React, { Component } from "react";

import Profile from '../Profile';
import Loading from '../Loading';
import Error from '../Error';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import './AdvertDetail.css'


class AdvertDetail extends Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
    this.updateAdvert = this.updateAdvert.bind(this);

  }


  checkUserExist() {
    if (this.props.checkUser.exist) {
      return true;
    } else {
      this.props.history.push("/login");
      return false;
    }
  }


  componentDidMount() {
    if (this.checkUserExist()) {
      this.props.getAdvert(this.props.match.params.id)
    }
  }

  goHome() {
    this.props.history.push('/home');
  }

  updateAdvert() {
    this.props.history.push(`/createOrUpdate/${this.props.match.params.id}`);

  }


  render() {

    const { user, isFetching, error } = this.props;
    const advert = this.props.adverts[0];

    return (
      <React.Fragment>

        {
          user
          &&
          <Profile
            name={user.name}
            surname={user.surname}
            tag={user.tag}
          > </Profile>
        }


        <div className="container">
          {
            advert
            &&
            <Container component="main" maxWidth="sm">
              <CssBaseline />

              <div className='paper'>
                <Grid container alignItems='center' alignContent='center' spacing={2}>

                  <Grid item xs={12} >
                    <Card className="card">
                      <div className="card-detail">
                        <CardHeader
                          className="limit-height-12vh"
                          avatar={
                            <Avatar aria-label="recipe" className='avatar'>
                              {advert.type}
                            </Avatar>

                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }

                          title={advert.name}
                          subheader={'Tags: ' + advert.tags.map((tags, i) => (
                            i === (advert.tags.length - 1) ? ` ${tags}.` : ` ${tags}`
                          ))}

                        />
                        <CardMedia
                          className="media"
                          image={advert.photo !== 'noPhoto' ? `http://localhost:3001${advert.photo}` : `http://localhost:3000/noHayImagen.gif`}
                          title={advert.name}
                        />
                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p" className="limit-height-6vh">
                            {advert.description}
                          </Typography>


                          <div className="price-text">
                            Precio: {advert.price} €.
                          </div>


                        </CardContent>
                      </div>
                    </Card>
                  </Grid >

                  <Grid item xs={12} sm={6}>
                    <Button variant="contained"
                      color="secondary"
                      onClick={this.goHome}
                      fullWidth
                    >
                      Back to home
                      </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} >
                    <Button variant="contained"
                      color="primary"
                      onClick={this.updateAdvert}
                      fullWidth
                    >
                      Update Advert
                      </Button>
                  </Grid>


                </Grid>
              </div>
            </Container>
          }

          {isFetching && <Loading className="app-loading" />}
          {error && <Error className="app-error" error={error} />}

          {
            !isFetching
            &&
            !advert
            &&
            <h1>There is not adverts...</h1>
          }

        </div>


      </React.Fragment>
    )
  }
}

export default AdvertDetail;