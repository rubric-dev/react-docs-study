import { useEffect, useState } from "react";

export function getFinalState(baseState, queue) {
  const [finalState, setFinalState] = useState(baseState);

  // TODO: do something with the queue...
  useEffect(() => {
    queue.map((q) => {
      if (typeof q === "string") {
        let increment = eval(q);
        setFinalState(increment(finalState));
      } else {
        setFinalState(q);
      }
    });

    return () => {
      setFinalState(baseState);
    };
  }, []);

  return finalState;
}
