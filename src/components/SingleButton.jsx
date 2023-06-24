import "../index.css";
import React, { useState } from "react";

export const SingleButton = ({
  buttonContent,
  handleClick,
  isImage = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
    handleClick(buttonContent); // actualiza el valor de display cuando se hace click en el botón
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`bg-[#222] text-[#00FF67] text-shadow-default font-oswald w-full h-14 rounded-2xl ${
        isActive ? "shadow-active " : "shadow-neumorphic"
      }`}
    >
      {isImage ? <img className="mx-auto" src={buttonContent} alt="Button" /> : buttonContent}{" "}
    </button>
  );
};
