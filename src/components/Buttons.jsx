import { SingleButton } from "./SingleButton";
import Clear from "../clear.svg";

export const Buttons = ({ displayValue, setDisplayValue }) => {
  const handleClearClick = () => {
    const newValue = displayValue.slice(0, -1);
    setDisplayValue(newValue.length === 0 ? "0" : newValue);
  }
  
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center px-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <SingleButton
          key={num}
          buttonContent={num}
          handleClick={() => setDisplayValue(prevValue => prevValue === "0" ? num.toString() : prevValue + num.toString())}
        />
      ))}
      <SingleButton buttonContent={Clear} isImage={true} handleClick={handleClearClick} />
      <div>
        <SingleButton buttonContent="Entrar" handleClick={() => console.log("Entrar button clicked!")} />
      </div>
    </div>
  );
};
