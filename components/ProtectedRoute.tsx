import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/AuthContext";

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = isLoggedIn();
    if (!isAuthenticated && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
