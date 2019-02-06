import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './services/auth-service';
import PropTypes from 'prop-types';
import Home from './modules/home/Home';
import Sample from './modules/sample/Sample';
import NotFound from './modules/notFound/NotFound';

const PrivatePage = () => <div> private Page </div>;

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

SecretRoute.propTypes = {
  component: PropTypes.func
};

const routes = (
  // <Suspense fallback={<Loading />}>
  <Switch>
    {/* <Route exact path="/login" component={LoadableLogin} /> */}
    <Route exact path="/" component={Sample} />
    <Route path="/sample" component={Home} />
    <SecretRoute path="/dashboard" component={PrivatePage} />
    <Route component={NotFound} />
  </Switch>
  // </Suspense>
);

export default routes;
