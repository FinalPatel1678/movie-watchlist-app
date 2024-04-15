import React, { createContext, useContext, useState, useEffect } from "react";

interface Toast {
  message: string | null;
  type: "success" | "error";
}

interface ToastContextType {
  showSuccess: (message: string | null) => void;
  showError: (message: string | null) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [toast, setToast] = useState<Toast>({ message: null, type: "success" });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (toast.message) {
      timeoutId = setTimeout(() => {
        setToast({ message: null, type: "success" });
      }, 5000); // Hide the toast after 5 seconds
    }

    return () => clearTimeout(timeoutId);
  }, [toast]);

  const showSuccess = (message: string | null) => {
    setToast({ message, type: "success" });
  };

  const showError = (message: string | null) => {
    setToast({ message, type: "error" });
  };

  const value = {
    showSuccess,
    showError,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast.message && (
        <div
          className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded-md ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p>{toast.message}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
};
