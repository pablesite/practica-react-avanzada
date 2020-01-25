import { connect } from 'react-redux';

import Home from './Home';
import { fetchAdverts } from '../../store/actions';
import { checkUserExist } from '../../store/selectors';



function mapStateToProps(state) {
  return { 
    adverts: state.adverts, 
    user: state.user,  
    isFetching: state.isFetching, 
    error: state.error,
    tagList: state.tags,
    checkUser: checkUserExist(state.user), 
  } 
}


const mapDispatchToProps = {
  loadAdverts: fetchAdverts,

};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
