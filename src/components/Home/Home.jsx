import React, { useState, useEffect } from 'react';

import Profile from '../Profile';
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

export default function Home(props) {

  const type = [
    'sell',
    'buy',
  ];

  const { adverts, checkUser, error, history, isFetching, loadAdverts, user, tagList } = props;

  const [filters, setFilters] = useState({
    name: '',
    price: '',
    tag: '',
    type: ''
  });

  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (checkUser.exist) {
      loadAdverts("tag=" + checkUser.user.tag).then(() => setUpdate(true))

    } else {
      history.push("/login");
    }

  }, [checkUser.exist, loadAdverts, checkUser.user.tag, history]);


  function disableUpdate() {
    setUpdate(false)
  }

  const onSubmit = (event) => {
    event && event.preventDefault();

    const { name, price, tag, type } = filters;
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
      props.loadAdverts(filterString).then(() => setUpdate(true))
    } else {
      props.loadAdverts().then(() => setUpdate(true))

    }

  }


  const onInputChange = (event) => {

    const { name, value } = event.target;

    if (name === 'price') {
      const regExp = /\d*(?:-)\d*/;
      let newValue = regExp.exec(value);
      if (newValue == null) {
        if (!(/\D/.exec(value))) {
          setFilters({ ...filters, [name]: value })
        }
      } else {
        setFilters({ ...filters, [name]: newValue[0] })
      }
    } else {
      setFilters({ ...filters, [name]: value })
    }
  };

  return (
    <React.Fragment>
      {
        user
        &&
        <Profile
          name={user.name}
          surname={user.surname}
          email={user.email}
          tag={user.tag}
        > </Profile>
      }

      <form className="filter-form" onSubmit={onSubmit}>

        <Grid container alignItems='center' justify='center' spacing={3}>

          <Grid item xs={10} sm={2}>
            <TextField
              label="Name"
              value={filters.name}
              name="name"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={10} sm={2}>
            <TextField
              label="Price (min-max)"
              value={filters.price}
              name="price"
              onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
        adverts.length !== 0
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
