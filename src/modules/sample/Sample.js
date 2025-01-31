import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import './sample.scss';
import * as actions from './actions';

const mapStateToProps = state => ({
  user: state.session.user,
  categories: state.sample.categories,
  pingMessage: state.sample.pingMessage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }),
  dispatch
});

class Sample extends Component {

  componentWillMount() {
    if (this.props.categories.length === 0) {
      this.props.dispatch(actions.fetchCategories());
    }
    this.props.dispatch(actions.ping({ ping: 'hello' }));
  }

  render() {
    return (
      <div className='sample-wrapper'>
        <h1 className='title'>Home page</h1>
        <h2>{this.props.pingMessage}</h2>
        <button
          onClick={() => {
            this.props.dispatch(push('/'));
          }}
        >
          Go to About Page
        </button>
        <h2>Hi, {this.props.user.name}</h2>
        {this.props.categories.map(cat => (
          <div key={cat.name}>{cat.name}</div>
        ))}
      </div>
    );
  }
}

Sample.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  categories: PropTypes.array,
  router: PropTypes.object,
  pingMessage: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
