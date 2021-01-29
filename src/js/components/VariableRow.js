import React from "react";

export default ({
  onMouseEnter,
  onMouseLeave,
  namespace,
  children,
  variable,
  ...props
}) => (
  <div
    style={props.style}
    class={props.class}
    key={props.key}
    onMouseEnter={
      !onMouseEnter
        ? null
        : () => {
            let location = [...namespace];
            location.shift();
            onMouseEnter({
              ...variable,
              namespace: location
            });
          }
    }
    onMouseLeave={
      !onMouseLeave
        ? null
        : () => {
            let location = [...namespace];
            location.shift();
            onMouseLeave({
              ...variable,
              namespace: location
            });
          }
    }
  >
    {children}
  </div>
);
