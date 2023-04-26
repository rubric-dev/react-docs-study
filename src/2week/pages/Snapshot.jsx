import { useState } from "react";

export default function Snapshot() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{number}</h1>
      {/* <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      > */}
      <button
        onClick={() => {
          setNumber((prevNumer) => prevNumer + 1);
          setNumber((prevNumer) => prevNumer + 1);
          setNumber((prevNumer) => prevNumer + 1);
        }}
        >
        +3
      </button>
    </div>
  );
}

function Snapshot2() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{number}</h1>
      {/* <button
        onClick={() => {
          setNumber(number + 5);
          alert(number);
        }}
      > */}
      <button
        onClick={() => {
          const updateNumber = number + 5;
          setNumber(updateNumber);
          alert(updateNumber);
        }}
      >
        +5
      </button>
    </div>
  );
}
function Snapshot3() {
  const [number, setNumber] = useState(0);

  return (
    <div div className="container">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </div>
  );
}
