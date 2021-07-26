import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Popover = (props) => {
  const { visible, children, onClose } = props;

  return (
    visible &&
    ReactDOM.createPortal(
      <div className="popover-container">
        {children}
        <button
          className="popover-close-btn"
          onClick={() => onClose && onClose()}
        >
          关闭
        </button>
      </div>,
      document.body
    )
  );
};

export default Popover;
