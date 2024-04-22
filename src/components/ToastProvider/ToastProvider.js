import React from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToats] = React.useState([]);
  const value = React.useMemo(
    () => ({
      toasts,
      setToats,
    }),
    [toasts]
  );
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
