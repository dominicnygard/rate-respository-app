export const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
      };

    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
      };

    default:
      return state;
  }
};
