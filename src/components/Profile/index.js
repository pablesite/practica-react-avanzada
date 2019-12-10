import { connect } from 'react-redux';

import Profile from './Profile';
import { setUser } from '../../store/actions' 


const mapDispatchToProps = {
    setUserInStore: setUser,
};

 console.log('Prueba de entrar en index de Profile', mapDispatchToProps)
function mapStateToProps(state) {
   return {test: 1};
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
