import React from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToats] = React.useState([]);

  const removeToast = (id) => {
    setToats((currentToats) => currentToats.filter((toast) => toast.id !== id));
  };

  const createToast = React.useCallback(
    (message, variant) => {
      const updatedToasts = [...toasts];
      const id = crypto.randomUUID();
      updatedToasts.push({
        id,
        message,
        variant,
        handleDismiss: () => removeToast(id),
      });
      setToats(updatedToasts);
    },
    [toasts]
  );

  const value = React.useMemo(
    () => ({
      toasts,
      createToast,
    }),
    [toasts, createToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
