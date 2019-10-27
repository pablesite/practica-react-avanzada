import React, { Component } from 'react';
import Advert from '../Advert/Advert'

export default class AdvertsList extends Component {

  buildAdvertList = (adverts) => {
    
    return (
      <React.Fragment>
        {
           adverts.map(function (advert1, i) {
              return <Advert key={i} advert={advert1}/>
              })
        }  
      </React.Fragment>
    )
  };

  render() {
    const { adverts } = this.props;
    
    return (
      <React.Fragment>
        {
          this.buildAdvertList(adverts)
        }
      </React.Fragment>
    );
  }
}