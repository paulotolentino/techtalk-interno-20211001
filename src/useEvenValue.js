import { useState, useEffect, useCallback } from "react";

const useEvenValue = () => {
  const [currentState, setCurrentState] = useState();

  useEffect(() => {
    setCurrentState(0);
  }, []);

  const toggleCurrentState = useCallback((number) => {
    const numberValue = +number;
    if (numberValue % 2 === 0) {
      setCurrentState(numberValue);
    } else {
      setCurrentState(numberValue + 1);
    }
  }, []); /* eslint-disable-line */

  return {
    currentState,
    toggleCurrentState,
  };
};

export default useEvenValue;
