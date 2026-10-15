'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'admin' | 'student';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role?: 'admin' | 'student', name?: string, phone?: string) => void;
  signup: (name: string, email: string, phone: string, role?: 'admin' | 'student') => void;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_STORAGE_KEY = 'cybernova_auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load user auth state:', e);
    }
  }, []);

  const login = (
    email: string,
    role: 'admin' | 'student' = 'student',
    name?: string,
    phone?: string
  ) => {

    const isAdminUser = role === 'admin' || email.toLowerCase().includes('admin');
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: name || (isAdminUser ? 'Academy Administrator' : email.split('@')[0]),
      email: email.trim(),
      phone: phone || '',
      role: isAdminUser ? 'admin' : 'student'
    };
    setUser(newUser);
    localStorage.setItem("auth_timestamp", Date.now().toString());
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
  };

  const signup = (
    name: string,
    email: string,
    phone: string,
    role: 'admin' | 'student' = 'student'
  ) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role
    };
    setUser(newUser);
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
  const loginTime = localStorage.getItem("auth_timestamp");
  if (loginTime) {
    const currentTime = Date.now();
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000;
    
    if (currentTime - parseInt(loginTime, 10) > twoDaysInMillis) {
      logout();
      localStorage.removeItem("auth_timestamp");
    }
  }
}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAdmin: user?.role === 'admin'
      }}
    >
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
