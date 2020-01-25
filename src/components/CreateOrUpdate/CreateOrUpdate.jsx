import React, { Component } from "react";

import Profile from '../Profile';
import { getAdvert } from "../../services/AdvertDBService";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './CreateOrUpdate.css'

const ventas = [
  'buy',
  'sell',
];


class CreateOrUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advert: {
        description: '',
        name: '',
        photo: '',
        price: '',
        tags: [],
        type: '',
        _id: null
      },
      update: true,

    };

    this.checkCreateorUpdate = this.checkCreateorUpdate.bind(this);
    this.goHome = this.goHome.bind(this);

  };


  componentDidMount() {
    const { checkUser, history } = this.props;
    
    if (checkUser.exist) {
      this.checkCreateorUpdate();
    } else {
      history.push("/login");
    }
  }


  componentDidUpdate() {
    const { update } = this.state;

    if (!this.props.match.params.id && update) {
      this.setState({
        advert: {
          description: '',
          name: '',
          photo: '',
          price: '',
          tags: [],
          type: '',
          _id: null,

        },
        update: false
      })
    }
  }


  createOrUpdateAdvert = () => {
    const { _id } = this.state.advert;

    if (_id) {
      this.props.updateAdvert(this.state.advert, _id).then(() => { this.props.history.push(`/detail/${_id}`) });
    } else {
      this.props.createAdvert(this.state.advert).then(() => { this.props.history.push(`/home/`) });
    }
  }


  checkCreateorUpdate() {
    // Tenemos el ID del path param ? Sí: Pues es un update: No: Pues es un create
    const advertID = this.props.match.params.id;

    if (advertID) {
      getAdvert(advertID).then(advert => {
        if (advert.success === false) {
          this.props.history.push("/404");
        } else {
          this.setState({ advert });
        }
      })
    } else {
      this.setState({
        advert: {
          description: '',
          name: '',
          photo: '',
          price: '',
          tags: [],
          type: '',
          _id: null

        },
        update: true,
      });
    }
  }

  onSubmit = (event) => {
    event && event.preventDefault();
    this.createOrUpdateAdvert();
    this.setState({ update: true });
  }

  goHome() {
    this.props.history.push('/home');
  }

  onInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'price') {

      if ((!/\D/.exec(value))) {
        this.setState(({ advert }) => ({
          advert: {
            ...advert,
            [name]: value
          }
        }));

      }
    } else {
      this.setState(({ advert }) => ({
        advert: {
          ...advert,
          [name]: value
        }
      }));
    }
  };

  onFileSelected = event => {
    //const value = event.target.files[0].name;
    this.setState(({ advert }) => ({
      advert: {
        ...advert,
        //photo: value,
        photo: 'noPhoto' //This functionality is deactivated while APi has not an endpoint to upload files.
      }
    }));

  }


  render() {

    const { user, tagList } = this.props;
    const { description, name, photo, price, tags, type, _id } = this.state.advert;

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

        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <div className='paper'>

            <Typography component="h1" variant="h5">
              New Advert
                        </Typography>

            <form className='form' onSubmit={this.onSubmit}>
              <Grid container justify="center" spacing={2}>

                <Grid item xs={12} >
                  <TextField
                    label="Advert name"
                    value={name}
                    name="name"
                    onChange={this.onInputChange}
                    fullWidth
                    variant="filled"
                    required
                  />
                </Grid>

                <Grid item xs={12} >
                  <TextField
                    label="Description"
                    value={description}
                    name="description"
                    onChange={this.onInputChange}
                    fullWidth
                    variant="filled"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl required fullWidth variant="filled" >
                    <InputLabel >Venta</InputLabel>
                    <Select
                      label="Venta"
                      value={type}
                      name="type"
                      onChange={this.onInputChange}
                      required
                    >

                      {ventas.map(venta => (
                        <MenuItem key={venta} value={venta} >
                          {venta}
                        </MenuItem>
                      ))}
                    </Select>

                  </FormControl >
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl required fullWidth variant="filled">
                    <InputLabel >Tags</InputLabel>
                    <Select
                      multiple
                      label="Tag"
                      value={tags}
                      name="tags"
                      onChange={this.onInputChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {tagList.map(tag => (
                        <MenuItem key={tag} value={tag} >
                          {tag}
                        </MenuItem>
                      ))}

                    </Select>

                  </FormControl>
                </Grid>



                <Grid item xs={12}>
                  <TextField
                    label={type === 'buy' ? "Precio máximo" : "Precio"}
                    value={price}
                    name="price"
                    onChange={this.onInputChange}
                    fullWidth
                    variant="filled"
                    required

                  />
                </Grid>

                <Grid item xs={12} >
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={this.onFileSelected}

                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      component="span"
                      fullWidth
                      variant="outlined"
                      color="primary"
                    >
                      Upload an image
                </Button>
                  </label>
                  <Box textAlign="justify">
                    <h3>The photo entered has the name: {photo}.
                    Attention: This functionality is disabled because the API does not have an endpoint to upload photos.</h3>
                  </Box>

                </Grid>

                <Grid item xs={12} >
                  <Button
                    label="Create"
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {_id ? 'Update advert' : 'Create a new advert'}
                  </Button>
                </Grid>

                <div className="back-home">
                  <Grid item xs={12} >
                    <Button variant="contained"
                      color="secondary"
                      className="button is-link"
                      onClick={this.goHome}
                    >
                      Back to home
                </Button>
                  </Grid>
                </div>
              </Grid>
            </form>

          </div>

        </Container>

      </React.Fragment>
    );
  }
}

export default CreateOrUpdate;
