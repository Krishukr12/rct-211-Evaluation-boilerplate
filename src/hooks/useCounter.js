import { useState } from "react";
export const useCounter = ({ initialValue, minValue, maxValue }) => {
  const [count, setCount] = useState(initialValue);
  const incCount = (payload) => {
    if (count < maxValue) {
      setCount(count + payload || count + 1);
    }
  };
  const decCount = (payload) => {
    if (count > minValue) {
      setCount(count - payload || count - 1);
    }
  };
  return { incCount, count, decCount };
};
