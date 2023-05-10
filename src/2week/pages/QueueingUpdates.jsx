import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{number}</h1>
      <button
        onClick={() => {
          // 큐에 쌓아놓고 한번에 처리한 후 dom에 반영하므로 0 -> 6 이 됨
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>
    </div>
  );
}
