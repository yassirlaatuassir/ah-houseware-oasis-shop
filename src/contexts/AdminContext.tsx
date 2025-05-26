
import React, { createContext, useState, useContext, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  login: () => false,
  logout: () => {},
});

export const useAdmin = () => useContext(AdminContext);

const ADMIN_USERNAME = "admin"; // In a real app, this would be securely stored on a server
const ADMIN_PASSWORD = "ahhouseware2025"; // In a real app, this would be securely stored on a server
const ADMIN_KEY = "ah_admin_authenticated";

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Check if the admin is already logged in (from localStorage)
    const adminStatus = localStorage.getItem(ADMIN_KEY);
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_KEY, "true");
      localStorage.setItem('isAdmin', 'true'); // Set the isAdmin flag used in other components
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem(ADMIN_KEY);
    localStorage.removeItem('isAdmin'); // Remove the isAdmin flag used in other components
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
