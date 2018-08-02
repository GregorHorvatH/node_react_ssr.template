import types from '../../actions/user/types';

const initialState = {
  login: 'Gregory',
  token: undefined
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.FILL_USER:
      return {
        ...state,
        ...payload
      };

    case types.REGISTER_USER:
    case types.LOGIN_USER:
      return {
        ...state,
        login: payload
      };

    case types.LOGOUT_USER:
      return {
        ...state,
        login: undefined
      };

    default:
      return state;
  }
};
