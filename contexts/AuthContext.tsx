import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: () => false,
  isLoading: true,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    setUser(email);
    localStorage.setItem("user", email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isLoggedIn = () => {
    return !!user; // Return true if user is logged in, false otherwise
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn, isLoading }}
    >
      {isLoading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
