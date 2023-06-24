import React, { useState } from "react";

export const Screen = ({ displayValue }) => {
  return (
      <div className="bg-black border-2 border-[#00FF67] mx-auto relative z-10 w-[90%] h-[90px] mb-4 mt-3 px-3 py-1">
        <h1 className="text-white font-oswald text-2xl text-end">{displayValue}</h1>
      </div>
  );
};
