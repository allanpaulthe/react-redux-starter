// import { hideLoader } from '../../modules/app/actions';
// import { updateUser } from '../../modules/auth/actions';
import { SUCCESS_DEFAULT, FAILURE_DEFAULT, USER_LOCKED } from '../constants';

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      // dispatch(showLoadingIndicator());
      const [
        REQUEST,
        SUCCESS = SUCCESS_DEFAULT,
        FAILURE = FAILURE_DEFAULT
      ] = types;
      next({ ...rest, type: REQUEST });

      const actionPromise = promise(client);
      actionPromise
        .then(
          result => {
            //   dispatch(hideLoader());
            if (result && result.data && result.data.error_code === 403) {
              next({ ...rest, result, type: USER_LOCKED });
              // dispatch(updateUser(null));
            } else {
              next({ ...rest, result, type: SUCCESS });
            }
          },
          error => {
            //   dispatch(hideLoader());
            next({ ...rest, error, type: FAILURE });
          }
        )
        .catch(error => {
          // dispatch(hideLoader());
          // eslint-disable-next-line no-console
          console.error('MIDDLEWARE ERROR:', error);
          // next({...rest, error, type: FAILURE});
        });

      return actionPromise;
    };
  };
}
