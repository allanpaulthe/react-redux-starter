import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './notFound.scss';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {

  render() {
    return (
      <div className='not-found-container'>
        <h1 className='title'>404</h1>
        <h2>Page not found</h2>
        <Link to='/' className='back-button'>Back to home</Link>
      </div>
    );
  }
}

NotFound.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};
