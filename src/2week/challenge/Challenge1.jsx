import { useState } from "react";

export default function Challenge1() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // pending : 1 -> 0 초기화 되라는건가?
    // complete : pending -> complet
    setPending(pending + 1);
    await delay(3000);
    setPending((prev) => prev - 1);
    setCompleted((prev) => prev + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
