export default class Advert {
  description;
  name;
  photo;
  price;
  tags;  
  type;
  _id
  

  constructor(value) {
    this.description = value.description;
    this.name = value.name;
    this.photo = value.photo;
    this.price = value.price;
    this.tags = value.tags;
    this.type = value.type;
    this._id = value._id;

  }

}

