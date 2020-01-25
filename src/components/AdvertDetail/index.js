import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getAdvert } from '../../store/actions';
import { checkUserExist } from '../../store/selectors';


const mapDispatchToProps = {
  getAdvert: getAdvert

};

function mapStateToProps(state) {
  return {
    adverts: state.adverts,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    checkUser: checkUserExist(state.user),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
