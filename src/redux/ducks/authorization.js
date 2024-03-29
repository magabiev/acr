import { get } from "../../api/api";

/** Types **/
const LOGIN_STARTED = "login/started";
const LOGIN_SUCCEED = "login/succeed";
const LOGIN_ERROR = "login/error";
const LOAD_ADMIN_STARTED = "admin/load/started";
const LOAD_ADMIN_SUCCEED = "admin/load/succeed";
const LOGOUT = "admin/logout";

/** State **/
const initialState = {
  token: localStorage.getItem("token") || "",
  admin: {},
  adminLoading: false,
  authorizing: false,
  error: false,
};

/** Reducer **/
export default function authorization(state = initialState, action) {
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
        token: action.payload,
        authorizing: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    case LOAD_ADMIN_STARTED:
      return {
        ...state,
        adminLoading: true,
      };
    case LOAD_ADMIN_SUCCEED:
      return {
        ...state,
        admin: action.payload,
        adminLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function authorized(login, pass) {
  return (dispatch) => {
    dispatch({ type: LOGIN_STARTED });
    get(`authorization/login=${login}/password=${pass}`)
      .then((json) => {
        localStorage.setItem("token", json);
        return dispatch({
          type: LOGIN_SUCCEED,
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
        return dispatch({ type: LOGIN_ERROR });
      });
  };
}

export function loadAdmin() {
  return (dispatch) => {
    dispatch({ type: LOAD_ADMIN_STARTED });
    const token = localStorage.getItem("token");
    get(`adminInfo/token=${token}`).then((json) =>
      dispatch({ type: LOAD_ADMIN_SUCCEED, payload: json })
    );
  };
}

export function logout() {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}
