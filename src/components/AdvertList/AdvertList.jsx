import React, { Component } from 'react';
import Advert from '../Advert/Advert'

export default class AdvertsList extends Component {

  buildAdvertList = (adverts) => {
    
    return (
      <div className="row">
        {
           adverts.map(advert => <Advert advert={advert}/>) 
        }
      </div>
    )
  };

  render() {
    const { adverts } = this.props;
    
    return (
      <div className="mt-3">
        {
          adverts
          &&
          adverts.length
          &&
          this.buildAdvertList(adverts)
        }
        
        {
          !adverts
          &&
          <div className="text-center mt-5">
            <h2>No hay anuncios</h2>
          </div>
        }
      </div>
    );
  }
}