import { connect } from 'react-redux';

import Home from './Home';
import { fetchAdverts } from '../../store/actions';
import { setUser } from '../../store/actions' 


const mapDispatchToProps = {
  loadAdverts: fetchAdverts,
  setUserInStore: setUser
};

function mapStateToProps(state) {
    console.log('statederedux', state)
//   return state.ui;
return {adverts: state.adverts, user: state.user} //con state sólo sí que funciona
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);