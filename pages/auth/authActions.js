// src/actions/authActions.js
export const loginSuccess = (username) => ({
    type: 'LOGIN_SUCCESS',
    payload: { username },
    // payload: { makh }
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  