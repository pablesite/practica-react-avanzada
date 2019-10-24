import React, { Component } from 'react';
import * as API from '../../services/AdvertDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Profile from '../Profile/Profile';
//import { UserConsumer } from '../Context/User'
import UserContext from '../Context/User'
import AdvertList from '../AdvertList/AdvertList';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { getTags } from '../../services/AdvertDBService';
import { getUser } from '../../services/Storage';



const ventas = [
  'venta',
  'compra',
];


export default class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      adverts: [],
      tagList: [],
      filters: {
        name: '',
        price: '',
        tag: '',
        venta: ''
      }

    }

  };


  checkUserExist() {
    if (getUser() !== null) {
      // Actualizo el contexto
      this.context.updateUser(getUser());
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
    const { tag } = this.context.user;
    API.searchAdverts("tag=" + tag).then(adverts => this.setState({ adverts }));
  }

  componentDidMount() {
    if (this.checkUserExist()) {
      this.getTags();
      this.discoverAdverts();
    }
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

    // console.log(filterString)
    if (filterString && filterString.trim().length) {
      API.searchAdverts(filterString).then(adverts => this.setState({ adverts }))
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
    //const { adverts } = this.state;

    const { user } = this.context;

    //const {name, role, tag} = this.props.match.params;

    const { adverts, tagList, filters } = this.state;

    // console.log(this.state.filters)

    // if (Object.entries(user).length === 0) {
    //   console.log('entra en render');
    //   return null;
    // }
    return (
      <React.Fragment>
       
        <Profile
          name={user.name}
          surname={user.surname}
          tag={user.tag}
        > </Profile>

        


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
              {tagList.map(tag => (
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

Home.contextType = UserContext;