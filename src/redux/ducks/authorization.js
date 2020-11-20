import { get } from "../../api/api";

/** Types **/
const LOGIN_STARTED = "login/started";
const LOGIN_SUCCEED = "login/succeed";
const LOGIN_ERROR = "login/error";

/** State **/
const initialState = {
  token: "",
  admin: {},
  authorizing: false,
  error: false,
};

/** Reducer **/
export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        error: false,
        authorizing: true,
      };
    case LOGIN_SUCCEED:
      return {
        ...state,
        admin: action.payload,
        token: action.payload,
        authorizing: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
}

export function authorized(login, pass) {
  return (dispatch) => {
    dispatch({ type: LOGIN_STARTED });
    get(`authorization/login=${login}/password=${pass}`)
      .then((json) =>
        dispatch({
          type: LOGIN_SUCCEED,
          payload: json,
        })
      )
      .catch((error) => dispatch({ type: LOGIN_ERROR }));
  };
}
