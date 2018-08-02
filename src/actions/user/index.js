import types from './types';

export default Object.freeze({
  fillUser: payload => ({
    type: types.FILL_USER,
    payload
  }),
  loginUser: payload => ({
    type: types.LOGIN_USER,
    payload
  }),
  logoutUser: () => ({
    type: types.LOGOUT_USER
  }),
  registerUser: payload => ({
    type: types.REGISTER_USER,
    payload
  })
});
