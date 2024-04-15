import Header from "@components/Header";
import { useAuth } from "@contexts/AuthContext";
import React from "react";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <section className="my-4 mx-4">
        <h2 className="text-xl font-semibold mb-2">
          Welcome, <span className="text-blue-500">{user}!</span>
        </h2>
      </section>
      {children}
    </>
  );
};

export default MainLayout;
