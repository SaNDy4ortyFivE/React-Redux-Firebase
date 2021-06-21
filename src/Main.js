import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import { withRouter } from 'react-router';

import App from './App';

function mapStateToProps(state) {
  return {
    posts: state.post,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Mapp = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

export default Mapp;
