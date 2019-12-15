import React, { Component } from 'react';
import Advert from '../Advert/Advert'

export default class AdvertsList extends Component {

  render() {
    const { adverts } = this.props;
    
    return (
      <React.Fragment>
        {
          adverts.map(function (advert, i) {
            return <Advert key={i} advert={advert}/>
            })
        }
      </React.Fragment>
    );
  }
}