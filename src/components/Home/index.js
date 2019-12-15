import { connect } from 'react-redux';

import Home from './Home';
import { fetchAdverts } from '../../store/actions';
import { checkUserExist } from '../../store/selectors';
import { setUser } from '../../store/actions'


function mapStateToProps(state) {
  return { 
    adverts: state.adverts, 
    user: state.user,  
    isFetching: state.isFetching, 
    error: state.error,
    checkUser: checkUserExist()  
  } 
}


const mapDispatchToProps = {
  loadAdverts: fetchAdverts,
  setUserInStore: setUser
};



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
