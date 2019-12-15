import { connect } from 'react-redux';

import Login from './Login';
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
)(Login);
