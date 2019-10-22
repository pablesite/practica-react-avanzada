import React, { Component } from 'react';
import Advert from '../Advert/Advert'

export default class AdvertsList extends Component {

  buildAdvertList = (adverts) => {
    
    return (
      <div>
        {
           //adverts.map(advert1 => <Advert advert={advert1}/>) 
           adverts.map(function (advert1, i) {
              return <Advert key={i} advert={advert1}/>
              })
        }  
      </div>
    )
  };

  render() {
    const { adverts } = this.props;
    
    return (
      <div >
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
          <div >
            <h2>No hay anuncios</h2>
          </div>
        }
      </div>
    );
  }
}