import types from '../../actions/user/types';

const initialState = {
  login: 'gregory'
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
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
