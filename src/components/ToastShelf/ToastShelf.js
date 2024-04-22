import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, removeAllToast } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleOnKeyDown(e) {
      if (e.key === "Escape") {
        removeAllToast();
      }
    }
    window.addEventListener("keydown", handleOnKeyDown);
    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [removeAllToast]);
  if (toasts.length === 0) return <></>;
  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast variant={item.variant} handleDismiss={item.handleDismiss}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
