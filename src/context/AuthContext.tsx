import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, Company } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signup: (company: Company) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    currentUser: null,
  });

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setAuth({
        isAuthenticated: true,
        currentUser: JSON.parse(user),
      });
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const companies = JSON.parse(localStorage.getItem('companies') || '[]');
    const company = companies.find(
      (c: Company) => c.email === email && c.password === password
    );

    if (company) {
      setAuth({
        isAuthenticated: true,
        currentUser: company,
      });
      localStorage.setItem('currentUser', JSON.stringify(company));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      currentUser: null,
    });
    localStorage.removeItem('currentUser');
  };

  const signup = (company: Company) => {
    const companies = JSON.parse(localStorage.getItem('companies') || '[]');
    companies.push(company);
    localStorage.setItem('companies', JSON.stringify(companies));
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};