import React, { useRef, useState } from 'react';

function Button(props) {
  const butRef = useRef();
  const [activeState, setActiveState] = useState(0);
  const move = (value) => {
    setActiveState(value);
  };
  return (
    <>
      <li>
        <label htmlFor="delivery__input1">
        <button
          ref={butRef}
          onClick={() => {
            props.callUpdateData(0);
            move(0);
          }}
          className={activeState === 0 ? 'neutral_button active ' : 'neutral_button n-active '}>
          {props.style[0]}
        </button>
        </label>
      </li>
      <li>
        <button
          ref={butRef}
          onClick={() => {
            props.callUpdateData(1);
            move(1);
          }}
          className={activeState === 1 ? 'neutral_button active ' : 'neutral_button n-active '}>
          {props.style[1]}
        </button>
      </li>
    </>
  );
}
// class = non-active
export default Button;
