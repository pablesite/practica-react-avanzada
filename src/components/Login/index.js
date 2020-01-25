import { connect } from 'react-redux';

import Login from './Login';
import { saveUser } from '../../store/actions';
import { checkUserExist } from '../../store/selectors';


function mapStateToProps(state) {
  return {
    checkUser: checkUserExist(state.user),
  };
}

const mapDispatchToProps = {
  saveUserInStore: saveUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
