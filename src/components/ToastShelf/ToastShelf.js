import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  if (toasts.length === 0) return <></>;
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
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
