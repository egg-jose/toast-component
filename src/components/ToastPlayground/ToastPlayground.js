import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [currentVariant, setCurrentVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [toasts, setToats] = useState([]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleCloseToast = (id) => {
    setToats((currentToats) => currentToats.filter((toast) => toast.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedToasts = [...toasts];
    const id = crypto.randomUUID();
    updatedToasts.push({
      id,
      message: message,
      variant: currentVariant,
      handleDismiss: () => handleCloseToast(id),
    });
    setToats(updatedToasts);
    setMessage("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasts.length > 0 && <ToastShelf items={toasts} />}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleChangeMessage}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;
                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === currentVariant}
                      onChange={(event) => {
                        setCurrentVariant(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
