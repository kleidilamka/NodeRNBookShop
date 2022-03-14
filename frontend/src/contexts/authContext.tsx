import React, { useContext, createContext } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

function AuthProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}
function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthState, useAuthDispatch };
