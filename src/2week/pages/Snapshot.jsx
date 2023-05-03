import { useState } from "react";

export default function Snapshot() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(prevNumber => prevNumber + 1); //number = 0
          setNumber(number + 1); //number = 0
          setNumber(number + 1); //number = 0
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
      <button
        onClick={() => {
          setNumber(number + 5); //number =0 
          alert(number); //number = 0
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
