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
        : e => {
          const x = e.clientX;
          const y = e.clientY;
          let location = [...namespace];
            location.shift();
            onMouseEnter({
              ...variable,
              namespace: location,
              x,
              y
            });
          }
    }
    onMouseLeave={
      !onMouseLeave
        ? null
        : e => {
            const target = e.target;
            let location = [...namespace];
            location.shift();
            onMouseLeave({
              ...variable,
              namespace: location,
              target
            });
          }
    }
  >
    {children}
  </div>
);
