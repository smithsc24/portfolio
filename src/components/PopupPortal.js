import { useEffect } from "react";
import { createPortal } from "react-dom";

const PopupPortal = ({ mount, children }) => {
  // Create a simple element
  const el = document.createElement("div");

  useEffect(() => {
    //Add the simple element to the element we are mounting our component too
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  // mounts our component (children) to el
  return createPortal(children, el);
};

export default PopupPortal;