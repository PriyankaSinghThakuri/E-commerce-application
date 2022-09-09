import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [manager, setManager] = useState(null);
  // const adminEmail = (email) =>
  //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.admin(email);
  // const managerEmail = (email) =>
  //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.manager(email);

  const login = (user, admin, manager) => {
    setAdmin(admin);
    setManager(manager);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    setManager(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, admin, manager, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
