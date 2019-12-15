import { connect } from 'react-redux';

import Profile from './Profile';
import { setUser } from '../../store/actions' 


function mapStateToProps() {
  return {};
}


const mapDispatchToProps = {
    setUserInStore: setUser,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
