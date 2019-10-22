import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Advert extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.advert._id}`);
  };

  render() {
    const { advert } = this.props;
    return (
      <div 
      key={advert._id}
      onClick={this.goToDetail}
      >

<p>{advert.photo}</p>    
        <p> {advert.name}</p>
        <p>{advert.description}</p>
        <p>{advert.price}</p>
        <p>{advert.tags}</p>
        <p>{advert.type}</p>

        <br></br>
      </div>
    );
  }
}

export default withRouter(Advert);