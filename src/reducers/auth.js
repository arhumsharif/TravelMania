import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState = {
  token: cookies.get('token'),
  userType: -1,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      cookies.set('token', payload.token);
      return {
        ...state,
        ...payload,
        userType: payload.role,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      cookies.set('token', '');
      return {
        ...state,
        ...payload,
        userType: -1,
      };
    default:
      return state;
  }
}
