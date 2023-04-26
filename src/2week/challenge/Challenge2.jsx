import { useState, useEffect } from "react";

export function getFinalState(baseState, queue) {
  let finalState = baseState

  // TODO: do something with the queue...
  queue.map((action) => {
    typeof action === 'function' ? finalState = action(finalState) : finalState = action
  })
  
  // state를 써서 해보고 싶었는데,, 잘 안되네요ㅠ
  // const [finalState, setFinalState] = useState(baseState)

  // useEffect(()=>{
  //   queue.map((action) => {
  //     typeof action === 'function'? setFinalState(n => action(n)):setFinalState(action)
  //     console.log(finalState)
  //   })
  // }, [])

  return finalState;
}
