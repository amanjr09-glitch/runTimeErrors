import React, { useContext, useEffect, useReducer } from "react";

const Context = React.createContext();

const INITIAL_STATE = {
  auth: true,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, auth: action.auth };
      case "SET_USER":
        return { ...state, user: action.user };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setAuth = (auth) => {
    dispatch({ type: "SET_AUTH", auth });
  };
  const setUser = (user) => {
    dispatch({ type: "SET_USER", user });
  };
  return (
    <Context.Provider
      value={{
        state,
        setAuth,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuth = () => {
  return useContext(Context);
};

export { AuthProvider, useAuth };
