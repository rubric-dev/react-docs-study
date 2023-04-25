import React, { useEffect, useState } from "react";

export default function RenderAndCommit() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
      <Counter />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  if (count === 1) {
    setCount(2);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
