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
        : (e) => {
            let location = [...namespace];
            location.shift();
            onMouseEnter({
              ...variable,
              namespace: location,
              e
            });
          }
    }
    onMouseLeave={
      !onMouseLeave
        ? null
        : (e) => {
            let location = [...namespace];
            location.shift();
            onMouseLeave({
              ...variable,
              namespace: location,
              e
            });
          }
    }
  >
    {children}
  </div>
);
