import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);
  // const [manager, setManager] = useState(null);

  const login = (user) => {
    // setAdmin(admin);
    // setManager(manager);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    // setManager(null);
    // setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
