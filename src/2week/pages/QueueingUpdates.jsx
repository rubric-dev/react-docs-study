import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>
    </div>
  );
}
