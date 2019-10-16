import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AdvertDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
       
  }

  render() {
   
   return (
   <div>
     Detalle de anuncio
   </div>
  )}
}

export default withRouter(AdvertDetail);