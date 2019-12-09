import { connect } from 'react-redux';

import Login from './Login';
//import { fetchBikes } from '../../store/actions';
// import { configureStore } from '../store'
import { setUser } from '../../store/actions' 

// function mapDispatchToProps(dispatch) {
//   return {
//     loadBikes: () => dispatch(fetchBikes()),
//   };
// }

//const store = configureStore();

const mapDispatchToProps = {
    setUserInStore: setUser,
};

console.log('TEEEEEEEEEEEEST')
 
function mapStateToProps(state) {
   return {test: 1};
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
