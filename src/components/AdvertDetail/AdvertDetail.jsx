import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getAdvert } from "../../services/AdvertDBService";
import { getUser } from '../../services/Storage';
import UserContext from '../Context/User'
import Button from '@material-ui/core/Button';
import Profile from '../Profile/Profile';

class AdvertDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};


    this.getAdvert = this.getAdvert.bind(this);
    this.goHome = this.goHome.bind(this);
    this.updateAdvert = this.updateAdvert.bind(this);

  }

  getAdvert() {
    const advertID = this.props.match.params.id;
    getAdvert(advertID).then(advert => {
      if (advert.success === false) {
        this.props.history.push("/404");
      } else {
        this.setState({ advert });
      }
    });
  }


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


  componentDidMount() {
    if (this.checkUserExist()) {
      this.getAdvert();
    }
  }

  goHome() {
    this.props.history.push('/home');
  }

  updateAdvert() {
    this.props.history.push(`/createOrUpdate/${this.props.match.params.id}`);

  }


  render() {
    const { user } = this.context;
    const { advert } = this.state;

    return (
<React.Fragment>
      <Profile
      name={user.name}
      surname={user.surname}
      tag={user.tag}
    > </Profile>


      <div className="container">
        {
          advert
          &&
          <div>
            <h1>{advert.name}</h1>
          </div>
        }

        {
          !advert
          &&
          <h1>Loading...</h1>
        }

        <Button variant="contained"
          color="secondary"
          className="button is-link"
          onClick={this.goHome}
        >
          Back to home
        </Button>

        <Button variant="contained"
          color="secondary"
          className="button is-link"
          onClick={this.updateAdvert}
        >
          Update Advert
        </Button>

      </div>

      </React.Fragment>
    )
  }
}

AdvertDetail.contextType = UserContext;

export default withRouter(AdvertDetail);