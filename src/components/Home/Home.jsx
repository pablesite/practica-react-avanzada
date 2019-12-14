import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import * as API from '../../services/AdvertDBService';
import UserContext from '../Context/User'

import Profile from '../Profile';
import { getTags } from '../../services/AdvertDBService';
import { getUser } from '../../services/Storage';

import Loading from '../Loading';
import Error from '../Error';

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

class Home extends Component {
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
      this.props.setUserInStore(getUser());
      return true;
    } else {
      this.props.history.push("/login");
      return false;
    }
  }

 
  componentDidMount() {
    if (this.checkUserExist()) {
      getTags().then(tags => { this.setState({ tagList: tags }) })
      this.props.loadAdverts("tag=" + getUser().tag).then(()=> this.setState({update: true}))
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
    } else {
      this.props.loadAdverts().then(()=> this.setState({update: true}))
     
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


    const { /*adverts,*/ tagList, filters, disableUpdate, update } = this.state;    
    const { adverts, user, isFetching, error } = this.props;
  
    return (
      <React.Fragment>

        <Profile
          name={user.name}
          surname={user.surname}
          email={user.email}
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
        
        
        {isFetching && <Loading className="app-loading" />}
        {error && <Error className="app-error" error={error} />}
  
        {
          !isFetching
          &&
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


export default withRouter(Home);