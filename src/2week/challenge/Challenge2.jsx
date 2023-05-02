export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.map((item) => {
    if (typeof item === "function") {
      finalState = item(finalState);
    } else {
      finalState = item;
    }
  }, baseState);

  return finalState;
}
