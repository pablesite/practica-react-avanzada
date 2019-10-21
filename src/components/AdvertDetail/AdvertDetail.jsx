import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getAdvert }  from "../../services/AdvertDBService";

class AdvertDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    const advertID = this.props.match.params.id;

    getAdvert(advertID).then(advert => {
      if (advert.success == false) {
        this.props.history.push("/404");
      } else {
        this.setState({ advert });
      }
    });

  }
 


  render() {
    const { advert } = this.state;

    return (
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
      </div>
    )
  }
}

export default withRouter(AdvertDetail);