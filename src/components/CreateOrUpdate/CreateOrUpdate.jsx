import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import * as API from '../../services/AdvertDBService';
// import AdvertDetail from '../AdvertDetail/AdvertDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Profile from '../Profile/Profile';
//import { UserConsumer } from '../Context/User'

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import UserContext from '../Context/User'
import { getTags } from '../../services/AdvertDBService';
import { getUser } from '../../services/Storage';

const ventas = [
  'buy',
  'sell',
];


export default class CreateOrUpdate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      advert: {
        description: 'Descripción 1',
        name: 'Nombre 1',
        photo: 'Url1',
        price: 10 ,
        tags: ['mobile'],
        type: 'buy',
        // _id: ''
      },
      tagList: [],
    }

    console.log('tessssssssst')
    // Mirar si tenemos el ID como path param
    // Si tenemos el ID buscamos el producto en la base de datos (llamada al backend) y lo ponemos en el estado
    // Si no tenemos el ID inicializamos el estado a un objeto vacío


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


  componentDidMount() {
    if (this.checkUserExist()) {
      this.getTags();
      
    }
  }

  createAdvert = () => {
    
    //const { description, name, photo, price, tags, type, _id } = this.state.advert;
    API.createAdvert(this.state.advert).then(res => {console.log(res.result)});
  }

  
  save() {
    // Tenemos el ID del path param ? Sí: Pues es un update: No: Pues es un create
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     name: props.name
  //   }
  // }

  onSubmit = (event) => {
    event && event.preventDefault();

    this.createAdvert();

  }


 


  onInputChange = (event) => {
    
    const { name, value } = event.target;

        this.setState(({ advert }) => ({
          advert: {
          ...advert,
          [name]: value
        }
      }));
    
    console.log(this.state)

  };



  render() {
    const { user } = this.context;
    const { description, name, photo, price, tags, type, _id } = this.state.advert;
    const { tagList } = this.state; 
  
    return (
      <React.Fragment>

        <Profile
          name={user.name}
          surname={user.surname}
          tag={user.tag}
        > </Profile>

        <form onSubmit={this.onSubmit}>

          <Grid alignItems='center' justify='center' container spacing={3}>

            <Grid item xs={10} sm={2}>
              <TextField
                // className={styles.TextField}
                label="Name"
                value={name}
                name="name"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={2}>
              <TextField
                // className={styles.TextField}
                label="Description"
                value={description}
                name="description"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={2}>
              <TextField
                // className={styles.TextField}
                label="Photo"
                value={photo}
                name="photo"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={2}>
              <TextField
                // className={styles.TextField}
                label="Precio (min-max)"
                value={price}
                name="price"
                onChange={this.onInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={10} sm={1}>
              <FormControl fullWidth>
                <InputLabel >Tags</InputLabel>
                <Select
                  label="Tag"
                  value={tags}
                  name="tags"
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
            </Grid>

            <Grid item xs={10} sm={1}>
              <FormControl fullWidth >
                <InputLabel >Venta</InputLabel>
                <Select
                  label="Venta"
                  value={type}
                  name="type"
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
              </FormControl >
            </Grid>

            <br></br>
            <Grid item xs={10} sm={3}>
              <Button
                variant="contained"
                color="primary"
                type='submit'
              >
                Crea tu anuncio!
            </Button>
            </Grid>
          </Grid>
        </form>

      </React.Fragment>
    );
  }
}

CreateOrUpdate.contextType = UserContext;

//export default withRouter(Advert);