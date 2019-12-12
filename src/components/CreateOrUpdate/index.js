import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert } from '../../store/actions';
import { setUser } from '../../store/actions' 



const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
  setUserInStore: setUser,
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
