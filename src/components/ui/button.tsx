import React from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => (
  <button
    ref={ref}
    className={`bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition ${className}`}
    {...props}
  >
    {children}
  </button>
));
Button.displayName = "Button";
