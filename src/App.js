import "./index.css"
import { Screen } from "./components/Screen";
import { Buttons } from "./components/Buttons";
import React, { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  
  return (
    <div className="max-w-[320px] mx-auto">
      <Screen displayValue={displayValue} />
      <Buttons displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  )
}

export default App;
