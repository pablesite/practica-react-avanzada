import { connect } from 'react-redux';

import Profile from './Profile';
import { deleteUser } from '../../store/actions' 


function mapStateToProps() {
  return {};
}


const mapDispatchToProps = {
    deleteUserFromStore: deleteUser,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
