import React from "react";
import {useState} from "react";
import { sculptureList } from "../data";

export default function StateInReact() {
  const [index, setState] = useState(0);

  function handleClick() {
    setState((index) => index+ 1);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="state1">
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
//지역변수는 렌더링간에 유지되지 않음'
//그리고 인덱스를 추하라도 리렌더링을 유ㄹㅏ지않음