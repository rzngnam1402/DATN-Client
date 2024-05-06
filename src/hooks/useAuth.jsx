import axios from 'axios';
import { createContext, useContext, useMemo, useReducer } from 'react';

const AuthContext = createContext();

const ACTIONS = {
  setCredentials: 'setCredentials',
  clearCredentials: 'clearCredentials',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setCredentials: {
      const { token, role } = action.payload;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      return { ...state, token, role };
    }
    case ACTIONS.clearCredentials: {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return { ...state, token: null, role: null };
    }
    default:
      console.error(`Action type: ${action.type} doesn't exist`);
      return state;
  }
};

const initialData = {
  token: localStorage.getItem('token'),
  role: localStorage.getItem('role'),
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialData);

  const setCredentials = (token, role) => {
    dispatch({ type: ACTIONS.setCredentials, payload: { token, role } });
  };

  const clearCredentials = () => {
    dispatch({ type: ACTIONS.clearCredentials });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      setCredentials,
      clearCredentials,
    }),
    [state],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
