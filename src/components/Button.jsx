import React from "react";

function Button({ generateAdvice, isWaiting, children }) {
  const style = isWaiting ? "bg-light-cyan" : "bg-neon-green";
  return (
    <button
      disabled={isWaiting}
      onClick={generateAdvice}
      className={`absolute bottom-[-32px] rounded-full ${style} p-[20px] text-dark-blue shadow-[0_0_40px_0] transition duration-150 hover:cursor-pointer hover:shadow-neon-green hover:ease-in-out disabled:pointer-events-none disabled:hover:shadow-none`}
    >
      {children}
    </button>
  );
}

export default Button;
