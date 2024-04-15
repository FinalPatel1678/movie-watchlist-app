import ProtectedRoute from "@components/ProtectedRoute";
import { AuthProvider } from "@contexts/AuthContext";
import { ToastProvider } from "@contexts/ToastContext";
import RootLayout from "@layouts/RootLayout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { WatchlistProvider } from "@contexts/WatchlistContext";
import ErrorBoundary from "@components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <RootLayout>
        <ToastProvider>
          <AuthProvider>
            <WatchlistProvider>
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            </WatchlistProvider>
          </AuthProvider>
        </ToastProvider>
      </RootLayout>
    </ErrorBoundary>
  );
}

export default MyApp;
