import React, { createContext, useState, useEffect } from "react";
import { useAppDispatch } from "reduxHook";
import { getProfile } from "store/user/userSlice";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  user: object | null;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  token: null,
  user: null,
  logout: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token") || null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!token;
  });
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      dispatch(getProfile());
      //fetch Profile
      // setUser(user);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
