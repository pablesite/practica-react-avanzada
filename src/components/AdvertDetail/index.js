import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getAdvert } from '../../store/actions';
import { setUser } from '../../store/actions' 



const mapDispatchToProps = {
  setUserInStore: setUser,
  getAdvert: getAdvert

};

function mapStateToProps(state) {
return {adverts: state.adverts, user: state.user, isFetching: state.isFetching, error: state.error} 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
