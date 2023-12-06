// ../auth/authReducer.js
const initialState = {
    isLoggedIn: false,
    username: "", // Thêm trường username
    // makh: '', // Thêm trường makh
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
            };
        case "LOGOUT":
            return { ...state, isLoggedIn: false, username: "" };
        default:
            return state;
    }
};

export default authReducer;
