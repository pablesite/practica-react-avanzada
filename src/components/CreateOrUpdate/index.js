import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert } from '../../store/actions';
//import { setUser } from '../../store/actions' 



const mapDispatchToProps = {
  createAdvert: createAdvert,
  //setUserInStore: setUser
};

function mapStateToProps(state) {
//   return state.ui;
return {adverts: state.adverts, user: state.user} //con state sólo sí que funciona
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
