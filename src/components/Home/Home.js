import React, { Component } from 'react';
import * as API from '../../services/AdvertDBService';
import UserContext from '../Context/User'

import Profile from '../Profile';
import { getTags } from '../../services/AdvertDBService';
import { getUser } from '../../services/Storage';

import Box from '@material-ui/core/Box';
import Pagination from '../Pagination/Pagination';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import "./Home.css"


const type = [
  'sell',
  'buy',
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.disableUpdate = this.disableUpdate.bind(this);

    this.state = {
      adverts: [],
      tagList: [],
      filters: {
        name: '',
        price: '',
        tag: '',
        type: ''
      },
      disableUpdate: this.disableUpdate,
      update: true,
    }

  };


  checkUserExist() {
    if (getUser() !== null) {
      //this.context.updateUser(getUser());
      console.log('hay usuario loco!')
      this.props.setUserInStore(getUser());
      console.log('hay usuario loco!')
      return true;
    } else {
      this.props.history.push("/login");
      return false;
    }
  }

  getTags = () => {
    getTags().then(tags => {
      this.setState({ tagList: tags });
    })
  };

  discoverAdverts = () => {
    //comprobar si hay usuario guardado en localstore...

    //const { tag } = this.context.user;
    // API.searchAdverts("tag=" + tag).then(adverts => this.setState({ adverts }));
  
    const tag  = getUser().tag;
    this.props.loadAdverts("tag="+tag); 
   
  }

  componentDidMount() {
    if (this.checkUserExist()) {
      this.getTags();
      this.discoverAdverts();
    }
  }


  disableUpdate() {
    this.setState({ update: false })
  }

  onSubmit = (event) => {
    event && event.preventDefault();

    const { name, price, tag, type } = this.state.filters;
    let filterString = '';
    let temp = true;

    if (name) {
      filterString = 'name=' + name;
    }
    if (price) {
      if (filterString === '') {
        filterString = 'price=' + price;
      } else {
        filterString = filterString + '&price=' + price;
      }
    }
    if (tag) {
      if (filterString === '') {
        filterString = 'tag=' + tag;
      } else {
        filterString = filterString + '&tag=' + tag;
      }
    }

    if (type) {
      if (type === 'sell') {
        temp = true;
      } else {
        temp = false;
      }

      if (filterString === '') {
        filterString = 'venta=' + temp;
      } else {
        filterString = filterString + '&venta=' + temp;
      }
    }

    if (filterString && filterString.trim().length) {
      this.props.loadAdverts(filterString).then(()=> this.setState({update: true}))
      // API.searchAdverts(filterString).then(adverts => this.setState({ adverts, update: true }))
    } else {
      this.discoverAdverts();

    }

  }


  onInputChange = (event) => {

    const { name, value } = event.target;

    if (name === 'price') {
      const regExp = /\d*(?:-)\d*/;
      let newValue = regExp.exec(value);
      if (newValue == null) {
        if (!(/\D/.exec(value))) {
          this.setState(({ filters }) => ({
            filters: {
              ...filters,
              [name]: value
            }
          }));
        }
      } else {
        this.setState(({ filters }) => ({
          filters: {
            ...filters,
            [name]: newValue[0]
          }
        }));
      }
    } else {
      this.setState(({ filters }) => ({
        filters: {
          ...filters,
          [name]: value
        }
      }));
    }


  };




  render() {

    //const { user } = this.context;
    const { /*adverts,*/ tagList, filters, disableUpdate, update } = this.state;
    
    // const adverts  = this.props.adverts;
    const { adverts, user } = this.props;
    

    // if (!Array.isArray(adverts)) { //CHAPUZA MÁXIMA. Hay que jugar bien con el estado de store. Habrá que definirlo bien y ver qué me traigo y qué no. 
    //                                 // El asunto es que ahora mismo la primera vez que carga, es el estado inicial, que no coincide con el array de adverts. Mañana más!
    //   adverts = [];
    // }
    
   

    return (
      <React.Fragment>

        <Profile
          name={user.name}
          surname={user.surname}
          tag={user.tag}
        > </Profile>

        <form className="filter-form" onSubmit={this.onSubmit}>

          <Grid container alignItems='center' justify='center' spacing={3}>

            <Grid item xs={10} sm={2}>
              <TextField
                label="Name"
                value={filters.name}
                name="name"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={2}>
              <TextField
                label="Price (min-max)"
                value={filters.price}
                name="price"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={2}>
              <FormControl fullWidth>
                <InputLabel >Tags</InputLabel>
                <Select
                
                  label="Tag"
                  value={filters.tag}
                  name="tag"
                  onChange={this.onInputChange}
                >
                  <MenuItem value='' > <em>None</em> </MenuItem>
                  {tagList.map(tag => (
                    <MenuItem key={tag} value={tag} >
                      {tag}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={10} sm={2}>
              <FormControl fullWidth >
                <InputLabel >Type</InputLabel>
                <Select
                  label="Type"
                  value={filters.type}
                  name="type"
                  onChange={this.onInputChange}
                >
                  <MenuItem value='' > <em>None</em> </MenuItem>
                  {type.map(venta => (
                    <MenuItem key={venta} value={venta} >
                      {venta}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl >
            </Grid>

            <Grid item xs={10} sm={2}>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type='submit'
              >
                Filtra!
            </Button>
            </Box>
            </Grid>
          </Grid>

        </form>

  
        {
          adverts
          &&
          !adverts.length
          &&
          <h2>No hay anuncios. Pruebe otra búsqueda por favor.</h2>
        }

        {
           adverts
           &&
           adverts.length !==0
           &&

          <Pagination
            totalAdverts={adverts.length}
            numberPerPage='3'
            adverts={adverts}
            disableUpdate={disableUpdate}
            update={update}
          >

          </Pagination>
        }

      </React.Fragment>
    );
  }
}

Home.contextType = UserContext;