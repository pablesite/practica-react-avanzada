import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert } from '../../store/actions';
import { checkUserExist } from '../../store/selectors';


const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
};

function mapStateToProps(state) {
return {
    adverts: state.adverts, 
    user: state.user, 
    tagList: state.tags,
    checkUser: checkUserExist(state.user), 
  } 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
