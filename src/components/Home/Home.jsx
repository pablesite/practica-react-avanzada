import React, { Component } from 'react';
import * as API from '../../services/AdvertDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Welcome from '../Welcome/Welcome';
import { UserConsumer } from '../Context/User'
import UserContext from '../Context/User'
import AdvertList from '../AdvertList/AdvertList';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const personTags = [
  'work',
  'lifestyle',
  'motor',
  'mobile'
];

const ventas = [
  'venta',
  'compra',
];


export default class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      adverts: [],
      filters: {
        name: '',
        price: '',
        tag: '',
        venta: ''
      }

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

  onSubmit = (event) => {
    event && event.preventDefault();

    const { name, price, tag, venta } = this.state.filters;
    let filterString = '';
    let temp = true;

    // if (price) {
    //   alert("The name must be bigger than 3 characters");
    //   return false;
    // }

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


    if (venta) {
      if (venta === 'venta') {
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

console.log(filterString)
    if (filterString && filterString.trim().length) {
      API.searchAdverts(filterString).then(adverts => this.setState({ adverts }))
    } else {
      this.discoverAdverts();
    }

  }

  // search = (e) => {
  //   const query = e.target.value;

  //   if (query && query.trim().length) {
  //     API.searchAdverts('name=' + query).then(adverts => this.setState({ adverts }))
  //   } else {
  //     this.discoverAdverts();
  //   }
  // };


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
    //const { adverts } = this.state;
    const { user } = this.context;
    //const {name, role, tag} = this.props.match.params;

    const { adverts, filters } = this.state;

    console.log(this.state.filters)

    return (
      <React.Fragment>
        Vista de home.

        <Welcome
          name={user.name}
          surname={user.surname}
          tag={user.tag}
        > </Welcome>


        <Grid container >

          <Grid item >Test Grid</Grid>


        </Grid>



        <form onSubmit={this.onSubmit}>
          <TextField
            // className={styles.TextField}
            label="Name"
            value={filters.name}
            name="name"
            onChange={this.onInputChange}

          />

          <TextField
            // className={styles.TextField}
            label="Precio (min-max)"
            value={filters.price}
            name="price"
            onChange={this.onInputChange}

          />

          <FormControl>
            <InputLabel >Tags</InputLabel>
            <Select
              label="Tag"
              value={filters.tag}
              name="tag"
              onChange={this.onInputChange}
            // input={<Input id="select-multiple" />}
            // MenuProps={MenuProps}
            // style={styles.textField}
            >
              {personTags.map(tag => (
                <MenuItem key={tag} value={tag} >
                  {tag}
                </MenuItem>
              ))}

            </Select>
          </FormControl>


          <FormControl>
            <InputLabel >Venta</InputLabel>
            <Select
              label="Venta"
              value={filters.venta}
              name="venta"
              onChange={this.onInputChange}
            // input={<Input id="select-multiple" />}
            // MenuProps={MenuProps}
            // style={styles.textField}
            >
              {ventas.map(venta => (
                <MenuItem key={venta} value={venta} >
                  {venta}
                </MenuItem>
              ))}

            </Select>
          </FormControl>



          <br></br>
          <Button
            variant="contained"
            color="primary"
            type='submit'
          >
            Filtra!
        </Button>
        </form>

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