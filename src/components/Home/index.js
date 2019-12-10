import { connect } from 'react-redux';

import Home from './Home';
import { fetchAdverts } from '../../store/actions';


const mapDispatchToProps = {
  loadAdverts: fetchAdverts,
};

function mapStateToProps(state) {
    console.log('statederedux', state)
//   return state.ui;
return {adverts: state}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
