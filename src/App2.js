import { useState } from "react";
import useEvenValue from "./useEvenValue";

const FavoriteEntitiesSection = () => {
  const [value, changeValue] = useState("");
  const { currentState, toggleCurrentState } = useEvenValue();
  const { currentState: currentState2 } = useEvenValue();

  return (
    <div>
      <p>Valor atual 2: {currentState2}</p>
      <p>Valor atual: {currentState}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
      <button onClick={() => toggleCurrentState(value)}>Change</button>
    </div>
  );
};

export default FavoriteEntitiesSection;
